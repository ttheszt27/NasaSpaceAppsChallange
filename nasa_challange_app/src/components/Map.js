import GoogleMapReact from 'google-map-react'

const Map = ({ center,zoom }) => {
  return (
    <div className = "map">
        <GoogleMapReact
            bootstrapURLKeys={{ key : 'AIzaSyC9BvQq2GLU4tQ6yiCyEquPHqggzm90uVs'}}
            defaultCenter={ center }
            defaultZoom={ zoom }
        ></GoogleMapReact>
      
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 42,
        lng: -122
    },
    zoom: 6
}

export default Map
