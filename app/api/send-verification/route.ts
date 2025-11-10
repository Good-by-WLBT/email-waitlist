import { getMysqlConnection } from "@/app/serverUtils/buntils";
import { sendEmail } from "@/lib/email";
import { NextResponse } from "next/server";
import * as z from "zod";

const waitlistSignup = z.object({
  fullname: z.string().max(50),
  job_description: z.string().max(255),
  current_email_provider: z.string().max(50),
  reserved_prefix: z.string().min(5).max(50),
  current_email: z.email(),
});

export async function POST(request: Request) {
  const formData = await request.formData();

  const input = {
    fullname: formData.get("fullname"),
    job_description: formData.get("job_description"),
    current_email_provider: formData.get("current_email_provider"),
    reserved_prefix: formData.get("reserved_prefix"),
    current_email: formData.get("current_email"),
  };

  const waitlistData = await waitlistSignup.safeParseAsync(input);
  if (!waitlistData.data) {
    console.log("Parse error");
    return NextResponse.redirect(new URL("/error", process.env.APP_URL));
  }

  // Get a fresh database connection for this request
  const mysql = getMysqlConnection();

  const doesPrefixExist = await mysql`
    SELECT * FROM \`users\` WHERE reserved_prefix = ${waitlistData.data.reserved_prefix}
    `;

  if (doesPrefixExist.length > 0) {
    console.log("prefix taken erro");
    return NextResponse.redirect(new URL("/error", process.env.APP_URL));
  }

  const doesEmailExist = await mysql`
    SELECT * FROM \`users\` WHERE current_email = ${waitlistData.data.current_email}
    `;

  if (doesEmailExist.length > 0) {
    console.log("email already registered error");
    return NextResponse.redirect(new URL("/error", process.env.APP_URL));
  }

  const insertUser = await mysql`
    INSERT INTO \`users\` (full_name, job_description, current_email_provider, reserved_prefix, current_email) VALUES (
    ${waitlistData.data.fullname},
    ${waitlistData.data.job_description},
    ${waitlistData.data.current_email_provider},
    ${waitlistData.data.reserved_prefix},
    ${waitlistData.data.current_email}
    ) RETURNING id
    `;
  const uuid: string = Bun.randomUUIDv7();

  await mysql`
    INSERT INTO \`verification_hashes\` (hash, user_id) VALUES (${uuid}, ${insertUser[0].id})
    `;

  await sendEmail(
    uuid,
    waitlistData.data.current_email,
    waitlistData.data.fullname,
    waitlistData.data.current_email_provider,
    waitlistData.data.reserved_prefix,
  );

  return NextResponse.redirect(new URL("/thank-you", process.env.APP_URL));
}
