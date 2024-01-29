'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import MCApis from './_utils/MCApis'
import Select from 'react-select';


export default function Home() {
const [cats,setCats]= useState([]);
const [selectedCat, setSelectedCat] = useState(null);
const [selectedChild, setSelectedChild] = useState(null);

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <div className="w-64">
        <Select
          options={options}
          onChange={handleChange}
          value={selectedCat}
          isSearchable
          placeholder="Select a category..."
          styles={{
            control: (provided, state) => ({
              ...provided,
              border: state.isFocused ? '2px solid #3498db' : '2px solid #ccc',
              boxShadow: state.isFocused ? '0 0 3px rgba(0, 123, 255, 0.5)' : 'none',
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? '#3498db' : 'white',
              color: state.isSelected ? 'white' : '#333',
            }),
          }}
        />
      </div>
      <h2 className="text-2xl text-gray-800 mt-4">
        Selected ID: {selectedCat?.value}
      </h2>
    </main>
  );
}
