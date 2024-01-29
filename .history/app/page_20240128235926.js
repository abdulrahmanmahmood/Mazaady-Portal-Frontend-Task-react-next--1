"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MCApis from "./_utils/MCApis";
import Select from "react-select";

export default function Home() {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedChild, setSelectedChild] = useState(null);

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
    setSelectedChild(null);
  };

  const childrenOptions = selectedCat?.children
    ? selectedCat.children.map((child) => ({
        value: child?.id,
        label: child?.name,
      }))
    : [];

  const handleChangeChild = (selectedOption) => {
    setSelectedChild(selectedOption);
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
    />
    {selectedCat && (
      <Select
        options={childrenOptions}
        isSearchable
        placeholder="Select a subcategory..."
      />
    )}
          />
        </div>
      )}
      <h2 className="text-2xl text-gray-800 mt-4">
        Selected ID: {selectedCat?.value}
      </h2>
    </main>
  );
}
