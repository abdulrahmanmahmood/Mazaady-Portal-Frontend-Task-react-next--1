"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MCApis from "./_utils/MCApis";
import { Select, Spin, Form } from "antd";
export default function Home() {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedCatChildren, setSelectedCatChildren] = useState([]);

  
  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    MCApis.getAllCats().then((res) => {
      setCats(res.data.data.categories);
      console.log(res.data.data.categories);
    });
  };

  const options = cats.map((item) => ({
    value: item?.id,
    label: item?.name,
  }));

  const handleChange = (selectedOption) => {
    setSelectedCat(selectedOption);
    console.log('selected option', selectedOption);
    // Update the selectedCatChildren state with the children of the selected category
    
    const selectedCatItem = cats.find((cat) => cat.id === selectedOption);
    console.log('selected childeren item ',selectedCatItem);
  };

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Select
      options={cats.map((item) => ({
        value: item?.id,
        label: item?.name,
        children: item?.children || [],
      }))}
      onChange={handleChange}
      value={selectedCat}
      placeholder="Select a category..."
    />
    {selectedCat && selectedCat.children && (
      <>
        <h2>Children of Selected Category:</h2>
        <ul>
          {selectedCat.children.map((child) => (
            <li key={child.id}>{child.name}</li>
          ))}
        </ul>
      </>
    )}
    <h2>Selected ID: {selectedCat?.value}</h2>
    <h2>Here is your data</h2>
  </main>
  );
}
