import React from 'react'
import PropTypes from 'prop-types'

export default class Map extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: '',
  }
  componentDidMount() {
    const position = new google.maps.LatLng(51.165381, 10.44682)

    const mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 6,

      // The latitude and longitude to center the map (always required)
      center: position, // New York

      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }, { lightness: 20 }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [{ color: '#ffffff' }, { lightness: 17 }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }],
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }, { lightness: 18 }],
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [{ color: '#ffffff' }, { lightness: 16 }],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }, { lightness: 21 }],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#dedede' }, { lightness: 21 }],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            { visibility: 'on' },
            { color: '#ffffff' },
            { lightness: 16 },
          ],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            { saturation: 36 },
            { color: '#333333' },
            { lightness: 40 },
          ],
        },
        { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#f2f2f2' }, { lightness: 19 }],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [{ color: '#fefefe' }, { lightness: 20 }],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }],
        },
      ],
    }

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    let mapElement
    if (typeof document !== undefined)
      mapElement = document.getElementById('map')

    // Create the Google Map using our element and options defined above
    const map = new google.maps.Map(mapElement, mapOptions)

    // Let's also add a marker while we're at it
    // eslint-disable-next-line
    const marker = new google.maps.Marker({
      position,
      map,
      title: 'Snazzy!',
    })
  }

  render() {
    return <div className={this.props.className} id="map" />
  }
}
