'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import MCApis from './_utils/MCApis'

export default async  function  Home() {
  const [cats,setCats]= useState([])
  useEffect(()=>{
    getAllCategories
  },[cats])

  const getAllCategories =()=>{
    MCApis.getAllCats().then((res)=>{
      setCats(res.data.data)
      console.log(res.data.data);
    })
  }


  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
