"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MCApis from "./_utils/MCApis";
import { Select, Spin, Form } from "antd";
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

  const options = cats.map((item) => ({
    value: item?.id,
    label: item?.name,
  }));

  // const handleChange = (selectedOption) => {
  //   setSelectedCat(selectedOption);
  //   console.log('selected option', selectedOption);
  //   // Update the selectedCatChildren state with the children of the selected category
    
  //   const selectedCatItem = cats.find((cat) => cat.id === selectedOption);
  //   console.log('selected childeren item ',selectedCatItem);
  // };

  const handleChange = (selectedOption) => {
    const selectedCatItem = cats.find((cat) => cat.id === selectedOption);

    setSelectedCat(selectedOption);
    setSelectedCatChildren(selectedCatItem?.children || []);
    setSelectedChild(null); // Reset selected child when the main category changes

  };

  const handleChildChange = (selectedChildOption) => {
    setSelectedChild(selectedChildOption);
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {/* Main Category Dropdown */}
    <Select
      options={cats.map((item) => ({
        value: item?.id,
        label: item?.name,
      }))}
      onChange={handleChange}
      value={selectedCat}
      placeholder="Select a category..."
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
      />
    )}

    {/* Property Dropdown */}
    {selectedChild && (
      <Select
        options={(selectedChild?.properties || []).map((property) => ({
          value: property,
          label: property,
        })).concat([{ value: "other", label: "Other" }])}
        onChange={handlePropertyChange}
        value={selectedProperty}
        placeholder="Select a property..."
      />
    )}

    {/* Display Selected Category, Children, and Property */}
    {selectedCat && (
      <>
        <h2>Selected Category: {selectedCat.label}</h2>
        {selectedChild && <h2>Selected Sub-Category: {selectedChild.label}</h2>}
        {selectedProperty && (
          <h2>
            Selected Property: {selectedProperty.label === "other" ? "Other" : selectedProperty.label}
          </h2>
        )}
        {selectedProperty && selectedProperty.label === "other" && (
          <input
            type="text"
            value={otherValue}
            onChange={(e) => setOtherValue(e.target.value)}
            placeholder="Enter other value..."
          />
        )}
      </>
    )}
  </main>
  );
}
