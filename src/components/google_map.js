// we aren't dropping markers on the map, we are just showing a map
// the google maps element is quite easy...this component is reusable
import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
	return (
		<GoogleMapLoader
			containerElement={ <div style={{height: '100%'}} /> }
			googleMapElement={
				<GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}
				/>
			}
		/>
	);

}