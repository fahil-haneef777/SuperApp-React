import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import './Categorypage.css'
import CardContainer from '../CardContainer/CardContainer'
import MovieBox from '../MovieBox/MovieBox'
import Selectedmovie from '../Selectedmovie/Selectedmovie'
import Action from '../../asset/Action.png'
import Drama from '../../asset/Drama.png'
import Romance from '../../asset/Romance.png'
import Thriller from '../../asset/Thriller.png'
import Western from '../../asset/Western.png'
import Horror from '../../asset/Horror.png'
import Fantasy from '../../asset/Fantasy.png'
import Music from '../../asset/Music.png'
import Fiction from '../../asset/Fiction.png'
function Categorypage() {

    const navigate=useNavigate();

    const [selectedCards, setSelectedCards] = useState([]);
let[error,seterror]=useState('')

    const handleCardClick = (title) => {
        if (selectedCards.includes(title)) {
            setSelectedCards(selectedCards.filter((card) => card !== title));
        
        } else {
            setSelectedCards([...selectedCards, title]);
          
        }if(selectedCards.length<3){
            seterror('Minimum 3 category required')
        } else if(selectedCards.length>2){
        seterror(' ')
        }
    };

    const handleCrossClick=(title)=>{
        setSelectedCards(selectedCards.filter((card)=>card!==title))
    }


    let handlesubmit=()=>{
if(selectedCards.length>=3){
    localStorage.setItem('SelectedCard',JSON.stringify(selectedCards));
    navigate('/Logedin')
}
    }


    return (
        <div className='main'>


            <div className='left'>
                <h1>SuperApp</h1>

                <h1>Choose your <br />
                    entertainment<br />
                    category

                </h1>




            </div>

            <div className='SelectedM'>
                {selectedCards.map((item) => {
                    return <Selectedmovie
                    onClick={() => handleCrossClick(item)}
                        title={item} />

                })}

            </div>

            <p className='warning' style={{color:'red'}}>{error}</p>

            <div className='right'>
                <CardContainer>


                    <MovieBox
                        isSelected={selectedCards.includes("Action")}
                        onClick={() => handleCardClick("Action")}
                        title="Action"
                        image={Action}
                        color="#FF5209"
                    />

                    <MovieBox
                        isSelected={selectedCards.includes("Drama")}
                        onClick={() => handleCardClick("Drama")}
                        title="Drama"
                        image={Drama}
                        color="#D7A4FF"
                    />
                    <MovieBox
                        isSelected={selectedCards.includes("Romance")}
                        onClick={() => handleCardClick("Romance")}
                        title="Romance"
                        image={Romance}
                        color="#D7A4FF"
                    />
                    <MovieBox
                        isSelected={selectedCards.includes("Thriller")}
                        onClick={() => handleCardClick("Thriller")}
                        title="Thriller"
                        image={Thriller}
                        color="#84C2FF"
                    />
                    <MovieBox
                        isSelected={selectedCards.includes("Western")}
                        onClick={() => handleCardClick("Western")}
                        title="Western"
                        image={Western}
                        color="#902500"
                    />
                    <MovieBox
                        isSelected={selectedCards.includes("Fantasy")}
                        onClick={() => handleCardClick("Fantasy")}
                        title="Fantasy"
                        image={Fantasy}
                        color="#FF4ADE"
                    />
                    <MovieBox
                        isSelected={selectedCards.includes("Music")}
                        onClick={() => handleCardClick("Music")}
                        title="Music"
                        image={Music}
                        color="#E61E32"
                    />
                    <MovieBox
                        isSelected={selectedCards.includes("Horror")}
                        onClick={() => handleCardClick("Horror")}
                        title="Horror"
                        image={Horror}
                        color="#7358FF"
                    />
                    <MovieBox
                        isSelected={selectedCards.includes("Fiction")}
                        onClick={() => handleCardClick("Fiction")}
                        title="Fiction"
                        image={Fiction}
                        color="#6CD061"
                    />






                </CardContainer>

                <button className='Next-button' type='submit' onClick={handlesubmit}>Next page</button>

            </div>


        </div>
    )
}

export default Categorypage