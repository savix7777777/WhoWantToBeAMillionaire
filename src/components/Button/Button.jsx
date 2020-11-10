import React from 'react';
import PropTypes from 'prop-types';


const Button = ({id, disabled, className, onClick, children}) => {
    return(
        <button id={id} disabled={disabled} className={className} onClick={onClick}>{children}</button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.node,
};


Button.defaultProps = {
    children: 'Button',
    onClick: () => {},
    className: 'button',
    disabled: '',
    id: '',
};


export default Button;