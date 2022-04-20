import logo from './logo.svg';
import './App.css';
import SimpleMap from "./Hi";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Index from "./pages/Index";
import Section from "./pages/Section";
import Place from "./pages/Place";
import Photos from "./pages/Photos";
import Browsing from "./pages/Browsing";
import Settings from "./pages/Settings";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {observer} from "mobx-react-lite";
import state from "./state/state";
import PlaceMap from "./components/maps/PlaceMap";
import React from "react";

let App =  observer(() =>  {
    if (window.innerWidth > 600){
        var meni_1 = 'https://accessible-city.ru';
        window.location.href = meni_1;
    }
  return (
    <div className="App" style={{display:'flex',flexWrap:'wrap',width:'100%'}}>
        <Router>
            <TransitionGroup>
                {
                    state.settings
                        ?
                            <CSSTransition
                                key={1}
                                timeout={200}
                                classNames="item"
                            >
                                <Settings/>
                            </CSSTransition>
                        :
                            <></>
                }
                {
                    state.BrowsingOpen
                        ?
                        <CSSTransition
                            key={2}
                            timeout={200}
                            classNames="item"
                        >
                            <Browsing/>
                        </CSSTransition>
                        :
                        <></>
                }{
                    state.openMarker != undefined
                        ?
                        <CSSTransition
                            key={2}
                            timeout={200}
                            classNames="item"
                        >
                            <PlaceMap
                                marker={state.openMarker}
                            />
                        </CSSTransition>
                        :
                        <></>
                }
            </TransitionGroup>
            <Routes>
                <Route path='/' element={<Index/>} />
                <Route path='/section/:section' element={<Section/>} />
                <Route path='/place/:id' element={<Place/>} />
                <Route path='/place/photos/:id' element={<Photos/>} />
            </Routes>
        </Router>
    </div>
  );
})

export default App;
