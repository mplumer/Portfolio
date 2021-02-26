import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Googlemap extends Component {
    static defaultProps = {
        center: {
          lat: 27.898996,
          lng: -81.341575
        },
        zoom: 11
    };

    render() {
        return (
            <div>
                <div style={{ height: '538px', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBiq8V4bz9YD6HCbFR7VJHefj9NeX6n--8"}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={27.898996}
                        lng={-81.341575}
                        text="My Location"
                    />
                    </GoogleMapReact>
                </div>
            </div>
            

        )
    }
}
export default Googlemap;