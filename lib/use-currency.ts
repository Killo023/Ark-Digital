"use client";

import { useEffect, useState } from "react";

export type Currency = "ZAR" | "USD";

function detectCurrency(): Currency {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone === "Africa/Johannesburg") return "ZAR";
    const locale = navigator.language || "en-US";
    if (locale === "en-ZA") return "ZAR";
    return "USD";
  } catch {
    return "USD";
  }
}

export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>("USD");

  useEffect(() => {
    setCurrency(detectCurrency());
  }, []);

  return currency;
}
