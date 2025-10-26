import { getMysqlConnection } from "@/app/serverUtils/buntils";
import { NextResponse } from "next/server";

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
    return NextResponse.redirect(new URL("/error", process.env.APP_URL));
  }

  await mysql`
    INSERT INTO \`verified_users\` (verified_user_id) VALUES (${resultData[0].user_id})
    `;

  await mysql`
    DELETE FROM \`verification_hashes\` WHERE hash = ${uuid}
    `;

  return NextResponse.redirect(new URL("/verified", process.env.APP_URL));
}
