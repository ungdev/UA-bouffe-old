import React    from 'react';
import { Link } from 'react-router';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        UA Bouffe 2016
        <Link to="/sell">Interface de vente</Link>
        <Link to="/prepare">Interface de préparation</Link>
      </div>
    );
  }
}
