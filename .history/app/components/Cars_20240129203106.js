import React from "react";
import Select from "react-select";


const Cars = ({cars}) => {
  return (
    <>
      <label htmlFor="main-category" className="">
        Brand
      </label>
      {/* <Select
        id="main-category"
        options={cars.map((item) => ({
          value: item?.id,
          label: item?.name,
        }))}
        onChange={handleChange}
        value={selectedCat}
        placeholder="Select a category..."
        className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 w-full"
      /> */}
    </>
  );
};

export default Cars;
