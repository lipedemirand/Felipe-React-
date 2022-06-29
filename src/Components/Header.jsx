import propTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>Agenda de {title}</h1>
        </header>
    );
};

Header.defaultprops = {
    title: 'compromissos',
};

Header.propTypes = {
    title: propTypes.string.isRequired,
};

export default Header;