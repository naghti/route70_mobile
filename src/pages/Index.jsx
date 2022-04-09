import React, {useEffect, useState} from 'react';
import IndexMap from "../components/maps/IndexMap";
import Input from "../components/UI/input/Input";
import PostService from "../API/PostService";
import Section from "../components/UI/box/Section";
import classes from './style/Index.module.css'
import Style from "../components/UI/box/Style";
const Index = () => {
    let [loading,setLoading] = useState(true)
    let [sections,setSections] = useState(false)
    useEffect(() => {
        fetchInfo()
    }, [])
    async function fetchInfo(){
        const Sections = await PostService.getSections()
        setSections(Sections)
        setLoading(false)
    }

    return (
        <div className={classes.index} >
            {
                loading ?
                    <div></div>
                    :
                    <>
                        <div className={classes.index__header}>
                            <Style style={{padding:'10px 10px 0'}}>
                                <Input/>
                            </Style>
                            <div className={classes.index__sectionsBox}>
                                {
                                    sections.map((section,index) => (
                                        <Section section={section} key={index}/>
                                    ))
                                }
                            </div>
                        </div>
                        <IndexMap/>
                    </>
            }
        </div>
    );
};

export default Index;