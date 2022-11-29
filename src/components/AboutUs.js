import React from 'react'
import aboutUsPagePhoto from '../assets/aboutPagePic.jpg'
import aboutUsPagePhoto2 from '../assets/aboutPagePic2.jpg'
import aboutUsPagePhoto3 from '../assets/aboutPagePic3.jpg'

function AboutUs() {
  return (
    <div className="container bg-white rounded overflow-hidden">
      <div className='grid grid-cols-2 gap-4 mt-8 ml-8'>
        <div className='container mt-8'>
        <h1 className='text-6xl text-fuchsia-800 mb-4 font-medium capitalize'>About CustInk</h1>
        <p className='text-fuchsia-500 font-medium'>CastInk makes clothes to your size, height and style. The only clothing brand to do so.</p>
        <p className='text-fuchsia-500 font-medium text-justify'>It is also about sustainability as there is no waste either at our end or yours. We don’t have any clothes left over at the end of the season as we only make what the customer orders. And you are more likely to find clothes that meet your size, height and style requirements and hence will have nothing that hangs unused in your closet.</p>
      </div>
        <div className='w-full'>
          <img src={aboutUsPagePhoto} alt="" className='max-width-60 h-72 ml-44'/>
        </div>
      </div>
      
      <div className='grid grid-cols-2 gap-8 m-8'>   
        <div className='w-full container'>
          <h1 className='text-4xl text-fuchsia-800  mb-4 font-medium capitalize'>Culture</h1>
          <img src={aboutUsPagePhoto2} alt="" className='max-width-60 h-60'/>
          <p className='text-fuchsia-500 font-medium text-justify'>Being not just customer-centered but customer-led is at the core of CastInk’s culture of innovation. We can bring new products to market as fast as within 3 days if there is change in trend. And our customers participate in the design so that they get what suits them. They can change neckline, sleeve and length, add or remove pockets and get clothes made to their exact size and height.</p>
        </div>
      <div className='w-full container'>
          <h1 className='text-4xl text-fuchsia-800  mb-4 font-medium capitalize'>Employee Well-Being</h1>
          <img src={aboutUsPagePhoto3} alt="" className='max-width-60 h-60 bg-center'/>
          <p className='text-fuchsia-500 font-medium text-justify'>CastInk is committed to the health, well-being, and ethical treatment of all our employees worldwide. We have offices in both India & the United States. Our backend operations including manufacturing are done in India. eShakti is fully compliant and wholeheartedly supports India’s labor laws which include, but are not limited to, protection for all workers (working conditions, compensation, regulation of working hours, etc.), special protection for women (safety, comfort, etc.) and prohibition of child labor. </p>
        </div>
       </div>
    </div>
  )
}

export default AboutUs
