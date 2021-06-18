import propsTypes from 'prop-types';
import Tab from './tab';

CryptoPayButton.propTypes = {
  type: propsTypes.oneOf(['tab', 'window', 'frame']),
  onClick: propsTypes.func.isRequired,
  onSuccess: propsTypes.func.isRequired,
  transaction: propsTypes.string.isRequired,
  url: propsTypes.string.isRequired,
};

CryptoPayButton.defaultProps = {
  url: 'https://crypto-pay-payment.vercel.app/',
};

function CryptoPayButton(props) {
  if (props.type === 'tab') {
    return <Tab {...props} />;
  }
}

export default CryptoPayButton;
