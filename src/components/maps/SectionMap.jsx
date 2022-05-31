// import React from "react";
// import {observer} from "mobx-react-lite";
// import GoogleMapReact from "google-map-react";
// import state from "../../state/state";
// import {useNavigate} from "react-router-dom";


// const SectionMap = observer(({sectionMarkers}) => {
    // const router = useNavigate()

    // function markersFilter(marker){
    //     if (state.markersFilter == undefined) {
    //         return true
    //     }else{
    //         return marker['под-раздел'] == state.markersFilter
    //     }
    // }
//     return (
//         <div style={{ height: '100%', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyBVBNRx9srL-jl36znEB3_aeXO0EGLG6YA' }}
//                 center={{
//                     lat: state.center.lat,
//                     lng: state.center.lng,
//                 }}
//                 defaultZoom={13}
//             >

                // {
                //     sectionMarkers
                //         .filter(marker => markersFilter(marker))
                //         .map((marker,index) => (
                //         <div
                //             key={index}
                //             lat={+marker['координаты'].split(',')[0]}
                //             lng={+marker['координаты'].split(',')[1]}
                //             onClick={() => router(`/place/${marker['id']}`)}
                //         >
                //             <img
                //                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuN2JhZmNmMCwgMjAyMS8xMC8xMy0wMDo0MToyOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wMS0yOFQxODo0OTowNyswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMS0yOFQxOToxNzozMSswMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDEtMjhUMTk6MTc6MzErMDM6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODBlZDY5ZjItZjkxNS1hYzQ0LTk0MzYtZDBiZDM0YWY4ODVkIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NTM1MWNmNDgtYjNlMS1mMjQ2LTllZjctZjQ4MmU2MmNkNWFkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODM0M2E3NjctZDVlOC0yZTQ3LWFhNzAtZWQ3ZjdlMGM4MTVmIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgzNDNhNzY3LWQ1ZTgtMmU0Ny1hYTcwLWVkN2Y3ZTBjODE1ZiIgc3RFdnQ6d2hlbj0iMjAyMi0wMS0yOFQxODo0OTowNyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowYjI0ZTg5OC01NDlmLTRlNDktYjUyNS03NjNjNzUxODM5ZDIiIHN0RXZ0OndoZW49IjIwMjItMDEtMjhUMTg6NDk6MDcrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODBlZDY5ZjItZjkxNS1hYzQ0LTk0MzYtZDBiZDM0YWY4ODVkIiBzdEV2dDp3aGVuPSIyMDIyLTAxLTI4VDE5OjE3OjMxKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+E+SGIAAAAUpJREFUWMPdmb8SATEQxvNs7hV4Aa9i1Gh1WgqFQq+i4AHMGCU6hTP3B8t3pUluNrmT2/hmMmNOku83ObtJlmr1b8qhkWOz9vIF5gzqG8watEk4FmSTYCxQZ7jOKKbePKHZJqPt8UHn64vSnIqGz3iG79AHfV0hreG64ztNVhkdLk/iCn0xBmNtIdmA0acNlgntT3ywb2Es5ogqAGoHtYcxTdcZ1SXMhTk5kCy4xS6nuoU5OZClgHgVda6cbiUjJqC2E34vvxY8ylbRCIiIqxIQNoFTEt3KuHpIC74ELxOHMiVhmzxXVfAyJXMtILK/b8GTDYgtyrfgyQbEPupb8GQDYrP3LXiyAdPcO1/h+T+A4l+x+CARn2bEJ2rxW520w4L441YQB1bxR/4gLk3ir51BXNyDKH2ILx4FUX4LooAZTAk4iCJ6Y39DvAEVz3COZdA3TAAAAABJRU5ErkJggg=="
                //                 alt="marker"
                //                 style={{width:20}}
                //             />
                //         </div>
                //     ))
                // }

//             </GoogleMapReact>
//         </div>
//     );
// });


// export default SectionMap



import React from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl from "react-mapbox-gl";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { Marker } from "react-mapbox-gl";
import {observer} from "mobx-react-lite";
import state from "../../state/state";
import { useNavigate } from "react-router-dom";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g"
});

