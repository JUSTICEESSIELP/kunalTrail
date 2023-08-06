import React from 'react'
import {AiOutlineReload, AiFillFileAdd} from 'react-icons/ai'
import {BsFillEyeFill} from 'react-icons/bs'
import { useState } from 'react'

function CreatePost () {


//  we convert the fileInfo variable which is an object of the file   we convert it into a URL  with URL.createObjectURL()
// then we save the filepath of the image because that is what we need in the backend
  const [displayThumbNail, setDisplayThumbnail] = useState()
  // const [checkboxTick , setCheckBoxTick] = useState(false)
  const [formStateData, setFormData] = useState({

    thumbnail:'',
    title:'',
    content:'', 
    meta:'', 
    featured:false,
    tags:''

  })

  const handleFormChange = ({target})=>{

    const {name, value} = target

    if(name === 'thumbnail'){
      const fileInfo = target?.files[0]
      console.log(fileInfo, 'infooo')
      if(!fileInfo?.type?.includes('image')){
        return alert('only images are allowed ')
      }
      console.log(value, 'dddddddddddd')
   
    
      setDisplayThumbnail(URL.createObjectURL(fileInfo))
      return setFormData((prev)=>{
        const response = {
        thumbnail:value,
          ...prev
        }
        return response

      })
      
      
     
    }
    if(name === "meta" ){
      return setFormData({...formStateData, meta:value.substring(0, 150)})


    }
    if(name === 'tags'){
      const size = formStateData.tags.split(', ')
      if(size > 4){
        return console.log('only first four tags will be selected')
      }

    }
    


  
    

    setFormData({...formStateData, [name]:value})
    console.log(formStateData)
    

    
  }

  const rules = [
    {
      title:'From h1 to h6',
      description:'#Heading -> ####', 
      message:'Heading'
    }, 
    {
      title:'Blockquote',
      description:' > Your Quote'
    
    }, 
    {
      title:'Image', 
      description:'![image alt]',
      message:'(http://image_url.com)'
    }, 
    {
      title:'Link',
      description:'[Link Text]', 
      message:'(http://your_link.com)'
    }

  ]
  return (
    <form className='flex flex-row ' >
      <div className='w-3/4 space-y-3 p-3'>
      <div className='flex items-center justify-between border p-3'>
        <h1 className='text-xl font-semibold text-gray-700'>Create New Post</h1>
  
        <div className='flex items-center justify-between gap-x-10'>
            <button type = 'button' className = ' transition flex flex-row justify-center ring-1 ring-blue-500 hover:text-white hover:bg-blue-500 items-center p-3 space-x-2 border-none rounded bg-sky-300'>
              <AiOutlineReload/>
              <p className='text-black-200'>Reset</p>
            </button>

            <button type='button' className = ' transition hover:text-white hover:bg-blue-500 flex flex-row justify-center items-center p-3 space-x-2 border-none rounded bg-sky-300'>
              <BsFillEyeFill/>
              <p className='text-black-200'>View</p>
            </button>

            <button type='submit' className = ' transition hover:bg-blue-500 hover:text-white flex flex-row justify-center items-center p-3  px-14 space-x-2 border-none rounded bg-sky-300'>
            <p className='text-black-200'>Post</p>
              
            </button>
        </div>
      </div>

      <div className= 'flex flex-row p-3 space-x-3 ' onClick={()=>setFormData((prev)=> ({
        ...prev, featured:!prev.featured

      }))}>
       <div className='w-4 h-4 rounded-full border-blue-500  ring-1 flex-row justify-center items-center relative'>
        {formStateData.featured ? (  <div className='w-2 h-2 rounded-full bg-blue-500 absolute top-1 left-1'/>) : <div/> }
       </div>
       <span>Featured</span>
      </div>

      <div className='p-3'>
        <input placeholder='Post title ' className='w-full p-4 border rounded-sm ' name= 'title' value= {formStateData.title} onChange={(e)=> handleFormChange(e)}/>
      </div>
      
      <div className='flex flex-row gap-x-3 p-3'>
      <div className='flex flex-row'>
     <input id = 'image-input' type = 'file' hidden/>
      <label htmlFor='image-input'className='p-3 flex flex-row justify-center items-center border space-x-2 ml-3 hover:text-white '>
      <AiFillFileAdd/>
      <p> Place Image</p>
      </label>
      </div>
      <input disabled value = 'https://en.wikipedia.org/wiki/File:Coin_olympias_mus_theski.JPG'  className='p-2 flex-1 bg-gray-400 rounded-sm'/>
      </div>

      <div className='p-3'>
      <textarea id="multiline-text" name="content" onChange={handleFormChange}  value = {formStateData.content}rows="20" cols="50" placeholder='##Markdown' className=' flex-1 text-black p-3 w-full font-semibold focus-ring-1 hover:outline-10  resize-none'></textarea>
      {/* <div className='p-3'>
        <input placeholder='Post title ' className='w-full p-4 border rounded-sm ' name= 'title' value= {formStateData.title} onChange={(e)=> handleFormChange(e)}/>
      </div> */}

        
      </div>
      <div className='p-3 flex-col space-y-4'>
        
        <label className='text-md font-semibold' >Tags</label>
        <input  name = 'tags'placeholder='Tags' value={formStateData.tags} onChange={handleFormChange} className='w-full p-4 border rounded-sm'/>
     <div className='mt-2'>
        <label htmlFor='meta' className='text-md font-semibold' >Meta Descriptions <span className='text-white'>{formStateData.meta.length}/150</span></label>
        <textarea name = 'meta' value={formStateData.meta} onChange={handleFormChange} id = 'meta'placeholder='Meta Descriptions' className='w-full p-4 border rounded-sm '/>
        </div>
      </div>
  

      


      </div>

      <div className='w-1/4 space-y-3 border mt-3'>
        <div className='p-3 '>
          <h1 className='text-2xl font-semibold text-gray-700'>Thumbnail</h1>
          {!formStateData?.thumbnail ? (
                        <div className='flex flex-col justify-center, items-center border border-dashed p-3 py-8 space-y-3  mt-4 '>
           
                        <input  id = 'thumbnail'  type='file' name = 'thumbnail' value = {formStateData.thumbnail} hidden  onChange={handleFormChange} className='width-full h-full '/>
                        <label htmlFor='thumbnail' >
                          <div className='flex flex-col'>
                        <div className='text-lg font-semibold  '>Select Thumbnail</div>
                        <div className='text-gray-700'>Recommended size</div>
                        <div className='text-gray-700'> 1280 * 720</div>
                        </div>
                        </label>
          
                      </div>
          ) : (
            <div className='flex flex-col justify-center, items-center border border-dashed p-3 py-8 space-y-3  mt-4 '>
           
            <input  id = 'thumbnail'  type='file' name = 'thumbnail' hidden  value={formStateData.thumbnail} onChange={handleFormChange} className='width-full h-full '/>
            <label htmlFor='thumbnail'>
              <img  src = {displayThumbNail} alt = 'thumbnail' className='w-full h-full'/>
              </label>

              </div>

           


            
          )}


        </div>

        <div className='bg-white h-2/4  py-2 mx-3'>
          <h3 className='text-center text-lg text-black font-semibold mb-3 underline'>General markdown rules</h3>
          <div className='flex flex-col  border'>
            {rules.map((data, index)=>
            (
              <div className='flex-1 flex flex-col p-2 ' key={index}> 
              <p className='text-gray-400 font-semibold'>{data?.title}</p>
              <span className='text-center my-2'>{data?.description}</span>
              <span className='text-center'>{data?.message}</span>




              </div>

            )
            )}



          </div>

  

        </div>


        </div>

    </form>
  )
}

export default CreatePost
