import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    return (
        <div>
            <p className="bg-white p-2 my-2 rounded-md">{bookmark.title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array.isRequired,
}

export default Bookmark;