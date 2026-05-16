import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {

    const navigate = useNavigate()

    return (
        <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat  min-h-screen'>

            <div className='text-center mb-6'>
                <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2] text-(--text-primary)'>Create amazing content <br /> with {" "}
                    <span
                        className="text-buttons"
                        style={{
                            background: "linear-gradient(90deg, #9f80e2, #e9dff6)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        AI tools
                    </span>
                </h1>
                <p className='text-(--text-secondary) mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs '>Unleash your creativity with our AI-powered content creation tools. Generate stunning visuals, captivating copy, and engaging videos effortlessly.</p>
            </div>

            <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
                <button onClick={() => navigate('/ai')} className='bg-buttons text-(--text-primary) font-semibold py-3 px-10 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer '>Start creating now</button>
                <button onClick={() => navigate('/demo')} className='bg-buttons-secondary text-(--text-buttons) font-semibold py-3 px-10 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer '>Watch demo</button>
            </div>

            <div className='flex items-center gap-4 mt-8 mx-auto text-(--text-secondary)'>
                <img src={assets.user_group} alt="user_group" className='h-8' /> Trusted by over 10k+ users worldwide
            </div>

        </div>
    )
}

export default Hero