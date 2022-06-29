import PropTypes from 'prop-types';

const Button = ({ bgColor, text, onClick }) => {
    return (
        <button
        onClick={onClick}
        style={{ backgroundColor: bgcolor }}
        className="btn">
            {text}
        </button>
    );
};

Button.defaultProps = {
    bgColor: 'steelblue',
};

Button.propTypes = {
    Text: PropTypes = {
        text
    }
}