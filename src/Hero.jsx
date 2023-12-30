import React from 'react'
import "./hero.css"

const Hero = () => {
    return (
        <div className='hero h-dvh' >
            <div>
                <div className=' flex justify-center gap-14 p-5 text-white' style={{ backgroundColor: "black" }}>
                    <p className=' text-2xl font-medium'>Home</p>
                    <p className=' text-2xl font-medium'>About</p>
                    <p className=' text-2xl font-medium'>Projects</p>
                    <p className=' text-2xl font-medium'>Contact</p>
                </div>
            </div>

            <div className='content flex'>
                <div className='left ml-10 mt-40'>
                    <p className=' text-5xl font-semibold'>PRANSHU</p>
                    <p className=' text-5xl font-bold'>PARASHAR .</p>
                    <hr className=' w-20 my-5 '></hr>
                    <p className='text-lg'>LinkedIn | Github</p>
                    <p className=' text-lg'>Twitter | Instagram</p>
                    <button className='contact mt-10 p-3 font-semibold'>Contact me</button>
                </div>
                <div className='right mr-10 mt-28 flex-col flex-wrap w-64'>
                    <p className='intro text-2xl font-medium'>INTRODUCTION</p>
                    <p className='text-4xl font-bold mt-5'>Web Developer</p>
                    <div className=' mt-3'>
                        <p className=' font-normal'> Whether I'm diving into the latest JavaScript frameworks, wrangling CSS to perfection, or sketching out wireframes, I'm all about bringing ideas to life on the web.</p>
                    </div>
                    <p className='learn mt-5 font-semibold'>Learn More ↓</p>
                </div>
            </div>

        </div>
    )
}

export default Hero