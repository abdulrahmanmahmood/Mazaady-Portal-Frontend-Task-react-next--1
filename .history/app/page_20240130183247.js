"use client";
import Image from "next/image";
import Select from "react-select";
import { useEffect, useState } from "react";
import MCApis from "./_utils/MCApis";
import CarsModels from "./_utils/CarsModels";
import TableView from "./components/TableView";
import MainForm from "./components/MainForm";
import CarForm from "./components/CarForm";

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
  const [tableView, setTableView] = useState(null);
  const [selectedMainFormValues, setSelectedMainFormValues] = useState({
    mainCategory: "",
    subCategory: "",
    processType: "",
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
      setCarModel(res.data.data[0].options);
    });
  };

  const handleSubmit = () => {
    setTableView(
      <TableView
        mainFormValues={selectedMainFormValues}
        carValues={selectedCarValues}
        otherValue={otherValue}
      />
    );
  };

  const getProcess


  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Get started today
        </h1>

        <h2 className="text-center text-2xl py-6">Please fill out this form</h2>

        <MainForm
          cats={cats}
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
          setSelectedCatChildren={setSelectedCatChildren}
          setSelectedChild={setSelectedChild}
          setSelectedProperty={setSelectedProperty}
          setOtherValue={setOtherValue}
          onMainChange={handleChange}
          onChildChange={handleChildChange}
          onPropertyChange={handlePropertyChange}
          selectedCatChildren={selectedCatChildren}
          selectedChild={selectedChild}
          selectedProperty={selectedProperty}
          otherValue={otherValue}
          selectedMainFormValues={selectedMainFormValues}
        />

        <CarForm
          CarBrand={CarBrand}
          CarModel={CarModel}
          carType={carType}
          setSelectedCarValues={setSelectedCarValues}
          selectedCarValues={selectedCarValues}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 w-full"
        >
          Submit
        </button>
        <div className="mx-auto max-w-lg">{tableView}</div>
      </div>
    </div>
  );
}
