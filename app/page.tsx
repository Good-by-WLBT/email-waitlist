import React from "react";
import { ConsentBox } from "./_components/Consentbox";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center alan-sans-400 flex-col">
      <h1>
        <span className=" text-3xl font-bold text-blue-500 fugaz-one-regular ">
          Goed.
        </span>{" "}
        waitlist
      </h1>
      <p>Join the waitlist to help us build the future of email!</p>
      <div className="border border-zinc-300 rounded-xl shadow-md w-fit max-w-[60%] p-5 mt-5">
        <h1 className="font-bold fugaz-one-regular">Let's get to know you.</h1>
        <form
          className="gap-2 w-full items-center mt-2"
          method="POST"
          action={"/api/send-verification"}
        >
          I am <InlineInput name="fullname" placeholder="Your name..." /> and I
          am a{" "}
          <InlineInput
            name="job_description"
            placeholder="Your job description..."
          />{" "}
          and I am currently using{" "}
          <InlineInput
            name="current_email_provider"
            placeholder="Your current email provider..."
          />
          .<br />
          <br /> At release I would like to reserve the email{" "}
          <InlineInput name="reserved_prefix" placeholder="Your prefix..." />@
          <span className="text-blue-500">goed.email</span> and my current
          e-mail is{" "}
          <InlineInput
            type="email"
            name="current_email"
            placeholder="test@example.com"
          />
          .
          <ConsentBox />
        </form>
      </div>
    </div>
  );
}

function InlineInput(props: React.ComponentProps<"input">) {
  const { className, ...rest } = props;
  return (
    <input
      className={
        "w-[15rem] inline outline-none border-b focus:border-blue-500 " +
        className
      }
      required
      {...rest}
    />
  );
}
