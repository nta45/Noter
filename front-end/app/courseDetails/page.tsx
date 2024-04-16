"use client";
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/layout/header';

export default function Coursedetails() {
  const params = useSearchParams();
  return (
    <div className="bg-black w-full h-full overflow-hidden">
      <div className='mt-20 flex flex-wrap gap-32 justify-center'>
        <h1 className='text-3xl'>{params.get("courseId")}</h1>
          
        <p>{params.get("courseDesc")}</p>
      </div>
    </div>
  )
}
