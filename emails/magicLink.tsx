import {
  Body,
  Button,
  Font,
  Head,
  Html,
  Img,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function Email({
  fullname = "Test user",
  uuid = "uuid",
  past_provider = "Old provider",
  reserved_prefix = "test",
}: {
  fullname: string;
  uuid: string;
  past_provider: string;
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
            Hey <span className="font-bold">{fullname}</span>!
          </Text>
          <Text>
            Here is your well-deserved confirmation e-mail for{" "}
            <span className="text-blue-500 font-bold">Goed.</span> email. Though
            you can't move off {past_provider} just yet, we are working hard to
            make <span className="text-blue-500 font-bold">Goed.</span>{" "}
            available to you as soon as possible.
          </Text>
          <Text>
            Through this e-mail we will keep you updated about progress on{" "}
            <span className="text-blue-500 font-bold">Goed.</span>, and we will
            let you know when you can start emailing as {reserved_prefix}
            @goed.email
          </Text>
          <Text>
            Please click the provided button below to lock in your reservation,
            and confirm to us you are interesting in using{" "}
            <span className="text-blue-500 font-bold">Goed.</span>
          </Text>
          <Button
            className="bg-blue-500 text-white font-bold rounded-md p-2"
            href={`https://getgoed.com/api/verify/${uuid}`}
          >
            Confirm reserving the username {reserved_prefix}@goed.email!
          </Button>

          <Text>We hope to see you at release,</Text>
          <Text>
            Kind regards,
            <br /> Teun Wolbert, Founder and CEO of{" "}
            <span className="text-blue-500 font-bold">Goed.</span>
          </Text>
        </Body>
      </Html>
    </Tailwind>
  );
}
