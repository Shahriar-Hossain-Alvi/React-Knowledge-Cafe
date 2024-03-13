import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="w-1/3 mt-8">
            <div className='p-5 border border-[#6047EC] bg-[#6047EC1A] rounded-lg'>
                <h2 className='text-[#6047EC] text-2xl font-bold'>Spent time on read : {readingTime} min</h2>
            </div>
            <div className="mt-6 p-7 bg-[#1111110D]">
                <h2 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;