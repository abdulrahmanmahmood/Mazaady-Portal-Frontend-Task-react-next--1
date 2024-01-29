import React from 'react';
import Select from 'react-select';

const MainForm = ({
  cats,
  selectedCat,
  setSelectedCat,
  setSelectedCatChildren,
  setSelectedChild,
  setSelectedProperty,
  setOtherValue,
  handleChange,
  handleChildChange,
  handlePropertyChange,
  selectedCatChildren,
  selectedChild,
  selectedProperty,
  otherValue,
  selectedMainFormValues,
}) => {
  return (
    <>
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
              .concat([{ value: 'other', label: 'Other' }])}
            onChange={handlePropertyChange}
            value={selectedProperty}
            placeholder="Select a property..."
            className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 w-full"
          />
        </>
      )}

      {selectedCat && (
        <>
          {selectedProperty && selectedProperty.value === 'other' && (
            <input
              type="text"
              value={otherValue}
              onChange={(e) => setOtherValue(e.target.value)}
              placeholder="From user"
              className="mt-4 w-full rounded-md shadow-sm p-3 border"
            />
          )}
        </>
      )}
    </>
  );
};

export default MainForm;
