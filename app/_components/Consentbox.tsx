"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export function ConsentBox() {
  const [checked, setChecked] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileError, setTurnstileError] = useState<string | null>(null);

  return (
    <>
      <div className="flex items-center pt-3 gap-2">
        <Checkbox
          id="consent"
          checked={checked}
          onCheckedChange={(checked) =>
            typeof checked === "boolean" && setChecked(checked)
          }
        />
        <label htmlFor="consent">
          <p>
            I hereby give consent for{" "}
            <span className="font-bold text-blue-500">Goed.</span> to e-mail me
            and save the data entered.
          </p>
        </label>
      </div>
      <div className="pt-4">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
          onSuccess={(token) => {
            setTurnstileToken(token);
            setTurnstileError(null);
          }}
          onError={(error) => {
            console.error("Turnstile error:", error);
            setTurnstileError(
              "Verification failed. Please refresh the page and try again.",
            );
            setTurnstileToken(null);
          }}
          onExpire={() => {
            console.warn("Turnstile token expired");
            setTurnstileToken(null);
          }}
          onTimeout={() => {
            console.error("Turnstile timeout");
            setTurnstileError(
              "Verification timed out. Please refresh the page and try again.",
            );
            setTurnstileToken(null);
          }}
          options={{
            appearance: "interaction-only",
            theme: "auto",
            refreshExpired: "auto",
          }}
        />
        {turnstileError && (
          <p className="text-red-500 text-sm mt-2">{turnstileError}</p>
        )}
      </div>
      <input
        type="hidden"
        name="cf-turnstile-response"
        value={turnstileToken || ""}
      />
      <Button
        disabled={!checked || !turnstileToken}
        className="text-white bg-blue-500 disabled:opacity-50"
      >
        Send verification!
      </Button>
    </>
  );
}
