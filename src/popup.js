import PropTypes from 'prop-types';
import {useMemo, useState} from 'react';
import Button from './components/button/index.js';
import {getPopupSizes} from './utils/index.js';

Popup.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  payment: PropTypes.string.isRequired,
  transaction: PropTypes.string.isRequired,
};

function Popup(props) {
  const [transaction, setTransaction] = useState(null);

  const buttonTypeProps = useMemo(() => {
    return props.transaction ? {
      elementType: 'a',
      href: `${props.payment}/${props.transaction}`,
      target: '__blank'
    }: {
      elementType: 'div',
    }
  })

  return (
    <Button
      {...buttonTypeProps}
      onClick={async (event) => {
        event.preventDefault();

        const onClickResult =  await props.onClick();
        if (onClickResult === false) {
          return
        }
        const popupSize = getPopupSizes({
          height: 400,
          width: 400,
        });
        const tabWindow = window.open(
          `${props.payment}/${onClickResult?.transaction || props.transaction}`,
          '',
          `width=${popupSize.width},height=${popupSize.height},left=${popupSize.left},top=${popupSize.top}`
        );
        tabWindow.focus();
        window.addEventListener('message', (event) => {
          if (event.origin !== new URL(props.payment).origin) {
            return;
          }

          if (transaction) {
            return;
          }

          setTransaction(event.data.transaction);

          props.onSuccess(transaction);
        });
      }}
    >
      {props.children}
    </Button>
  );
}

export default Popup;
