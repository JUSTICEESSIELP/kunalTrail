import React, {useEffect, useState} from 'react'
import getAllPostFetch from '../../api/getAllPost'
import SinglePost from '../../singlePostComponent'
import deletePostFnc from '../../api/deletePost'


function HomePage({queryText}) {
  const [isError , setError] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [postData, setPostData] = useState([])

  

  const onHandleDelete =async (id)=>{
    console.log(id)
     setLoading(true)
    try{
      await deletePostFnc(id)
          const filteredData = postData.filter((post)=>{
      return post.id !== id
     
    })

    setPostData([...filteredData])



    }catch(error){
      setLoading(false)
      setError(error)
    }
    
    


  }

  const getAllPost = async()=>{
    setLoading(true)
    try{
     const data = await getAllPostFetch(0,4)
     if(data){
      setPostData([...data])
      console.log(data, 'ddddd')
      setLoading(false)

     }

    }catch(error){
      setLoading(false)
      setError(error)
      setPostData([])
    }
    

  }
  useEffect(() =>{
    getAllPost()

  }, [])

  // postData.allPosts.map((x, index)=>{
  //   console.log(x)

  // })
  console.log()

  return (
    <div className='grid grid-cols-3 mt-4  border'>

{postData.map((post, index) => { // Iterate through postData array

        return (
          <SinglePost key={index} data={post} onHandleDelete={onHandleDelete} /> // Pass each post data to the SinglePost component
        );
      })}

   
        
      
    </div>
  )
}

export default HomePage
