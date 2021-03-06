import propsTypes from 'prop-types';
import Tab from './tab';
import Popup from './popup';

CryptotterButton.propTypes = {
  className: propsTypes.string,
  style: propsTypes.object,
  type: propsTypes.oneOf(['tab', 'popup']),
  onClick: propsTypes.func.isRequired,
  onSuccess: propsTypes.func.isRequired,
  transaction: propsTypes.string.isRequired,
  payment: propsTypes.string.isRequired,
};

CryptotterButton.defaultProps = {
  payment: 'https://pay.cryptotter.tech',
};

function CryptotterButton(props) {
  if (props.type === 'tab') {
    return <Tab {...props} />;
  } else if (props.type === 'popup') {
    return <Popup {...props} />;
  }

  return <Tab {...props} />;
}

export {CryptotterButton};
export default CryptotterButton;
