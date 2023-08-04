import { useState } from "react";
import {BiMenuAltLeft, BiMenuAltRight  } from "react-icons/bi";
import Navbar from "./components/Nav/Navbar";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./screens/HomePage/HomePage";
import CreatePost from "./screens/createPostPage";
import UpdatePost from "./screens/updatePostPage";
import NotFoundPage from "./screens/NotFoundPage";
import SearchBar from "./components/Searchbar";


function App() {
  const [expandNav, setExpandNav] = useState(true)
const [searchQuery, setSearchQuery ] = useState('')
  const expandNavFnc  = (prevState)=> setExpandNav(!expandNav)

  const handleSearchFnc = (search)=>{
    setSearchQuery(search)

  }
  return (
    <div className="bg-slate-200 flex min-h-screen ">

      {/* nav  */}
      <div className= {expandNav? "w-56": "w-10" + "bg-sky-500 min-h-screen transition-width"}>
<div className="sticky top-0 ">
        <Navbar isExpanded = {expandNav}/>
        </div>
      </div>

      <div className="flex-1 min-h-screen bg-red-400 ">


  <div className="sticky top-0 ">
  <div className="flex flex-row items-center mt-2 space-x-2">
          <button onClick={()=> expandNavFnc()}>
          {expandNav ? <BiMenuAltLeft size={30}/> : <BiMenuAltRight size= {30}/>}
          </button>

          <SearchBar onSearching = {handleSearchFnc}/>


        </div>
  </div>


        <div className = 'max-w-5xl mx-auto w-full'>
        <Routes>
          <Route path='/' element = {<HomePage queryText = {searchQuery} />}/>
          <Route path = '/create-post'element ={<CreatePost/>}/>
          <Route path = '/update-post/:id'element ={<UpdatePost/>}/>
          <Route path= '*' element = {<NotFoundPage/>}/>

      </Routes>
          
        </div>
        


      </div>


  
      

    </div>
  );
}

export default App;
