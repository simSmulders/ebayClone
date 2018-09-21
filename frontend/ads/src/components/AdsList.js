import React from 'react'
import { Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import CreateAdFormContainer from './CreateAdFormContainer';


export default function AdsList(props) {
    return (
      <div>
          <CssBaseline />
          <h1>Advertisements</h1>
        <ul>
          { props.ads && props.ads.map(ad => (
            <li key={ad.id}>
            <Link to={`/ads/${ad.id}`}>{ ad.title }, € {ad.price} </Link></li>
          )) }
          { !props.ads && <li>Loading...</li> }
        </ul>

        <CreateAdFormContainer />
        </div>
)
}