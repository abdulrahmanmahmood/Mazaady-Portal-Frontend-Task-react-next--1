'use client'
import Image from "next/image";
import { useEffect } from "react";
import MCApis from './_utils/MCApis'

export default async  function  Home() {
  const [cats,setCats]= useState([])

  const getAllCategories =()=>{
    MCApis.getAllCats()
  }

  useEffect(()=>{
    console.log(allCats);
  },[allCats])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
