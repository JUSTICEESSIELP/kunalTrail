import React from 'react'
import ndcImage from '../assets/R.png'
import { BsPencil } from "react-icons/bs";
import { Link } from 'react-router-dom';
import {MdDelete} from 'react-icons/md'


function SinglePost({data, onHandleDelete}) {
  
    const {meta, title, createdAt, thumbnail, tags} = data

    const formattedDate = new Date(createdAt).toLocaleDateString()
    const metaContent = meta? meta.substring(0,20): ''
    const formattedTitle = title.slice(1, title.length-1)
 

  return (
    <div className='border flex flex-col shadow-sm rounded m-3 bg-white' >
        <img src = {thumbnail ? thumbnail : ndcImage} className='w-full'/>
        <div className='flex flex-col justify-between  flex-1 p-2'>
             <h1 className=''>{formattedTitle}</h1>
             <p className=''>{metaContent}</p>
             <div className='flex  flex-row justify-between gap-4'>
                <p className='text-gray-500 text-sm '>{formattedDate}</p>
                <p className='text-gray-500 text-sm'>NYC, BullNetwork</p>
             </div>

             <div className='flex flex-row space-x-2'>
                <Link to = {`/update-post/${data.id}`} className='rounded-full p-3 bg-sky-300'>
                    <BsPencil/>
                </Link>

                <button onClick={()=>onHandleDelete(data.id)} className='rounded-full p-3 bg-red-300'>
                    <MdDelete/>
                </button>



             </div>
        </div>
       
        
      
    </div>
  )
}

export default SinglePost
