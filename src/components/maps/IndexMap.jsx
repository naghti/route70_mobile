import React from "react";
import {observer} from "mobx-react-lite";
import GoogleMapReact from "google-map-react";
import state from "../../state/state";
const IndexMap = observer(({coordinats}) => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBVBNRx9srL-jl36znEB3_aeXO0EGLG6YA' }}
                center={{
                    lat: state.center.lat,
                    lng: state.center.lng,
                }}
                defaultZoom={13}
            >

                <div
                    lat={56.491098}
                    lng={84.962755}
                >
                    ddddddddddd
                </div>

            </GoogleMapReact>
        </div>
    );
});
export default IndexMap
