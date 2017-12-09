import layout from './layout.jsx';
import about  from './about.jsx';
import home   from './home.jsx';

module.exports = (mediator) => {
  const routes = [
    {
      exact: true,
      path: '/',
      name: 'Home',
      component: home 
    },
    {
      path: '/about',
      name: 'About',
      component: about
    }
  ];
  return routes;
};
