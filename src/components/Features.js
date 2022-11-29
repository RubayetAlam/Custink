import React from 'react'

const Features = () => {
  return (
    <div>
       <div className="container py-16">
        <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
            {/* <!-- ===1st card === --> */}
            <div className="border border-fuchsia-500 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <i className="fas fa-light fa-cart-shopping fa-2xl text-fuchsia-500"></i>
                <div>
                    <h4 className="font-medium text-gray-700 capitalize text-lg">Money-back guarantee</h4>
                    <p className="text-fuchsia-500 text-sm">You only pay if you like it.</p>
                </div>
            </div>

            {/* <!-- ===2nd card === --> */}
            <div className="border border-fuchsia-500 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <i className="fas fa-brands fa-creative-commons-sampling fa-2xl text-fuchsia-500"></i>
                <div>
                    <h4 className="font-medium text-gray-700 capitalize text-lg">Handmade</h4>
                    <p className="text-fuchsia-500 text-sm">Design by professionals.</p>
                </div>
            </div>
            {/* <!-- ===3rd card === --> */}
            <div className="border border-fuchsia-500 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <i className="fas fa-regular fa-life-ring fa-2xl text-fuchsia-500"></i>
                <div>
                    <h4 className="font-medium text-gray-700 capitalize text-lg">24/7 Service</h4>
                    <p className="text-fuchsia-500 text-sm">We provide you best service.</p>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Features
