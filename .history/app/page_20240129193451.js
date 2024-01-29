"use client";
import Image from "next/image";
import Select from "react-select";
import { useEffect, useState } from "react";
import MCApis from "./_utils/MCApis";

export default function Home() {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedCatChildren, setSelectedCatChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [otherValue, setOtherValue] = useState("");

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
    const selectedCatItem = cats.find((cat) => cat.id === selectedOption.value);

    setSelectedCat(selectedOption);
    setSelectedCatChildren(selectedCatItem?.children || []);
    setSelectedChild(null);
    setSelectedProperty(null);
    setOtherValue("");
  };

  const handleChildChange = (selectedChildOption) => {
    setSelectedChild(selectedChildOption);
    setSelectedProperty(null);
    setOtherValue("");
  };

  const handlePropertyChange = (selectedPropertyOption) => {
    setSelectedProperty(selectedPropertyOption);
    if (selectedPropertyOption?.value !== "other") {
      setOtherValue("");
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>
        <h2 className="text-center text-2xl py-6">Please fill out this form</h2>

        {/* Main Category Dropdown */}
        <label htmlFor=""></label>
        <Select
          options={cats.map((item) => ({
            value: item?.id,
            label: item?.name,
          }))}
          onChange={handleChange}
          value={selectedCat}
          placeholder="Select a category..."
          className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 w-full"
        />

        {/* Children Category Dropdown */}
        {selectedCat && selectedCatChildren.length > 0 && (

          <Select
            options={selectedCatChildren.map((child) => ({
              value: child.id,
              label: child.name,
            }))}
            onChange={handleChildChange}
            value={selectedChild}
            placeholder="Select a sub-category..."
            className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 w-full"
          />
        )}

        {/* Property Dropdown */}
        {selectedChild && (
          <Select
            options={(selectedChild?.properties || [])
              .map((property) => ({
                value: property,
                label: property,
              }))
              .concat([{ value: "other", label: "Other" }])}
            onChange={handlePropertyChange}
            value={selectedProperty}
            placeholder="Select a property..."
            className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 w-full"
          />
        )}

        {/* Display Selected Category, Children, and Property */}
        {selectedCat && (
          <>
            {selectedProperty && selectedProperty.value === "other" && (
              <input
                type="text"
                value={otherValue}
                onChange={(e) => setOtherValue(e.target.value)}
                placeholder="Enter other value..."
                className="mt-4 w-full rounded-md shadow-sm p-3 border"
              />
            )}
            {/* ... (your existing code) */}
          </>
        )}
      </div>
    </div>
  );
}