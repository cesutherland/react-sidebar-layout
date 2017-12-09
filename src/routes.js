import layout from './layout.jsx';
import about  from './about.jsx';

module.exports = (mediator) => {
  const routes = {
    path: '/',
    component: layout,
    mediator: mediator,
    childRoutes: [
      {
        name: 'About',
        path: 'about',
        mediator: mediator,
        component: {page: about}
      }
    ]
  };
  return routes;
};
