var React = require('react');

module.exports = ({route : { data } }) => {
  console.log(data);
  return (
  <div>
    <h1>About</h1>
    <div className="hi">This is our thing! {data.name}</div>
  </div>
)};
