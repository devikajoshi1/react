import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between '>
            <h2 className='bg-white rounded-full text-xl font-semibold h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-xl leading-relaxed text-white mb-14 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut totam veniam tempora mollitia dolorem quam.</p>
                <div className='flex justify-between mt-4 '>
                    <button className='bg-blue-600 text-white px-8 py-2 rounded-full font-medium '>{props.tag}</button>
                    <button className='bg-blue-600 text-white px-3 py-2 rounded-full font-medium'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div> 
  )
}

export default RightCardContent
