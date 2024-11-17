import React from 'react';
import { features } from '../constants';

const FeaturesSection = () => {
    return (
        <div className='relative mt-5 border-b border-neutral-800 min-h-[800px]'>
            <div className='text-center mb-0 mt-0 pt-0'>
                <h3 className="bg-neutral-900 text-orange-500 rounded-full h-8 text-xl font-medium px-2 py-1 uppercase">
                    features
                </h3>
                <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-10 tracking-wide'>
                    Meet <span className='bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text shadow-md'>THE TEAM!</span>
                </h2>
            </div>
            <div className='flex flex-wrap mt-10 lg:mt-20'>
                {features.map((feature, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-4'>
                        <div className='flex flex-col items-center bg-neutral-900 p-6 rounded-lg'>
                            <div className="flex justify-center items-center h-18 w-18 p-2 bg-neutral-900 text-orange-700 rounded-full mb-4">
                                {feature.icon}
                            </div>
                            <h5 className='text-xl mb-2 text-center'>{feature.text}</h5>
                            <p className='text-md text-neutral-200 text-center'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturesSection;
