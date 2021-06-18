import PropTypes from 'prop-types';
import {useState, useMemo} from 'react';
import Button from './components/button/index.js';

Tab.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

function Tab(props) {
  const [transaction, setTransaction] = useState(null);

  const url = useMemo(() => new URL(props.url), [props.url]);
  return (
    <Button
      onClick={async () => {
        await props.onClick();
        const tabWindow = window.open('url', '_blank');
        tabWindow.focus();
        window.addEventListener('message', (event) => {
          if (event.origin !== url.origin) {
            return;
          }

          if (transaction) {
            return;
          }

          setTransaction(event.data.transaction);
        });
      }}
    />
  );
}

export default Tab;
