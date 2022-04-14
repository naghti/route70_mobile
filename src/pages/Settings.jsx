import React from 'react';
import classes from './style/Settings.module.css'
import state from "../state/state";
const Settings = () => {
    return (
        <div
            className={classes.settings__box}
            onClick={() => state.changeSetting(false)}
        >
            <div className={classes.settings}
                onClick={(e) => e.stopPropagation()}
            >

                <div className={classes.settings__header + ' ' + classes.settings__border}>
                    <img
                        src="https://accessible-city.ru/static/media/searchBackPhoto.d554172b.png"
                        alt=""
                        className={classes.settings__headerImg}
                    />
                </div>

                <div className={classes.settings__changeCountry + ' ' + classes.settings__border}>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Settings;