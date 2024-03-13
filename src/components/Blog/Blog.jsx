import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark }) => {

    const { title, cover_image, author, author_img, post_date, reading_time, hashtags } = blog;
    return (
        <div className='py-7 border-b space-y-6'>
            <img className='w-full rounded-lg' src={cover_image} alt={`cover of the title: ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <img className='w-14' src={author_img} alt="author" />
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-2xl'>{author}</h3>
                        <h3 className='text-[#11111199] font-semibold'>{post_date}</h3>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <h3 className='text-[#11111199] text-xl font-medium'>{reading_time} min read</h3>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-3xl text-[#11111199]'>
                        <CiBookmark ></CiBookmark >
                    </button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='mr-4'>
                        <a href="">#{hash} </a>
                    </span>)
                }
            </p>
            <a className='underline' href="#">Mark as read</a>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
    
}

export default Blog;