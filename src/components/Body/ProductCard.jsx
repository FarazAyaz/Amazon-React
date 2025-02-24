import React from 'react'
import { images } from '../../assets/banner'


const ProductCard = () => {
  return (
    <div className='bg-slate-100/30 shadow-md rounded-lg w-[350px] '>
        <img src={images.banner2} alt="" className='object-cover h-[200px] rounded-tl-lg rounded-tr-lg'/>
    <div className='p-4 space-y-1'>
    {/* rest of the section includes title desciption button */}
    <div className='flex justify-between items-center gap-1'>
    <h1 className='font-bold line-clamp-1 '>This is a very larger product Name that can take two lines</h1>
    <h3 className='font-bold text-green-600 '>$19.00</h3>
    </div>
    {/* description */}
    <h3 className='font-medium line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati assumenda alias ratione ab numquam ipsum, quidem aliquam sint ut eos, earum, libero iusto quos. Quam, quidem? Omnis, nulla rerum.</h3>
    {/* add to cart button */}
    <button className='font-bold bg-yellow-400 rounded-lg cursor-pointer w-full py-2 mt-8'>Add To Cart</button>
    </div>
    </div>
  )
}

export default ProductCard
