import React from 'react'

const Cars = () => {
  return (
<div>
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
</div>
  )
}

export default Cars