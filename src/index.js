import { render } from 'react-dom';
import router from './router.jsx';

/**
 * Mediator triggers render and stores shared state.
 *
 * No Class or Component in this example - just functions.
 */

var mediator = {
  sidebar: false,
  render: function () {
    render(r(mediator), document.getElementById('layout'));
  }
};

// Inject mediator into router.
var r = router(mediator);

// Initial render:
mediator.render();
