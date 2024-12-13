import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Time from './components/Time/Time'

function App() {
  const [bookmark, setBookmark] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmark, blog]
    setBookmark(newBookmarks)
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
  
    // Remove the read blog from the bookmarks
    const remainingBookmark = bookmark.filter(bookmark => bookmark.id !==id)
    setBookmark(remainingBookmark)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-10 p-4 max-w-7xl mx-auto'>
        <Blogs
          handleAddToBookmark = { handleAddToBookmark}
          handleMarkAsRead = {handleMarkAsRead}
        ></Blogs>
        <div className='md:flex flex-col md:w-1/3 gap-3'>
          <Time
            readingTime={readingTime}
            handleMarkAsRead={handleMarkAsRead}
          ></Time>
          <Bookmarks
            bookmark = {bookmark}
          ></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
