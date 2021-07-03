import PropTypes from 'prop-types';

Button.propTypes = {};

function Button(props) {
  return (
    <button
      type={'button'}
      {...props}
      style={{
        padding: '8px 16px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(79, 70, 229)',
        color: 'white',
        borderRadius: '5px',
        outline: 'none',
        border: 'none',
        ...props.style,
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
