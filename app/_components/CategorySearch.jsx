import React from 'react'
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';

const CategorySearch = () => {
  return (
    <div className="mb-10 items-center px-5 flex flex-col gap-2">
         <h2 className='font-bold
        text-4xl tracking-wide'>
            Search <span className='text-primary'>Psychologist</span></h2>
        <h2 className='text-gray-500 text-xl'>Search Your Psychologist and Book Appointment in one click</h2>
        <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search..." />
            <Button type="submit">
                {/* <Search className='h-4 w-4 mr-2'/>
                 */}
                 Search
            </Button>
        </div>
    </div>
  )
}

export default CategorySearch