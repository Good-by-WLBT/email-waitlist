import {
  Body,
  Font,
  Head,
  Html,
  Img,
  Tailwind,
  Text,
} from "@react-email/components";

export default function ThankYouEmail({
  fullname = "Test user",
  reserved_prefix = "test",
}: {
  fullname: string;
  reserved_prefix: string;
}) {
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            fontFamily="Alan Sans"
            fallbackFontFamily="Arial"
            webFont={{
              url: "https://fonts.gstatic.com/s/alansans/v1/zOLt4pbDmq5Eu6ebjMSx4sywa339j__gfN_o9yl_jSwi.woff2",
              format: "woff2",
            }}
          />
        </Head>
        <Body>
          <Text>
            Hey <span className="font-bold">{fullname}</span>,
          </Text>
          <Text>
            Thanks for confirming your spot on the waitlist. Your address
            <span className="font-bold text-blue-500">
              {" "}
              {reserved_prefix}@goed.email{" "}
            </span>
            is locked in and ready for launch.
          </Text>
          <Text>
            We&apos;re putting the finishing touches on{" "}
            <span className="text-blue-500 font-bold">Goed.</span> and will keep
            you posted as we open the doors.
          </Text>
          <Text>
            In the meantime, feel free to reply to this email with any feedback
            or questions—we&apos;d love to hear how we can make Goed perfect for
            you.
          </Text>
          <Text>
            Cheers,
            <br />
            Teun Wolbert & the{" "}
            <span className="text-blue-500 font-bold">Goed.</span> team
          </Text>
          <Img
            src="https://getgoed.com/Logo-text.png"
            alt="Goed logo"
            className="mt-8 mx-auto"
            width={128}
          />
        </Body>
      </Html>
    </Tailwind>
  );
}
