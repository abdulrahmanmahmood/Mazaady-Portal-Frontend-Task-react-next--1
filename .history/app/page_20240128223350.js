'use client'
import Image from "next/image";
import { useEffect } from "react";
import {getAllCats} from './_utils/'

export default async  function  Home() {
  const [cats,setCats]= useState([])

  const getAllCategories =()=>{

  }

  useEffect(()=>{
    console.log(allCats);
  },[allCats])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
