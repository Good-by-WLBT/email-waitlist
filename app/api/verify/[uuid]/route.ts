import { getMysqlConnection } from "@/app/serverUtils/buntils";
import { NextResponse } from "next/server";
import { success } from "zod";

export async function GET(
  request: Request,
  ctx: RouteContext<"/api/verify/[uuid]">,
) {
  const { uuid } = await ctx.params;

  // Get a fresh database connection for this request
  const mysql = getMysqlConnection();

  const resultData = await mysql`
    SELECT * FROM \`verification_hashes\` WHERE hash = ${uuid}
    `;

  if (resultData.length === 0) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 404,
      },
    );
  }

  await mysql`
    INSERT INTO \`verified_users\` (verified_user_id) VALUES (${resultData[0].user_id})
    `;

  await mysql`
    DELETE FROM \`verification_hashes\` WHERE hash = ${uuid}
    `;

  return NextResponse.json({
    success: true,
  });
}
