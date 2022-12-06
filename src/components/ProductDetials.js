import React from 'react'
import { NavLink } from 'react-router-dom'
import Image1 from '../assets/Product/product01.jpg'
function ProductDetials() {
  return (
    <div className='container mx-auto mt-8'>
    {/* ----------Heading section------ */}
    <h1 className="text-3xl uppercase font-medium mb-6 text-fuchsia-900">Premium T-shirt Customization Center</h1>
    <div className="flex items-center">
        <div className="flex gap-1 text-sm text-yellow-400">
          <span><i className="fas fa-star"></i></span>
          <span><i className="fas fa-star"></i></span>
          <span><i className="fas fa-star"></i></span>
          <span><i className="fas fa-star"></i></span>
          <span><i className="fas fa-star"></i></span>
        </div>
      <div className="text-xs text-gray-400 ml-3">(142)</div>
    </div>
    <div className='grid grid-cols-12 gap-4'>
      {/* ----------side bar images -----------*/}
      <div className='col-span-1 mt-8'>
      <div className='grid grid-cols-1 gap-2'>
        <img src={Image1} alt="" className='h-32 w-32 hover:border-2 border-fuchsia-600 cursor-pointer'/>
        <img src={Image1} alt="" className='h-32 w-32 hover:border-2 border-fuchsia-600 cursor-pointer'/>
        <img src={Image1} alt="" className='h-32 w-32 hover:border-2 border-fuchsia-600 cursor-pointer'/>
        <img src={Image1} alt="" className='h-32 w-32 hover:border-2 border-fuchsia-600 cursor-pointer'/>
       </div>
       </div>
      {/* ----------Main image-------------- */}
      <div className='col-span-6'>
        <img src={Image1} alt="" className='w-full'/>
      </div>
      {/*----------- Editor box-------------- */}
      <div className='col-span-4' >
        <div className='grid grid-cols-2'>
            <div>
              <h1 className='text-2xl font-bold'>$12.9 <span className='text-slate-400 line-through text-3xl'>14.9$</span><span className='text-slate-400 text-sm'>/piece</span></h1>
              <span className='text-slate-400 text-sm font-bold'>10% discount in 5 items</span>
            </div>
            <div className='grid grid-cols-3'>
              <button type='button' className='px-6 py-3 font-bold border-2 border-slate-300 hover:border-slate-500'>-</button>
              <input type='text' className='text-center font-bold px-6 py-3 border-2 border-slate-300 hover:border-slate-500' value='0'/>
              <button type='button' className='px-6 py-3 font-bold border-2 border-slate-300 hover:border-slate-500'>+</button>
            </div>
        </div>
        <div className='mt-12'>
          <span className='mr-8'>color: red</span>
          <NavLink><span className='w-1/2 h-2 rounded-lg bg-gray-400 p-2 mr-4'></span></NavLink>
          <NavLink><span className='w-1/2 h-2 rounded-lg bg-pink-400 p-2 mr-4'></span></NavLink>
          <NavLink><span className='w-1/2 h-2 rounded-lg bg-red-400 p-2 mr-4'></span></NavLink>
          <NavLink><span className='w-1/2 h-2 rounded-lg bg-green-400 p-2 mr-4'></span></NavLink>
          <NavLink><span className='w-1/2 h-2 rounded-lg bg-yellow-400 p-2 mr-4'></span></NavLink>
          <NavLink><span className='w-1/2 h-2 rounded-lg bg-blue-400 p-2 mr-4'></span></NavLink>
        </div>
        <div className='mt-10'>
          <span className='mr-3'>Size:</span>
          <button type='button' className='px-6 py-3 font-bold border-2 border-slate-300 hover:border-slate-500 mx-2'>S</button>
          <button type='button' className='px-6 py-3 font-bold border-2 border-slate-300 hover:border-slate-500 mx-2'>M</button>
          <button type='button' className='px-6 py-3 font-bold border-2 border-slate-300 hover:border-slate-500 mx-2'>L</button>
          <button type='button' className='px-6 py-3 font-bold border-2 border-slate-300 hover:border-slate-500 mx-2'>XL</button>
          <button type='button' className='px-6 py-3 font-bold border-2 border-slate-300 hover:border-slate-500 mx-2'>2XL</button>
        </div>
        <div className='my-10'>
          <h1 className='mb-4'>Media-</h1>
          <button type='button' className='px-6 py-3 font-bold border-2 border-slate-300 hover:border-slate-500 hover:bg-slate-200 mr-8'>Upload a file</button>
          {/* <input
      type="file"
      ref={hiddenFileInput}
      onChange={handleChange}
      style={{display: 'none'}} 
    /> */}
          <button type='button' className='px-6 py-3 font-bold border-2 border-slate-300 hover:border-slate-500 hover:bg-slate-200 mr-8'>Add text</button>
          <button type='button' className='px-6 py-3 font-bold border-2 border-slate-300 hover:border-slate-500 hover:bg-slate-200 mr-8'>Add Quick Design</button>
          <button type='button' className='px-6 py-3 font-bold border-2 border-slate-300 hover:border-slate-500 hover:bg-slate-200 mr-8 my-6'>Import image</button>
          <button type='button' className='px-6 py-3 font-bold border-2 border-slate-300 hover:border-slate-500 hover:bg-slate-200 mr-8 my-6'>Add Emoji</button>
        </div>
      </div>
    </div>
    {/* ------------------Product details---------- */}
    <div className='grid grid-cols-2 mt-24'>
      <div>
        <h1 className='text-xl uppercase font-medium mb-6 text-fuchsia-900'>Product Details</h1>
        <p className='mb-4'>This premium T-shirt is as close to perfect as can be. It's optimized for all types of print and will quickly become your favorite T-shirt. Soft, comfortable and durable, this is a definite must-own.</p>
        <ul className='list-disc list-inside'>
          <li className='mb-2'>Brand: Spreadshirt</li>
          <li className='mb-2'>100% cotton (heather gray and heather ice blue are 95% cotton /5% viscose. Heather blue & charcoal gray are 80% cotton/20% polyester. Heather burgundy is 60% cotton/40% polyester. Heather oatmeal is 99% cotton/1% viscose) | Fabric Weight: 4.42 oz (lightweight)</li>
          <li className='mb-2'>Wide range of sizes from S-5XL</li>
          <li className='mb-2'>Fairly produced, certified and triple audited.</li>
          <li className='mb-2'>Double stitched, reinforced seams at shoulder, sleeve, collar and waist</li>
          <li className='mb-2'>Optimized for beautiful brilliance across all printing methods</li>
          <li className='mb-2'>Imported; processed and printed in the Bangladesh</li>
        </ul>
      </div>
      <div>
        <img src={Image1} alt="" className='h-96 w-96'/>
      </div>
    </div>
    <div className='my-10'>
      <h1 className='text-xl uppercase font-medium mb-6 text-fuchsia-900'>Customers reviews</h1>
              <div className="flex items-center">
                  <div className="flex gap-1 text-sm text-yellow-400">
                      <span><i className="fas fa-star"></i></span>
                      <span><i className="fas fa-star"></i></span>
                      <span><i className="fas fa-star"></i></span>
                      <span><i className="fas fa-star"></i></span>
                      <span><i className="fas fa-star"></i></span>
                  </div>
                  <div className="text-xs text-gray-400 ml-3">(142)</div>
              </div>
              <div className='grid grid-cols-12 gap-4 mt-6'>
                <span className='col-span-2 font-bold text-fuchsia-900'>Mr.X</span>
                <p className='col-span-10'>Love it..Definitely buy next time...</p>
              </div>
              <div className='grid grid-cols-12 gap-4 mt-6'>
                <span className='col-span-2 font-bold text-fuchsia-900'>Mr.Y</span>
                <p className='col-span-10'>Love it..This is awesome...</p>
              </div>
      

    </div>
  </div>
)
}

export default ProductDetials
