'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import MCApis from './_utils/MCApis'

export default function Home() {
const [cats,setCats]= useState([])
  useEffect(()=>{
    getAllCategories()
  },[])

  const getAllCategories =()=>{
    MCApis.getAllCats().then((res)=>{
      setCats(res.data.data.categories)
      console.log(res.data.data.categories);
    })
  }


  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {cats.map((item)=>{
        <h2>{item?.name}</h2>
      })}
    </main>
  );
}
