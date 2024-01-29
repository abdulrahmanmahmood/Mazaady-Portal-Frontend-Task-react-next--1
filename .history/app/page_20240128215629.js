
import Image from "next/image";
import MCApis from "./_utils/MCApis";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{},[])

  const getMainCat =()=>{
    MCApis.getMaincategories().then((res)=>console.log(res.data.data))
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
