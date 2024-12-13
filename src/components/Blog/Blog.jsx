import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover,author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-10'>
            <img className='w-full rounded-2xl mb-4' src={cover} alt={`Cover photo of ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-5'>
                    <img className='h-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button className='ml-2' onClick={() => handleAddToBookmark()}>
                        <CiBookmark></CiBookmark>
                    </button>
                </div>
            </div>
            <p className='text-2xl font-bold mb-4'>{title}</p>
            <div className='text-gray-500'>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='mr-4'>
                        <a href="">#{hash}</a>
                    </span>)
                }
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
}

export default Blog;