"use client";
import Image from "next/image";
import Select from "react-select";
import { useEffect, useState } from "react";
import MCApis from "./_utils/MCApis";
import CarsModels from "./_utils/CarsModels";
import Cars from "./components/Cars";

export default function Home() {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedCatChildren, setSelectedCatChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [otherValue, setOtherValue] = useState("");
  const [CarBrand,setCarBrand] = useState([])
  const [CarModel,setCarModel] = useState([])
  const [carType,setCarType]=useState([])

  useEffect(() => {
    getAllCategories();
    getCarsBrand()
    getCarsModel()
  }, []);

  const getAllCategories = () => {
    MCApis.getAllCats().then((res) => {
      setCats(res.data.data.categories);
      // console.log(res.data.data.categories);
    });
  };
  const getCarsBrand=()=>{
    CarsModels.getCarBrand().then((res)=>{
      // console.log('cars brands',res.data.data[1].options);
      setCarBrand(res.data.data[1].options)
      setCarType(res.data.data[6].options)
    })
  }

  const getCarsModel=()=>{
    CarsModels.getCarModel().then((res)=>{
      // console.log('cars models',res.data.data[0].options);
      setCarModel(res.data.data[0].options)
    })
  }  

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

        <h2 className="text-center text-2xl py-6">Please fill out this form</h2>

        {/* Main Category Dropdown */}
        <label htmlFor="main-category" className="">Main Category</label>
        <Select
        id="main-category"
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
    <>
          <label htmlFor="main-category" className="">Sub Category</label>
      
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
    </>
        )}

        {/* Property Dropdown */}
        {selectedChild && (
<>
<label htmlFor="main-category" className="">Process Type</label>

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
</>
        )}

        {/* Display Selected Category, Children, and Property */}
        {selectedCat && (
          <>
            {selectedProperty && selectedProperty.value === "other" && (
              <input
                type="text"
                value={otherValue}
                onChange={(e) => setOtherValue(e.target.value)}
                placeholder="From user"
                className="mt-4 w-full rounded-md shadow-sm p-3 border"
              />
            )}
            {/* ... (your existing code) */}
          </>
        )}

              <div  className="p-2 mt-6">
                <Cars carsBrand={CarBrand} carsModels={CarModel}/>
              </div>






      </div>
    </div>
  );
}
