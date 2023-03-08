import React, { useEffect, useState } from "react";
import './Tempapp.css';

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Delhi");
    const [units, setUnits] = useState("metric");

    useEffect(() => {

        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=16fdd839b6cc365ac6b3398620eb8607&units=${units}`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search, units]);



    return (
        <>
            <div className="box">
                <div className="inputData">
                    <i className="fa-solid fa-location-dot"></i>
                    <input
                        type="search"
                        className="inputfield"
                        placeholder="Enter a city..."
                        onChange={(event) => { setSearch(event.target.value) }}
                    />
                    <i className="search" class="fa-solid fa-magnifying-glass"></i>
                </div>
                {/* <div class="not-found">
                    <img src="images/404.png" />
                        <p>Oops! Invalid location :/</p>
                </div> */}

                {!city ? (
                    <p>No Data Found</p>
                ) : (
                    <>
                        <div className="info">
                            <img src="sunshine.gif" alt="" />
                            <h1 className="temp">
                                {city.temp}<sup>°C</sup>
                            </h1>
                            <h3><span>scattered Clouds</span></h3>

                        </div>
                        <div className="tabs">
                            <div className="humidity">
                                <img src="humidity.svg" alt="" />
                                <div>
                                    <span>12</span>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className="wind">
                                <img src="windy.svg" alt="" />
                                <div>
                                    <span>55</span>
                                    <p>Wind Speed</p>
                                </div>
                            </div>
                            <div className="tabs2">
                            {/* <div className="div1">bb</div> */}
                            {/* <div className="div2">22</div> */}
                            </div>
                        </div>
                    </>
                )

                }
            </div>

        </>
    );
}
export default Tempapp;

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=16fdd839b6cc365ac6b3398620eb8607
// 