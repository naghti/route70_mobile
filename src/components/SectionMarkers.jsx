import React from 'react';
import MarkerPreview from "./MarkerPreview";
import classes from './style/SectionMarkers.module.css'
const SectionMarkers = ({sectionMarkers}) => {
    return (
        <div className={classes.sectionMarkers__box}>
            <div className={classes.sectionMarkers}>
                {
                    sectionMarkers.map( marker => {
                        return <MarkerPreview marker={marker}/>
                    })
                }
            </div>
        </div>
    );
};

export default SectionMarkers;