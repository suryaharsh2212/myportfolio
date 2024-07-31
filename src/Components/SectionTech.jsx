import React from 'react'

function SectionTech() {
    return (
        <div className='md:p-10'>
            <h1 className=' font-bold text-4xl mb-5 text-blue-600 md:ml-10'>TechStack I am familiar with....!</h1>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <div className=" flex justify-center items-center shadow-md rounded-md p-6 text-white"><img src="https://sproutroad.com/wp-content/uploads/2019/07/react.png" alt="" /></div>
                    <div className=" flex justify-center items-center shadow-md rounded-md p-6 text-white"><img src="data:image/jpeg;base64,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" alt="" /></div>
                    <div className=" flex justify-center items-center shadow-md rounded-md p-6 text-white"><img src="data:image/jpeg;base64,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" alt="" /></div>
                    <div className=" flex justify-center items-center shadow-md rounded-md p-6 text-white"><img src="data:image/jpeg;base64,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" alt="" /></div>
                    <div className=" flex justify-center items-center shadow-md rounded-md p-6 text-white"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--xBoMjnRB--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tlqh86jgl25x41gf9eed.png" alt="" /></div>
                    <div className=" flex justify-center items-center shadow-md rounded-md p-6 text-white"><img src="https://th.bing.com/th/id/OIP._Lm_T3scKhVEVFC54gcRxwHaE8?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default SectionTech
