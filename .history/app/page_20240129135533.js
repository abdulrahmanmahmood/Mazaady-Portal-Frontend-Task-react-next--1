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
  const handleChange = (selectedOption) => {
    setSelectedCat(selectedOption);
        // Update the selectedCatChildren state with the children of the selected category

    const selectedCatItem = cats.find((cat) => cat.id === selectedOption.value);
    setSelectedCatChildren(selectedCatItem?.children || []);
  };

  const options = cats.map((item) => ({
    value: item?.id,
    label: item?.name,
  }));

  const childOptions = cats.map((item) => {
    item.children.map(()=>{

    })
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Select
        options={options}
        onChange={handleChange}
        value={selectedCat}
        isSearchable
        placeholder="Select a category..."
      />
      {selectedCat && (
        <>
          <Select
            options={selectedCatChildren.map((child) => ({
              value: child?.id,
              label: child?.name,
            }))}
            isSearchable
            placeholder="Select a subcategory..."
          />
          <h2>Children of Selected Category:</h2>
          <ul>
            {selectedCatChildren.map((child) => (
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
