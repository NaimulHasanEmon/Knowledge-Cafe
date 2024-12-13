import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover,author_img, author, posted_date, reading_time, hashtags} = blog;
    console.log(blog)
    return (
        <div className='mb-10'>
            <img className='w-96 rounded-2xl' src={cover} alt={`Cover photo of ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <img className='h-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <p>Blog Title: {title}</p>
            <div>
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
}

export default Blog;