'use client'
import Image from "next/image";
import MCApis from "./_utils/MCApis";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    getMainCat()
  },[])

  const getMainCat =()=>{
    MCApis.getMaincategories().then(res)
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
