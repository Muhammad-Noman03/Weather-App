import React, { useEffect, useState } from 'react'
import { Search } from '../search/index.jsx'

export const Weather = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData(param) {
        setLoading(true)
        try {
            const response = await
                fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${param}&appid=25fec5b22926669ab29bf98048142b98`);

            const data = await response.json();
            console.log(data)

            if (data) {
                setWeatherData(data);
                setLoading(false);
            }

        } catch (e) {
            setLoading(false);
            console.log(e)
        }
    }

    async function handleSearch() {
        fetchWeatherData(search)
    }

    function getCurrentdate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }


    useEffect(() => {
        fetchWeatherData("Karachi");
    }, []);

    console.log(loading);

    return (
        <div>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {
                loading ? (
                    <div className='text-lg font-extrabold text-black'>Loading....</div>) : (
                    <div>
                        <div className='mb-2'>
                            <h2 className='font-bold font-sans'>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
                        </div>
                        <div className='font-extrabold italic '>
                            <span>{getCurrentdate()}</span>
                        </div>
                        <div className='text-[64px] text-black font-bold text-center'>{weatherData?.main?.temp}&deg;C.</div>
                        <p className='text-black text-2xl font-bold mt-0 mb-5'>{weatherData && weatherData.weather[0] ? weatherData.weather[0].description : ''}</p>
                        <div>
                            <div className='flex justify-evenly items-center mt-5 p-[0px 20px] text-2xl font-bold text-center'>
                                <div>
                                    <p>{weatherData?.wind?.speed}km/h</p>
                                    <p>Wind Speed</p>
                                </div>
                                <div>
                                    <p>{weatherData?.main?.humidity}%</p>
                                    <p>Humidity</p>
                                </div>
                                <div>
                                    <p>{weatherData?.main?.feels_like}&deg;C.</p>
                                    <p>Feels Like</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}
