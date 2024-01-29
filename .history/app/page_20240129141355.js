"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MCApis from "./_utils/MCApis";
import { Select, Spin, Form } from "antd";
export default function Home() {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);

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
    log
    // Update the selectedCatChildren state with the children of the selected category
    
    const selectedCatItem = cats.find((cat) => cat.name === selectedOption.name);
    console.log('selected childeren item ',selectedCatItem);
    // setSelectedCatChildren(selectedCatItem?.children || []);
  };

  // const childOptions = cats.map((item) => {
  //   item.children.map(() => {});
  // });
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
