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
      setCats(res.data.data)
      console.log(res.data.data.categories);
    })
  }


  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {cats.map((item)=>{
        return<h2>{item.cat}</h2>
      })}
    </main>
  );
}
