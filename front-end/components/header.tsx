import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';

export default function Header() {
  return (
    <div className='flex w-full justify-between items-center px-36 py-10 '>
      <h1 className="text-5xl text-neutral-200 font-bold">Noter</h1>
      <div className="">
        <SettingsIcon fontSize='large' color='primary' className='cursor-pointer'/>
      </div>
    </div>
  )
}
