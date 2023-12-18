// https://api.llama.fi/tvl/clever
// https://api.llama.fi/tvl/concentrator
// https://api.llama.fi/tvl/fx-protocol
// https://api.llama.fi/tvl/aladdin-dao
"use client";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";

export const EcosystemTvl = () => {
  const [cleverTVL, setCleverTVL] = useState(0);
  const [concentratorTVL, setConcentratorTVL] = useState(0);
  const [fxProtocolTVL, setFxProtocolTVL] = useState(0);
  const [aladdinDaoTVL, setAladdinDaoTVL] = useState(0);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.llama.fi/tvl/clever")
      .then((res) => res.json())
      .then((data) => setCleverTVL(data));
    fetch("https://api.llama.fi/tvl/concentrator")
      .then((res) => res.json())
      .then((data) => setConcentratorTVL(data));
    fetch("https://api.llama.fi/tvl/fx-protocol")
      .then((res) => res.json())
      .then((data) => setFxProtocolTVL(data));

    fetch("https://api.llama.fi/tvl/aladdin-dao")
      .then((res) => res.json())
      .then((data) => setAladdinDaoTVL(data));

    setLoading(false);
  }, []);

  const totalTVL = cleverTVL + concentratorTVL + fxProtocolTVL + aladdinDaoTVL;

  return (
    <div className="flex flex-col w-full">
      {isLoading ? (
        <Skeleton className="mx-auto h-10 w-[250px]" />
      ) : (
        <span className="text-4xl">${totalTVL.toLocaleString()}</span>
      )}

      <HoverCard>
        <HoverCardTrigger asChild>
          <span className="text-sm mt-1 flex justify-center cursor-pointer">
            Ecosystem TVL
            <Info className="w-3 h-3 ml-1" />
          </span>
        </HoverCardTrigger>
        <HoverCardContent className="w-2xl">
          f(x) Protocol: ${fxProtocolTVL.toLocaleString()} <br />
          Concentrator: ${concentratorTVL.toLocaleString()} <br />
          Aladdin DAO: ${aladdinDaoTVL.toLocaleString()} <br />
          Clever: ${cleverTVL.toLocaleString()} <br />
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
