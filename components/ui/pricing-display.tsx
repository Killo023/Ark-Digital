"use client";

import { useCurrency } from "@/lib/use-currency";

interface PricingDisplayProps {
  zar: string;
  usd: string;
}

export function PricingDisplay({ zar, usd }: PricingDisplayProps) {
  const currency = useCurrency();

  const price = currency === "ZAR" ? zar : usd;
  const symbol = currency === "ZAR" ? "R" : "$";

  return (
    <div className="space-y-1">
      <p className="text-sm text-slate-400">Starting from</p>
      <p className="text-3xl font-bold text-white">
        {symbol}{price}<span className="text-base text-slate-400 font-normal">/mo</span>
      </p>
    </div>
  );
}
