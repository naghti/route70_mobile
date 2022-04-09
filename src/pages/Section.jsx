import React, {useEffect, useState} from 'react';
import PostService from "../API/PostService";
import {useParams} from "react-router-dom";
import SectionMap from "../components/maps/SectionMap";
import classes from './style/Section.module.css'
import InputName from "../components/UI/box/InputName";
import Style from "../components/UI/box/Style";
import Chapter from "../components/UI/box/Chapter";
import SectionMarkers from "../components/SectionMarkers";
const Section = () => {
    let [sectionMarkers,setSectionMarkers] = useState()
    let [loading,setLoading] = useState(true)
    const params = useParams()
    useEffect(() => {
        fetchInfo()
    }, [])
    async function fetchInfo(){
        const SectionMarkers = await PostService.getSectionMarkers(params.section)
        setSectionMarkers(SectionMarkers)
        setLoading(false)
    }

    return (
        <div className={classes.section}>
            {
            loading
                ?
                <div></div>
                :
                <>
                    <div className={classes.section__header}>
                        <Style style={{padding: '10px 10px 0'}}>
                            <InputName/>
                        </Style>
                        <div className={classes.section__list}>
                            {
                                sectionMarkers.map(sectionMarker => (
                                    <Chapter
                                        name={sectionMarker['под-раздел']}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <SectionMap/>
                    <SectionMarkers sectionMarkers={sectionMarkers}/>
                </>
            }
        </div>
    );
};

export default Section;