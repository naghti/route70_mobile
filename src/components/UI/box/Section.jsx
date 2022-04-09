import React from 'react';
import classes from './Section.module.css'
import {useNavigate} from "react-router-dom";
const Section = ({section}) => {
    const router = useNavigate()
    return (
        <div
            className={classes.section}
            onClick={() => router(`section/${section['section']}`)}
        >
            <img
                src={section['src']}
                alt="icon"
                className={classes.section__image}
            />
            <h5
                className={classes.section__name}
            >
                {section['name']}
            </h5>
        </div>
    );
};

export default Section;