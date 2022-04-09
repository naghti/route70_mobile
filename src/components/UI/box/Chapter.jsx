import React from 'react';
import classes from './Chapter.module.css'

const Chapter = ({name}) => {
    return (
        <div className={classes.chapter}>
            <p className={classes.chapter__name}>
                {name}
            </p>
        </div>
    );
};

export default Chapter;