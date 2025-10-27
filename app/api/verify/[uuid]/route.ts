import { NextResponse } from "next/server";
import { getMysqlConnection } from "@/app/serverUtils/buntils";
import { sendThankYouEmail } from "@/lib/email";

export async function GET(
  _request: Request,
  ctx: RouteContext<"/api/verify/[uuid]">,
) {
  const { uuid } = await ctx.params;

  // Get a fresh database connection for this request
  const mysql = getMysqlConnection();

  const resultData = await mysql`
    SELECT * FROM \`verification_hashes\` WHERE hash = ${uuid}
    `;

  if (resultData.length === 0) {
    return NextResponse.redirect(
      new URL(`/error?code=invalid_verification`, process.env.APP_URL),
    );
  }

  const userRows = await mysql`
    SELECT full_name, current_email, reserved_prefix FROM \`users\` WHERE id = ${resultData[0].user_id}
    `;

  if (userRows.length === 0) {
    return NextResponse.redirect(
      new URL(`/error?code=invalid_verification`, process.env.APP_URL),
    );
  }

  const user = userRows[0];

  await mysql`
    INSERT INTO \`verified_users\` (verified_user_id) VALUES (${resultData[0].user_id})
    `;

  await mysql`
    DELETE FROM \`verification_hashes\` WHERE hash = ${uuid}
    `;

  try {
    await sendThankYouEmail(
      user.current_email,
      user.full_name,
      user.reserved_prefix,
    );
  } catch (error) {
    console.error("Failed to send thank you email:", error);
  }

  return NextResponse.redirect(new URL("/verified", process.env.APP_URL));
}
