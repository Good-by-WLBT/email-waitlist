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
            <span className="font-bold text-blue-500">Goed.</span> to e-mail me
            and save the data entered.
          </p>
        </label>
      </div>
      <Button disabled={!checked} className="text-white bg-blue-500 disabled:opacity-50">
        Send verification!
      </Button>
    </>
  );
}
