import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmark}) => {
    return (
        <div className="bg-gray-300 p-2 rounded-xl">
            <p className="text-xl font-bold border-b-2 border-b-black">Bookmarked Blogs: {bookmark.length}</p>
            {
                bookmark.map((bookmark => <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}
                ></Bookmark>))
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.array.isRequired,
}

export default Bookmarks;