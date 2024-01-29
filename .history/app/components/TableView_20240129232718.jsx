'use client'
import React from 'react'

const TableView = ({ mainFormValues, carValues, otherValue }) => {
  return (
<table className="border-collapse border border-gray-400 mt-8 w-full">
  <thead>
    <tr className="bg-gray-200">
      <th className="border border-gray-400 py-2 px-4">Field</th>
      <th className="border border-gray-400 py-2 px-4">Value</th>
    </tr>
  </thead>
  <tbody>
    {Object.entries(mainFormValues).map(([field, value]) => (
      <tr key={field}>
        <td className="border border-gray-400 py-2 px-4">{field}</td>
        <td className="border border-gray-400 py-2 px-4">{value}</td>
      </tr>
    ))}
    {Object.entries(carValues).map(([field, value]) => (
      <tr key={field}>
        <td className="border border-gray-400 py-2 px-4">{field}</td>
        <td className="border border-gray-400 py-2 px-4">{value}</td>
      </tr>
    ))}
    {otherValue && ( // Check if otherValue is not empty
      <tr>
        <td className="border border-gray-400 py-2 px-4">Other Value</td>
        <td className="border border-gray-400 py-2 px-4">{otherValue}</td>
      </tr>
    )}
  </tbody>
</table>

  )
}

export default TableView