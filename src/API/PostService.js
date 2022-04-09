import axios from "axios";
import ResponceHandler from './ResponceHandler'
export default class PostService {
    static async getSections(){
        const responce = await axios.post(`http://reinaght.xyz/`, new URLSearchParams({
                action:'разделы'
            })
        )
        let result = ResponceHandler.Sections(responce.data)
        return result
    }
    static async getSectionMarkers(section){
        const responce = await axios.post(`http://reinaght.xyz/`, new URLSearchParams({
                action:'метки по разделу',
                section: section
            })
        )
        const result = ResponceHandler.SectionMarkers(
            responce.data
        )
        return result
    }
    static async getMarker(id){
        const responce = await axios.post(`http://reinaght.xyz/`, new URLSearchParams({
                action:'метка',
                id: id
            })
        )
        const result = ResponceHandler.Marker(
            responce.data
        )
        return result
    }
    static async getMarkerPhoto(id){
        const responce = await axios.post(`http://reinaght.xyz/`, new URLSearchParams({
                action:'фотографии метки',
                id: id
            })
        )
        let result = ResponceHandler.MarkerPhoto(responce.data)
        return result
    }
    static async getMarkersName(){
        const responce = await axios.post(`http://reinaght.xyz/`, new URLSearchParams({
                action:'имена меток',
            })
        )
        return responce.data
    }
    static async getMarkersCoordinats(){
        const responce = await axios.post(`http://reinaght.xyz/`, new URLSearchParams({
                action:'координаты всех мест',
            })
        )
        return responce.data
    }
    static async getMarkerPrewiev(id){
        const responce = await axios.post(`http://reinaght.xyz/`, new URLSearchParams({
                action:'превью метки',
                id: id
            })
        )
        let result = ResponceHandler.MarkerPrewiev(responce.data)
        return result
    }
}