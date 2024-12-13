import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmark, setBookmark] = useState([])

  const handleAddToBookmark = blog => {
    console.log('bookmark clicked!')
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex p-4 max-w-7xl mx-auto'>
        <Blogs
          handleAddToBookmark = { handleAddToBookmark}
        ></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
