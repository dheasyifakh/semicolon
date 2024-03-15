"use client"
import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Articles = () => {
    const [blog, setBlog] = useState([])

    const getBlog = async() =>{
        await axios.get('/api/blog')
        .then(result => setBlog(result.data))
    }
    useEffect(()=>{
        getBlog()
    },[])
    
    const formattedDate = (createdAt) =>{
        const dateString = createdAt;
        const date = new Date(dateString);
    
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return  date.toLocaleDateString('en-GB', options);
    }
   
    return (
    <div className='mb-10 px-8 mt-20'>
        <div className="mb-10 items-center px-5 flex flex-col gap-2">
             <h2 className='font-bold text-4xl tracking-wide'>
            Get <span className='text-primary'>Insight</span> from the articles</h2>
            <h2 className='text-gray-500 text-xl'>Help you to find out about the problem you have</h2>
        </div>
        <h2 className='font-bold text-xl'>
        </h2>
       
             <div className='grid grid-cols-2 
             sm:grid-cols-2 md:grid-cols-3
             gap-7 mt-4
              lg:grid-cols-4' >
                 { blog ? blog.slice(0,10).map((item,index)=>(
                   <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg" key={index}>
                     <img
                         alt=""
                         src={item.image}
                         className="h-56 w-full object-cover"
                     />
 
                     <div className="bg-white p-4 sm:p-6">
                         <time datetime="2022-10-10" className="block text-xs text-gray-500">{formattedDate(item.createdAt)}</time>
 
                         <a href="#">
                         <h3 className="mt-0.5 text-lg text-gray-900">{item.title}</h3>
                         </a>
 
                         <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                         {item.content}
                         </p>
                     </div>
                 </article>
                   )) : ( 
                    <p>Loading ....</p>
                )
        
                }
             </div>
      
       
        </div>
  )
}

export default Articles