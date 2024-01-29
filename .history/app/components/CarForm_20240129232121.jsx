import React from 'react';
import Select from 'react-select';

const CarForm = ({
  CarBrand,
  CarModel,
  carType,
  setSelectedCarValues,
  selectedCarValues,
}) => {
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

  return (
    <div className="my-3">
      <label htmlFor="brand" className="">
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
      <label htmlFor="model" className="">
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
      <label htmlFor="transmissionType" className="">
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
  );
};

export default CarForm;
