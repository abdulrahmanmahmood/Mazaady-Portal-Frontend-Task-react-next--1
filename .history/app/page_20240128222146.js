import Image from "next/image";
import {getMainCats} from "./_utils/MCApis";
import { useEffect } from "react";

export default function asyn Home() {
  const allCats = await getMainCats();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