const SectionMap = observer(({sectionMarkers}) => {
    console.log(sectionMarkers)
    const router = useNavigate()
    const changeMapLanguage = (map) => {
        map.setStyle('mapbox://styles/naght/cl2lhr9pa001j15p6eyhlsm1t')
        map.getStyle().layers.forEach((layer) => {
            if (layer.layout && layer.layout["text-field"]) {
                map.setLayoutProperty(layer.id, "text-field", [
                    "coalesce",
                    ["get", "name_" + 'ru'],
                    ["get", "name"],
                ]);
            }
        });
        state.changeLoader(false)
    };

    function markersFilter(marker){
        if (state.markersFilter == undefined) {
            return true
        }else{
            return marker['под-раздел'] == state.markersFilter
        }
    }
  return (
      <div>
          <Map
              style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
              containerStyle={{
                  height: "100vh",
                  width: "100%",
              }}
              onClick={(e) => {
                  console.log(e.getCenter());
              }}
              center={[state.center.lng, state.center.lat]}
              onStyleLoad={changeMapLanguage}
          >
             

              {
                    sectionMarkers
                        .filter(marker => markersFilter(marker))
                        .map((marker,index) => (

                        <Marker
                          coordinates={[
                              +marker["координаты"].split(",")[1],
                              +marker["координаты"].split(",")[0],
                          ]}
                          anchor="center"
                         >
                          <div
                              onClick={() => router(`/${marker["section"]}/${marker["id"]}`)}
                          >
                              <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuN2JhZmNmMCwgMjAyMS8xMC8xMy0wMDo0MToyOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wMS0yOFQxODo0OTowNyswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wMS0yOFQxOToxNzozMSswMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDEtMjhUMTk6MTc6MzErMDM6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODBlZDY5ZjItZjkxNS1hYzQ0LTk0MzYtZDBiZDM0YWY4ODVkIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NTM1MWNmNDgtYjNlMS1mMjQ2LTllZjctZjQ4MmU2MmNkNWFkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODM0M2E3NjctZDVlOC0yZTQ3LWFhNzAtZWQ3ZjdlMGM4MTVmIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgzNDNhNzY3LWQ1ZTgtMmU0Ny1hYTcwLWVkN2Y3ZTBjODE1ZiIgc3RFdnQ6d2hlbj0iMjAyMi0wMS0yOFQxODo0OTowNyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowYjI0ZTg5OC01NDlmLTRlNDktYjUyNS03NjNjNzUxODM5ZDIiIHN0RXZ0OndoZW49IjIwMjItMDEtMjhUMTg6NDk6MDcrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODBlZDY5ZjItZjkxNS1hYzQ0LTk0MzYtZDBiZDM0YWY4ODVkIiBzdEV2dDp3aGVuPSIyMDIyLTAxLTI4VDE5OjE3OjMxKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuNSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+E+SGIAAAAUpJREFUWMPdmb8SATEQxvNs7hV4Aa9i1Gh1WgqFQq+i4AHMGCU6hTP3B8t3pUluNrmT2/hmMmNOku83ObtJlmr1b8qhkWOz9vIF5gzqG8watEk4FmSTYCxQZ7jOKKbePKHZJqPt8UHn64vSnIqGz3iG79AHfV0hreG64ztNVhkdLk/iCn0xBmNtIdmA0acNlgntT3ywb2Es5ogqAGoHtYcxTdcZ1SXMhTk5kCy4xS6nuoU5OZClgHgVda6cbiUjJqC2E34vvxY8ylbRCIiIqxIQNoFTEt3KuHpIC74ELxOHMiVhmzxXVfAyJXMtILK/b8GTDYgtyrfgyQbEPupb8GQDYrP3LXiyAdPcO1/h+T+A4l+x+CARn2bEJ2rxW520w4L441YQB1bxR/4gLk3ir51BXNyDKH2ILx4FUX4LooAZTAk4iCJ6Y39DvAEVz3COZdA3TAAAAABJRU5ErkJggg=="
                                  alt="marker"
                                  style={{ width: 20 }}
                              />
                          </div>
                      </Marker>

                    ))
                }
          </Map>
      </div>
  );
})
export default SectionMap;