'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import MCApis from './_utils/MCApis'
import Select from 'react-select';


export default function Home() {
const [cats,setCats]= useState([]);
const [selectedCat, setSelectedCat] = useState(null);
  useEffect(()=>{
    getAllCategories()
  },[])

  const getAllCategories =()=>{
    MCApis.getAllCats().then((res)=>{
      setCats(res.data.data.categories)
      console.log(res.data.data.categories);
    })
  }

  const options = cats.map((item) => ({
    value: item?.id,
    label: item?.name,
  }));

  const handleChange = (selectedOption) => {
    setSelectedCat(selectedOption);
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Select
        options={options}
        onChange={handleChange}
        value={selectedCat}
        isSearchable
        placeholder="Select a category..."
      />
{cats.map((item) => (
  <h2 key={item.id} className="text-black text-2xl">
    {item?.name}
  </h2>
))}
      <h2>here is your dat</h2>
    </main>
  );
}
