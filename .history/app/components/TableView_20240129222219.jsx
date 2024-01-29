import React from 'react'

const TableView = ({ mainFormValues, carValues, otherValue }) => {
  return (
    <table className="border-collapse w-full mt-4">
      <thead>
        <tr>
          <th className="border p-2">Field</th>
          <th className="border p-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(mainFormValues).map(([field, value]) => (
          <tr key={field}>
            <td className="border p-2">{field}</td>
            <td className="border p-2">{value}</td>
          </tr>
        ))}
        {Object.entries(carValues).map(([field, value]) => (
          <tr key={field}>
            <td className="border p-2">{field}</td>
            <td className="border p-2">{value}</td>
          </tr>
        ))}
        {otherValue && (
          <tr>
            <td className="border p-2">Other Value</td>
            <td className="border p-2">{otherValue}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default TableView