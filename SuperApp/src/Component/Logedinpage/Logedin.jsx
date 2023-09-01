import React from 'react'
import './Logedin.css'
import boy from '../../asset/boy.png'
import cloud from '../../asset/weatherCloud.png'
import windspeed from '../../asset/windspeed.png'
import humidityy from '../../asset/humidity.png'
import axios from 'axios'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import { useState, useEffect } from 'react'
function Logedin() {


    const currentDate = new Date();
    const month = currentDate.getMonth()
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formatedHours1 = formattedHours < 10 ? `0${formattedHours}` : formattedHours
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;



    let [textareavalue, settextareavalue] = useState();
    let [weather, setweather] = useState('sunny');

    let [pressure, setpressure] = useState('');
    let [temp, settemp] = useState('');
    let [wind, setwind] = useState('');
    let [humidity, sethumidity] = useState('');

    let SelectedCard = localStorage.getItem('SelectedCard');
    let FormaData = localStorage.getItem('formdata')
    let ParsedSelected = JSON.parse(SelectedCard);
    let ParsedFormData = JSON.parse(FormaData);

    let handlechange = (e) => {
        let textvalue = e.target.value;
        localStorage.setItem('textval', textvalue);
        let textareaValue = localStorage.getItem('textval');
        settextareavalue(textareaValue)

    }
    useEffect(() => {
        let textareaValue = localStorage.getItem('textval');
        settextareavalue(textareaValue)

    }, [])


    //     const fetchWeather=()=>{
    //         axios.get('http://api.weatherapi.com/v1/current.json?key=e9181664a8e048f7a9e154914232408&q=Kannur&aqi=yes')
    //         .then((res)=>{
    // console.log(res.data);
    // setweather(res.data.location)
    //         })
    //         .catch((err)=>
    //         {console.log(err)})
    //     }


    const fetchWeather = () => {
        fetch('http://api.weatherapi.com/v1/current.json?key=e9181664a8e048f7a9e154914232408&q=Kannur&aqi=yes')
            .then((res) => {
                return res.json()
            }).then((data) => {

                setweather(data.current.condition.text)
                settemp(data.current.temp_c)
                setpressure(data.current.pressure_mb)
                setwind(data.current.wind_kph)
                sethumidity(data.current.humidity)
            }).catch((err) => {
                console.log(err)
            })
    }


    useEffect(() => {
        // fetchWeather()
        fetchWeather()
    }, [])

    return (
        <>
            <div className='main'>

                <div className='Left'>

                    <div className='top'>

                        <div className='top-left'>
                            <div className='top-left-top'>
                                <img src={boy} alt='boy' />
                                <div className='Userinfo'>
                                    <div className='Formdatainfo'>
                                        <p style={{ color: 'white' }}>{ParsedFormData.Name}</p>
                                        <p style={{ color: 'white' }}>{ParsedFormData.Email}</p>
                                        <p style={{ color: 'white' }}>{ParsedFormData.UserName}</p>
                                    </div>

                                    <div className='SelectedCat'>
                                        {ParsedSelected.map((item) => {
                                            return <p className='item'>{item}</p>
                                        })}


                                    </div>
                                </div>
                            </div>
                            <div className='top-left-bottom'>


                                <div className='pink'><span className='time'>
                                    {day}-{month}-{year} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatedHours1}:{formattedMinutes} {period}
                                </span></div>



                                <div className='blue'>

                                    <div>
                                        <img className='cloud' src={cloud} />
                                        <span className='weather'>{weather}</span>
                                    </div>

                                    <div className='line l'></div>

                                    <div className='middleweather'>
                                        <span className='temp'>{temp}&deg;C</span>
                                    </div>
                                    <span className='pressure'>
                                        {pressure} mbar <br /> pressure
                                    </span>

                                    <div className='line r'></div>

                                    <span className='wind'>
                                        <img src={windspeed} /> &nbsp; <span className='windtext'>{wind} km/h <br /> Wind</span>
                                    </span>
                                    <span className='humidity'>
                                        <img src={humidityy} />
                                        <span className='humiditytext'> &nbsp; {humidity}% <br /> &nbsp; humidity</span>
                                    </span>

                                </div>



                            </div>

                        </div>


                        <div className='top-right'>

                            <h1 className='top-head'>All notes</h1>
                            <textarea className='textarea' rows="18" cols="38"
                                onChange={handlechange}
                                value={textareavalue}>

                            </textarea>

                        </div>


                    </div>


                    <div className='bottom'>
                   
                    </div>


                </div>
                <div className='Right'>Right</div>
            </div>
        </>
    )
}

export default Logedin