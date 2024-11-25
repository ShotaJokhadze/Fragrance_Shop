import Image from 'next/image';
import React from 'react'
import { ShopButton } from '../Buttons/Buttons';

interface Arrival {
  id: number;
  title: string;
  brand: string;
  description: string;
  image: string;
}

interface ArrivalProps {
  data: Arrival[];
}

export default function NewArrivals({data} : ArrivalProps) {
  return (
    <div className="arrivals-container flex flex-col justify-center items-center mt-12">
      <h2 className='text-4xl mb-12 font-semibold'>New Arrivals</h2>
      <div className="arrivals-products w-4/5 max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center items-center gap-5">
        {data.map((arrival) => {
          const {id, title, brand, description, image} = arrival
        return (
          <div className='card border rounded-md border-light flex flex-col h-[570px] w-[330px] items-center pt-2' key={id}>
            <div className="image relative w-full h-1/2">
              <Image src={image} alt="" fill={true}
              />
            </div>
            <div className="desc text-center h-1/2  p-4 flex flex-col justify-center items-center">
              <h2 className='text-2xl font-semibold mb-1'>{title}</h2>
              <h4 className='mb-2 text-lg italic text-blue'>{brand}</h4>
              <p className='mb-4'>{description}</p>
            <ShopButton />
            </div>
          </div>
        )} )}
      </div>
    </div>
  )
}
