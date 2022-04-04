import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { useStore } from './../../hooks';
import { actions } from './../../store';
import { dateFormat, dayFormat, rounding } from '../../mixins';

function Navbar() {

    const [state, dispatch] = useStore();


    const { name } = state?.day;
    const { country } = state?.day.sys;
    const { temp } = state?.day?.main;
    const { description, icon } = state?.day?.weather[0];


    const [active, setActive] = useState(1);

    const handlerClickNavbar = (value) => {
        setActive(value);
        // picked(value);
    }

    return (
        <div className="side-nav">
            <div className="title">
                <div>
                    Wea<span>ther</span>
                </div>
            </div>
            <div className="side-nav__devider"></div>
            <ul>
                <li>
                    <Link to='/'
                        className={`side-menu ${active === 1 ? "side-menu--active" : ""}`}
                        onClick={() => handlerClickNavbar(1)}
                    >
                        <div className="side-menu__title">
                            Today
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='week'
                        className={`side-menu ${active === 2 ? "side-menu--active" : ""}`}
                        onClick={() => handlerClickNavbar(2)}
                    >
                        <div className="side-menu__title">Week</div>
                    </Link>
                </li>
                <li>
                    <Link to='hour'
                        className={`side-menu ${active === 3 ? "side-menu--active" : ""}`}
                        onClick={() => handlerClickNavbar(3)}
                    >
                        <div className="side-menu__title">Hour</div>
                    </Link>
                </li>
                <li className="sidebar-weather">
                    <div className="">
                        <div className="sidebar-weather_content">
                            <div className="weather-side">
                                <div className="weather-gradient"></div>
                                <div className="date-container">
                                    <h2 className="date-dayname">{dateFormat(state?.day.dt)}</h2>
                                    <span className="date-day">{dayFormat(state?.day.dt)}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="feather feather-map-pin location-icon"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span className="location">{name}, {country}</span>
                                </div>
                                <div className="weather-container">
                                    <img
                                        src={`http://openweathermap.org/img/wn/${icon}.png`}
                                        alt="icon"
                                        className="weather-img"
                                    />
                                    <h1 className="weather-temp">{rounding(temp)}°C</h1>
                                    <h3 className="weather-desc">{description}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-weather_footer"></div>
                    </div>
                </li>
            </ul>
        </div>
    );
}


export default Navbar;
