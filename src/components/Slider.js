import React from 'react'
import Slider from '@mui/material/Slider';


const Slider = () => {

  return (
    <div className='w-[100%]'>
        {/* Top */}
        <div className='font-bold text-sm'>
            $6,556,708.2 / $6,743,190
        </div>

        {/* Bottom */}
        <div className='w-full h-[10px] bg-[#FD395C] rounded-2xl'>
          <Slider
            aria-label="Small steps"
            defaultValue={0.00000005}
            getAriaValueText={"6,743,190"}
            step={0.00000001}
            marks
            min={-0.00000005}
            max={0.0000001}
            valueLabelDisplay="auto"
          />
        </div>

    </div>
  )
}

export default Sliderr