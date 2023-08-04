import api from "./axiosBase";



const getAllPostFetch = async(pageNo, limitNo)=>{
    try{
        const response = await api.get(`/latest-post?pageNo=${pageNo}&limitNo=${limitNo}`)
        if(!response){
            throw new Error('Fetching error for fetching post ')
        }
       console.log(response.data.latestPost, 'resonseeee')
        return response.data.latestPost;

    }catch(error){
        console.log(error, 'errrrrrrr')
        return error.message
    }
 
    

}

export default getAllPostFetch