import React from 'react';
import classes from './Input.module.css'
import state from "../../../state/state";
const Input = ({style}) => {
    return (
        <div className={classes.input} style={style}>
            <img
                src="https://img.icons8.com/ultraviolet/80/000000/google-maps-new.png" alt="icon"
                className={classes.input__image}
            />
            <p
                className={classes.input__input}
                onClick={() => state.changeBrowsingOpen(true)}
            >
                Поиск...
            </p>
            <div className={classes.input__additionally}>
                <img
                    src="https://sun4-12.userapi.com/impf/6K_sPNGiicCHWmpXUiqHGXIi0yGb52fURAnQyw/wDRoZvD9fOU.jpg?size=80x80&quality=96&sign=927f1b26f0e3e8ae86a12cde4bd1ffdd&type=album"
                    className={classes.input__imageSettings}
                    onClick={() => state.changeSetting(true)}
                />
            </div>
        </div>
    );
};

export default Input;