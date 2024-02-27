
import React from 'react'

const PastSposorsCard = ({ sponsorName, logosrc,paddingRight=0}) => {

    const sponsiName = sponsorName.toUpperCase();

    return (
        <div>
            <div className={`flex flex-row gap-2 rounded-lg mr-2 xl:bg-slate-600 md:w-fit 
             pr-${paddingRight}`}>
                <img src={logosrc} alt={sponsiName} className='h-8 md:h-14 unded-lg rounded-md' />
                <p className='text-white text-sm md:text-lg 
                font-semibold text-center mt-4 pr-4 flex w-full my-auto'>{sponsorName}</p>
            </div>
        </div>
    )
}

export default PastSposorsCard