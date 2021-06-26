import propsTypes from 'prop-types';
import Tab from './tab';
import Popup from './popup';

CryptoPayButton.propTypes = {
  type: propsTypes.oneOf(['tab', 'window', 'frame']),
  onClick: propsTypes.func.isRequired,
  onSuccess: propsTypes.func.isRequired,
  transaction: propsTypes.string.isRequired,
  payment: propsTypes.string.isRequired,
};

CryptoPayButton.defaultProps = {
  payment: 'https://crypto-pay-payment.vercel.app',
};

function CryptoPayButton(props) {
  if (props.type === 'tab') {
    return <Tab {...props} />;
  } else if (props.type === 'window') {
    return <Popup {...props} />;
  }

  return <Tab {...props} />;
}

export default CryptoPayButton;
