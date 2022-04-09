import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import PostService from "../API/PostService";
import classes from './style/Place.module.css'
import Header from "../components/UI/box/Header";
const Place = () => {
    const params = useParams()
    const router = useNavigate()

    let [loading,setLoading] = useState(true)
    let [sectionMarkers,setSectionMarkers] = useState()
    useEffect(() => {
        fetchInfo()
    }, [])
    async function fetchInfo(){
        const Marker = await PostService.getMarker(params.id)
        setSectionMarkers(Marker)
        console.log(Marker)
        setLoading(!loading)
    }

    return (
        <div className={classes.place}>
        {
            loading ?
                <div></div>
            :
            <>
                <Header
                    name={sectionMarkers['firstBlock'][0]}
                    route={-1}
                />
                <div className={classes.place__photos}>
                    {
                        sectionMarkers['photo'].map(item => (
                            <img
                                src={item}
                                alt="photo"
                                className={classes.place__photoItem}
                            />
                        ))
                    }
                </div>
                <div className={
                    classes.place__secondBlock
                    +' ' +
                    classes.place__border
                }
                style={{padding: '8px 24px 16px'}}>
                    <h5 className={classes.place__name} style={{color:'black',marginBottom:5}}>
                        {sectionMarkers['firstBlock'][0]}
                    </h5>
                    <p className={classes.place__grayText}>
                        {sectionMarkers['firstBlock'][1]}
                    </p>
                </div>
                <div className={
                    classes.place__dopBlock
                    +' ' +
                    classes.place__border
                }>
                    <div className={classes.place__BlueBox}>
                        <div
                            className={classes.place__Blueblock}
                        >
                            <img
                                src="https://www.gstatic.com/images/icons/material/system_gm/2x/place_gm_blue_24dp.png"
                                alt="телефон"
                                style={{width:18}}
                            />
                        </div>
                        <p
                            className={classes.place__BlueText}
                        >окрыть на карте</p>
                    </div>
                    {
                        sectionMarkers['dopBlock'] == null
                        ?
                            <></>
                        :
                            <div className={classes.place__BlueBox}>
                                <a href={"tel:+" + sectionMarkers['dopBlock']}>
                                    <div
                                        className={classes.place__Blueblock}
                                    >
                                        <img
                                            src="https://psv4.userapi.com/c235131/u2000062290/docs/d48/151e9c99bb36/file.png?extra=BGU7HRhcgA5dvAn8Rvro4FDXCGi1sELPw-47Pa-BqAMNFW9zMyctVEy-myywweL2j9YQD-f-WffGvYhe-8nw_3x9PqaOitSO7ykC6LT8MZHHFY07jeX00Kx2T22shE1zG5x8A-iZ-Tkzto6wpoVEwm-_rbA"
                                            alt="телефон"
                                            style={{width:18}}
                                        />
                                    </div>
                                    <p
                                        className={classes.place__BlueText}
                                    >вызов</p>
                                </a>
                            </div>
                    }
                    <div className={classes.place__BlueBox}>
                        <div
                            className={classes.place__Blueblock}
                        >
                            <img
                                src="https://sun9-41.userapi.com/impf/bYw4wKDoW0UTiQKo8hEIWshfNPr36AHjcL3pSg/nbVgSirRyTg.jpg?size=36x36&quality=96&sign=7bced6c1a28e5f2f0fc4ac807dbf3f8b&type=album"
                                alt="телефон"
                                style={{width:18}}
                            />
                        </div>
                        <p
                            className={classes.place__BlueText}
                        >добавить фото</p>
                    </div>
                    <div className={classes.place__BlueBox}>
                        <div
                            className={classes.place__Blueblock}
                        >
                            <img
                                src="https://psv4.userapi.com/c240331/u2000062333/docs/d8/927a6a6dab9d/file.png?extra=vVmczRxqbpor5CqiSCDHHv83QlTcKhkGKY3Z9aJ0Wg_WzoNc8E58f143S-umQmgbT6CsWtChbDWMP8APsh2QX3uYDuK68syAXo24r0P3tHSpPmIM5bAaUDnHYRmhCxXBXhbhVBjz3YXySmS8OuTv49XMGhI"
                                alt="телефон"
                                style={{width:18}}
                            />
                        </div>
                        <p
                            className={classes.place__BlueText}
                        >поделиться</p>
                    </div>

                </div>


                <div className={
                    classes.place__secondBlock
                    +' ' +
                    classes.place__border
                }>
                    {
                        sectionMarkers['secondBlock'].map(item => (
                            <div className={classes.place__secondItem}>
                                <img
                                    src={item[0]}
                                    alt="icon"
                                    className={classes.place__blueIcon}
                                />
                                <p
                                    className={classes.place__secondText}
                                >
                                    {item[1]}
                                </p>
                            </div>
                        ))
                    }
                </div>
                {/*TODO третий блок*/}
                <div className={
                    classes.place__secondBlock
                    +' ' +
                    classes.place__border
                }>
                    {
                        sectionMarkers['thirdBlock'].map(item => (
                            <div className={classes.place__thirdItem}>
                                <img
                                    src={item[0]}
                                    alt="icon"
                                    className={classes.place__blueIcon}
                                />
                                <p
                                    className={classes.place__secondText}
                                >
                                    {item[1]}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className={
                    classes.place__photoBlock
                    +' ' +
                    classes.place__border
                }>
                    <p className={classes.place__name} style={{color:'black',marginBottom:5}}>
                        Фото
                    </p>
                    <div className={
                        classes.place__photoBlockItem
                    }
                    onClick={() => router(`/place/photos/${sectionMarkers['id']}`)}
                    >
                        <img src={sectionMarkers['photo'][0]} alt="фото" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'7px',filter: 'brightness(0.7)'}}/>
                        <h5
                            className={
                                classes.place__photoText
                            }
                        >
                            {sectionMarkers['photo'].length + ' фото'}
                        </h5>

                    </div>
                </div>
                {/*TODO четвертый блок*/}
                <div className={
                    classes.place__secondBlock
                    +' ' +
                    classes.place__border
                }>
                    {
                        sectionMarkers['fourthBlock'].map(item => (
                            <div className={classes.place__thirdItem}>
                                <p
                                    className={classes.place__secondText}
                                >
                                    {
                                        item[0]
                                        + " - " +
                                        item[1]
                                        +
                                        item[2]
                                    }
                                </p>
                            </div>
                        ))
                    }
                </div>
            </>
        }
        </div>
    );
};

export default Place;