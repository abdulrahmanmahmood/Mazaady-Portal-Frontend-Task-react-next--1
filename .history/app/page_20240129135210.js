'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import MCApis from './_utils/MCApis'
import { Select, Spin, Form } from 'antd';
export default function Home() {
const [cats,setCats]= useState([])
const [selectedCat, setSelectedCat] = useState(null);

  useEffect(()=>{
    getAllCategories()
  },[])

  const getAllCategories =()=>{
    MCApis.getAllCats().then((res)=>{
      setCats(res.data.data.categories)
      console.log(res.data.data.categories);
    })
  }
  const handleChange = (selectedOption) => {
    setSelectedCat(selectedOption);
  };


  const options = cats.map((item) => ({
    value: item?.id,
    label: item?.name,
  }));

  const childOptions = cats.map.((item))
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Form>
        <Form.Item>
          <Select></Select>
        </Form.Item>
      </Form> */}

      <div className="flex ">
      <div>
      <Select
        options={options}
        onChange={handleChange}
        value={selectedCat}
        isSearchable
        placeholder="Select a category..."
      />
      </div>
      </div>
    </main>
  );
}
