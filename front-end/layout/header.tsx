import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';

export default function Header() {
  return (
    <div className='flex w-full justify-between items-center px-36 py-10 '>
      <h1 className='text-6xl text-neutral-200 font-bold py+4'>Noter</h1>
      <a href="https://github.com/nta45" className="text-xl text-neutral-200 font-bold py+6">GITHUB</a>
      <div className="" >
        <SettingsIcon  fontSize='large' color='primary' className='cursor-pointer'/>
      </div>
    </div>
  )
}
