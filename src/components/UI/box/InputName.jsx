import React from 'react';
import classes from './InputName.module.css'
import {useNavigate} from "react-router-dom";
const InputName = () => {
    const router = useNavigate()
    return (
        <div className={classes.inputName}>

            <img
                src="https://psv4.userapi.com/c534536/u2000062276/docs/d29/4688a8bc88b5/file.png?extra=SUmzyXw4RvTTG7oReRG4fl5wHQHHyayUqo8QPW6DqBHF5ZOwgo9lDErX5sWTxL6stAayHUJpZhHFN9xGeefC04iG4npWzHXx07yH9inrQgRIEqa4l4ldoDoZa6_ZuQpowaqK9LRMZj0NJZGwUT18x1AUtW0"
                alt="Back"
                style={{width:24,marginRight:10}}
                onClick={() => router(-1)}
            />
            <h4>Рестораны</h4>
        </div>
    );
};

export default InputName;