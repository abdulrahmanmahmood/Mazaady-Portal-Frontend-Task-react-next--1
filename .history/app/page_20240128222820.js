'use client'
import Image from "next/image";
import {getMainCats} from "./_utils/MCApis";
import { useEffect } from "react";

export default async  function  Home() {
  const allCats = await getMainCats()
  const [cats,setCats]= useState([])

  useEffect(()=>{
    console.log(allCats);
  },[allCats])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}