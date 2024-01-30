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
  onMainChange,  // Corrected prop name
  onChildChange, 
  onPropertyChange, 
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
        onChange={onMainChange} 
        value={selectedCat}
        placeholder="Select a category..."
        className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 w-full my-2"
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
            onChange={onChildChange}
            value={selectedChild}
            placeholder="Select a sub-category..."
            className="my-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 w-full"
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
            onChange={onPropertyChange}
            value={selectedProperty}
            placeholder="Select a property..."
            className="my-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4 w-full"
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
