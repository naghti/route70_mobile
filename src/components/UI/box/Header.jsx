import React from 'react';
import classes from './Header.module.css'
import {useNavigate} from "react-router-dom";
const Header = ({name,route}) => {
    const router = useNavigate()

    return (
        <div className={classes.header}>
            <img
                src="https://psv4.userapi.com/c534536/u2000062276/docs/d29/4688a8bc88b5/file.png?extra=SUmzyXw4RvTTG7oReRG4fl5wHQHHyayUqo8QPW6DqBHF5ZOwgo9lDErX5sWTxL6stAayHUJpZhHFN9xGeefC04iG4npWzHXx07yH9inrQgRIEqa4l4ldoDoZa6_ZuQpowaqK9LRMZj0NJZGwUT18x1AUtW0"
                alt="back"
                className={classes.header__icon}
                onClick={() => router(route)}
            />
            <p className={classes.header__name}>
                {name}
            </p>
            <img
                src="https://psv4.userapi.com/c237331/u2000062960/docs/d60/61cf469c1b26/file.png?extra=DNYNIJ-hleYaj6RLY4ClirWA_mSWaTUsNaLplJnBP9X_ZUB03QcOqEQNTdMLQR4ZM1TeY79H0cz74tGW-eJdOEyVJZ450GD-HHEp4IARgFTWVAhJwOyHEpN7c-cop-4YZsz9L1PjrH8_gbgsNDXJola7B7M"
                alt="back"
                className={classes.header__icon}
            />
        </div>
    );
};

export default Header;