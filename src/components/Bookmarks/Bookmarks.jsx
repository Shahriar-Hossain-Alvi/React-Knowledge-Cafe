import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="w-1/3">
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
    bookmarks: PropTypes.object.isRequired
}

export default Bookmarks;