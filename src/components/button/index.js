import { jsx } from 'react/jsx-runtime';
import PropTypes from 'prop-types';

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  elementType: PropTypes.elementType,
};

Button.defaultProps = {
  elementType: 'div',
}

function Button(props) {
  const {elementType, ...elemProps} = props
  return jsx(elementType, {
    ...elemProps,
    style: {
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
      textDecoration: 'none',
      ...elemProps.style
    },
    children: elemProps.children
  });
}

export default Button;
