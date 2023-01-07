import React, { useEffect, useState } from "react";
import './Tempapp.css';

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Delhi");
    const [units,setUnits] = useState("metric");

    useEffect(() => {

        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=16fdd839b6cc365ac6b3398620eb8607&units=${units}`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search,units]);



    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputfield"
                        placeholder="Enter a city..."
                        onChange={(event) => { setSearch(event.target.value) }}
                    />
                </div>

                {!city ? (
                    <p>No Data Found</p>
                ) : (
                    <div className="info">
                        <h2 className="location">
                            <i className="fa-solid fa-street-view"></i>{search}
                        </h2>
                        <h1 className="temp">
                            {city.temp}°C
                        </h1>
                        <h3 className="tempmin_max">Min: 5.23C° | Max: 5.99°C</h3>

                    </div>
                    )

                }


                <div className="waves">
                    <div className="wave-one"></div>
                    <div className="wave-two"></div>
                    <div className="wave-three"></div>
                </div>
            </div>

        </>
    );
}
export default Tempapp;

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=16fdd839b6cc365ac6b3398620eb8607
// 