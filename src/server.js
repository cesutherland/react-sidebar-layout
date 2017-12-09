import express from 'express';
import routes from './routes';
import mediator from './mediator';
import {match, RoutingContext} from 'react-router';

const app = express();

app.get('*', (req, res) => {
  console.log(req.originalUrl);
  match({routes, location: req.originalUrl}, (err, redirectLocation, renderProps) => {
    console.log(redirectLocation);
    console.log(renderProps);
    // console.log(renderProps.components);
    //console.log(err);
    res.send('hi');
  });

});

app.listen(3030, () => {
  console.log('Listening on 3030.');
});
