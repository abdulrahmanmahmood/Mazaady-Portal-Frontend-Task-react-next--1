'use client'
import React from 'react'

const TableView = ({ mainFormValues, carValues, otherValue }) => {
  return (
    <table className="border-collapse border border-gray-400 mt-8">
    <thead>
      <tr>
        <th className="border border-gray-400 p-2">Field</th>
        <th className="border border-gray-400 p-2">Value</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(mainFormValues).map(([field, value]) => (
        <tr key={field}>
          <td className="border border-gray-400 p-2">{field}</td>
          <td className="border border-gray-400 p-2">{value}</td>
        </tr>
      ))}
      {Object.entries(carValues).map(([field, value]) => (
        <tr key={field}>
          <td className="border border-gray-400 p-2">{field}</td>
          <td className="border border-gray-400 p-2">{value}</td>
        </tr>
      ))}
      {otherValue && ( // Check if otherValue is not empty
        <tr>
          <td className="border border-gray-400 p-2">Other Value</td>
          <td className="border border-gray-400 p-2">{otherValue}</td>
        </tr>
      )}
    </tbody>
  </table>
  )
}

export default TableView