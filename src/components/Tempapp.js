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

                {!city ? (
                    <>
                    <p><img src="404.png" width="310px" /> </p>
                    <p>Oops! Invalid  location </p>
                    </>
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
                                    <span>{city.humidity}</span>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className="wind">
                                <img src="windy.svg" alt="" />
                                <div>
                                    <span>{city.wind}</span>
                                    <p>Wind Speed</p>
                                </div>
                            </div>

                            <div className="temp_min">
                                <i class="fa-solid fa-temperature-quarter"></i>
                                <div>
                                    <span>{city.temp_min} ℃ </span>
                                    <p>Min Temp</p>
                                </div>
                            </div>
                            <div className="temp_max">
                                <i class="fa-solid fa-temperature-three-quarters"></i>
                                <div>
                                    <span>{city.temp_max}℃</span>
                                    <p>Max Temp</p>
                                </div>
                            </div>
                            <div className="visibility">
                                <img src="visibility.svg" alt="" />
                                <div>

                                    <span>{city.visibility}</span>
                                    <p>Visibility</p>
                                </div>
                            </div>
                            <div className="pressure">
                                <img src="visibility.svg" alt="" />
                                <div>
                                    <span>{city.pressure}</span>
                                    <p>Pressure</p>
                                </div>
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

