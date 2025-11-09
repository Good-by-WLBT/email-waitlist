"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export function ConsentBox() {
  const [checked, setChecked] = useState(false);
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
            <span className="font-bold text-primary">Goed.</span> to e-mail me
            and save the data entered.
          </p>
        </label>
      </div>
      <div className=" flex justify-end w-full">
        <Button
          disabled={!checked}
          className="text-white bg-primary disabled:opacity-80 ml-auto w-fit"
        >
          Send verification!
        </Button>
      </div>
    </>
  );
}
