
import React from 'react'

const SpecialLogos = ({logosrc,marginRight,logoName}) => {
    return (
        <div>
            <div className={`flex flex-row gap-2 rounded-lg mr-12 pr-${marginRight}
             min-w-md`}> 
                 <img src={logosrc} alt={`${logoName}` + " LOGO"}
                 className='rounded-md w-full h-[60px] px-0' />
            </div>
        </div>
    )
}

export default SpecialLogos;