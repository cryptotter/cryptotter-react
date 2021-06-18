import PropTypes from 'prop-types';

Button.propTypes = {};

function Button(props) {
  return (
    <button
      {...props}
      style={{
        padding: '10px 20px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        color: 'white',
        ...props.style,
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
