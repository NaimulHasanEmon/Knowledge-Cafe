import PropTypes from "prop-types";

const Time = ({readingTime, handleMarkAsRead}) => {
    return (
        <div>
            <p
                onClick={() => handleMarkAsRead()}
                className="bg-purple-200 text-purple-800 text-2xl font-bold p-3 rounded-xl border-2 border-purple-800"
            >Spent time on read: {readingTime}</p>
        </div>
    );
};

Time.propTypes = {
    readingTime: PropTypes.number.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
};

export default Time;