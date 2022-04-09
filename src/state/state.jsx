import {makeAutoObservable} from "mobx";

class State {
    markersFilt = true;
    center = {
        lat: 56.491098,
        lng: 84.962755,
    }
    constructor() {
        makeAutoObservable(this)
    }
    changeMarkersFilt(i){
        this.markersFilt = i
    }
}
export default new State()