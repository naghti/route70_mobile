import React from 'react';
import classes from './Input.module.css'
const Input = ({style}) => {
    return (
        <div className={classes.input} style={style}>
            <img
                src="https://img.icons8.com/ultraviolet/80/000000/google-maps-new.png" alt="icon"
                className={classes.input__image}
            />
            <input
                type="text"
                className={classes.input__input}
                placeholder={'Поиск...'}
            />
            <div className={classes.input__additionally}>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAr0lEQVR4XpVSIRbFIAzr/SXqOxwOBYcAxT3mOMH/GX3bsvIRRNE2gbRUvoTjOGqtMcbPAA4IkWSO3KfWmvsHKFGygpyzJb4BwiNY3W2g7wgsctZ7vwrhDWQppXC59x5C0BAHhKwBWTCKO3YXKQywWAGy4CFOuUszs91wtS/YtsRN44K5abZwNo1Jcco4NCXo9z9OPzylZOtvgPCshgIXzBNzq+VToB+0xeuNEL6Z8wPSkROFYM1OQAAAAABJRU5ErkJggg=="
                    alt="clouse"
                    className={classes.input__imageClouse}
                />
                <img
                    src="https://sun4-12.userapi.com/impf/6K_sPNGiicCHWmpXUiqHGXIi0yGb52fURAnQyw/wDRoZvD9fOU.jpg?size=80x80&quality=96&sign=927f1b26f0e3e8ae86a12cde4bd1ffdd&type=album"
                    className={classes.input__imageSettings}
                />
            </div>
        </div>
    );
};

export default Input;