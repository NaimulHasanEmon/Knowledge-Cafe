import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmark, setBookmark] = useState([])

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmark, blog]
    setBookmark(newBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-10 p-4 max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark = { handleAddToBookmark}></Blogs>
        <Bookmarks bookmark = {bookmark}></Bookmarks>
      </div>
    </>
  )
}

export default App
