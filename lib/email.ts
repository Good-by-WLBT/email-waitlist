import { render } from "@react-email/components";
import { createTransport } from "nodemailer";
import SMTPConnection from "nodemailer/lib/smtp-connection";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import Email from "@/emails/magicLink";

const configOptions = {
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
} as SMTPTransport.Options;

const transporter = createTransport(configOptions);

export async function sendEmail(
  uuid: string,
  to: string,
  fullname: string,
  past_provider: string,
  reserved_prefix: string,
) {
  const emailHtml = await render(
    Email({
      fullname: fullname,
      uuid: uuid,
      past_provider: past_provider,
      reserved_prefix: reserved_prefix,
    }),
  );

  const info = await transporter.sendMail({
    from: "The goed.email waitlist <support@goed.email>",
    to,
    subject: "Goed. Email waitlist confirmation",
    html: emailHtml,
  });

  console.log(info);
}
