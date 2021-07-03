import PropTypes from 'prop-types';
import {useState} from 'react';
import Button from './components/button/index.js';

Tab.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  payment: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
};

function Tab(props) {
  const [transaction, setTransaction] = useState(null);

  return (
    <Button
      onClick={async () => {
        const onClickResult = await props.onClick();
        if (onClickResult === false) {
          return
        }
        const tabWindow = window.open(
          `${props.payment}/${onClickResult?.transaction ?? props.transaction}`,
          '_blank'
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

export default Tab;
