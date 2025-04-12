import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = { height: '400px', width: '100%' };
  const defaultCenter = { lat: 0.4162, lng: 9.4673 }; // Coordonnées de Libreville

  const eventLocations = [
    { lat: 0.4182, lng: 9.4712, name: 'Marché artisanal' },
    { lat: 0.4158, lng: 9.4628, name: 'Festival culturel' }
  ];

  return (
    <div data-testid="map">
        <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE"> {/* Replace with your API key */}
        <GoogleMap mapContainerStyle={mapStyles} zoom={14} center={defaultCenter}>
            {eventLocations.map((event, index) => (
            <Marker key={index} position={{ lat: event.lat, lng: event.lng }} />
        ))}
        </GoogleMap>
        </LoadScript>
    </div>
  );
};

export default Map;
