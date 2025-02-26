import React from 'react'
import { images } from '../../assets/banner'


const ProductCard = ({title,description,price,img}) => {
  return (
    <div className='bg-slate-100/30 shadow-md rounded-lg w-[350px] flex flex-col '>
        <div className='bg-white rounded-tl-lg rounded-tr-lg p-8'>
        <img src={img} alt="" className='object-contain h-[200px] w-full rounded-tl-lg rounded-tr-lg'/>
        </div>
    <div className='flex flex-col flex-1  justify-between p-4 space-y-1'>
    {/* rest of the section includes title desciption button */}
    <div>
    <div className='flex justify-between items-center gap-1'>
    <h1 className='font-bold line-clamp-1 '>{title}</h1>
    <h3 className='font-bold text-green-600 '>${price}</h3>
    </div>
    {/* description */}
    <h3 className='font-medium line-clamp-3'>{description}</h3>
    </div>
    {/* add to cart button */}
    <button className='font-bold bg-yellow-400 rounded-lg cursor-pointer w-full py-2 mt-8'>Add To Cart</button>
    </div>
    </div>
  )
}

export default ProductCard
