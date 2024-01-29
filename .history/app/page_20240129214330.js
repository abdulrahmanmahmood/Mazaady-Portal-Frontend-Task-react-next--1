"use client";
import Image from "next/image";
import Select from "react-select";
import { useEffect, useState } from "react";
import MCApis from "./_utils/MCApis";
import CarsModels from "./_utils/CarsModels";

export default function Home() {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedCatChildren, setSelectedCatChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [otherValue, setOtherValue] = useState("");
  const [CarBrand, setCarBrand] = useState([]);
  const [CarModel, setCarModel] = useState([]);
  const [carType, setCarType] = useState([]);
  const [selectedMainFormValues, setSelectedMainFormValues] = useState({
    mainCategory: "",
    subCategory: "",
    processType: "",
    otherValue: "",
  });

  const [selectedCarValues, setSelectedCarValues] = useState({
    brand: "",
    model: "",
    transmissionType: "",
  });

  useEffect(() => {
    getAllCategories();
    getCarsBrand();
    getCarsModel();
  }, []);

  const getAllCategories = () => {
    MCApis.getAllCats().then((res) => {
      setCats(res.data.data.categories);
    });
  };
  const getCarsBrand = () => {
    CarsModels.getCarBrand().then((res) => {
      setCarBrand(res.data.data[1].options);
      setCarType(res.data.data[2].options);
    });
  };

  const getCarsModel = () => {
    CarsModels.getCarModel().then((res) => {
      // console.log('cars models',res.data.data[0].options);
      setCarModel(res.data.data[0].options);
    });
  };

  const handleChange = (selectedOption) => {
    const selectedCatItem = cats.find((cat) => cat.id === selectedOption.value);

    setSelectedCat(selectedOption);
    setSelectedCatChildren(selectedCatItem?.children || []);
    setSelectedChild(null);
    setSelectedProperty(null);
    setOtherValue("");

    setSelectedMainFormValues((prevValues) => ({
      ...prevValues,
      mainCategory: selectedOption.label,
    }));
  };

  const handleChildChange = (selectedChildOption) => {
    setSelectedChild(selectedChildOption);
    setSelectedProperty(null);
    setOtherValue("");

    setSelectedMainFormValues((prevValues) => ({
      ...prevValues,
      subCategory: selectedChildOption.label,
    }));
  };

  const handlePropertyChange = (selectedPropertyOption) => {
    setSelectedProperty(selectedPropertyOption);
    if (selectedPropertyOption?.value !== "other") {
      setOtherValue("");
    }

    setSelectedMainFormValues((prevValues) => ({
      ...prevValues,
      processType: selectedPropertyOption.label,
    }));
  };

  const handleCarBrandChange = (selectedBrandOption) => {
    setSelectedCarValues((prevValues) => ({
      ...prevValues,
      brand: selectedBrandOption.label,
    }));
  };
  const handleCarModelChange = (selectedModelOption) => {
    setSelectedCarValues((prevValues) => ({
      ...prevValues,
      model: selectedModelOption.label,
    }));
  };

  const handleTransmissionTypeChange = (selectedTypeOption) => {
    setSelectedCarValues((prevValues) => ({
      ...prevValues,
      transmissionType: selectedTypeOption.label,
    }));
  };

  const handleSubmit = () => {
    // Display the selected values in a table or perform other actions
    console.log("Selected Main Form Values:", selectedMainFormValues);
    console.log("Selected Car Values:", selectedCarValues);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <h2 className="text-center text-2xl py-6">Please fill out this form</h2>

        {/* Main Category Dropdown */}
        <label htmlFor="main-category" className="">
          Main Category
        </label>
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
            <label htmlFor="main-category" className="">
              Sub Category
            </label>

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
            <label htmlFor="main-category" className="">
              Process Type
            </label>

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

        <div className="p-2 mt-6">
          <label htmlFor="main-category" className="">
            Brand
          </label>
          <Select
            id="brand"
            options={CarBrand.map((item) => ({
              value: item?.id,
              label: item?.name,
            }))}
            onChange={handleCarBrandChange}
            value={
              selectedCarValues.brand
                ? { label: selectedCarValues.brand }
                : null
            }
            placeholder="Select a brand..."
            className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 w-full"
          />
          <label htmlFor="main-category" className="">
            Model
          </label>
          <Select
            id="model"
            options={CarModel.map((item) => ({
              value: item?.id,
              label: item?.name,
            }))}
            onChange={handleCarModelChange}
            value={
              selectedCarValues.model
                ? { label: selectedCarValues.model }
                : null
            }
            placeholder="Select a model..."
            className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 w-full"
          />
          <label htmlFor="main-category" className="">
            Transmission Type
          </label>
          <Select
  id="transmissionType"
  options={carType.map((item) => ({
    value: item?.id,
    label: item?.name,
  }))}
  onChange={handleTransmissionTypeChange}
  value={
    selectedCarValues.transmissionType
      ? { label: selectedCarValues.transmissionType }
      : null
  }
  placeholder="Select a transmission type..."
  className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 w-full"
/>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 w-full"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
