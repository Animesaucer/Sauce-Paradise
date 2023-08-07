import '../styles/Accueil.css'

import {imagesList} from './../data/imagesList'
import {Link} from "react-router-dom"
import {useState} from "react"
import {Route, useNavigate} from 'react-router-dom';


export default function datalist() 
{

    var [displayedImages, setDisplayedProjects] = useState(imagesList);

    const animeChange = (anime) => {

        anime = anime.target.value; 

        setDisplayedProjects(imagesList.filter( pic =>  pic.anime.includes(anime.toLowerCase()) === true  ))
        }

    const characterChange = (character) => {

        character = character.target.value;

        setDisplayedProjects(imagesList.filter( pic =>  pic.character.includes(character.toLowerCase()) === true  ))
        }


        const navigate = useNavigate();

        const redirectAnimePic = (allAnime) => 
        {
            var animeId = allAnime.target.id; 
            var path = "/Details/" + animeId
            navigate(path)

            const element = document.getElementById('header');            
            element.scrollIntoView({ behavior: 'smooth' });
        }


	return  (
        <div className='flex flex-col'>
            <div className='filterBar flex flex-row justify-between w-[80%] mr-[10%] ml-[10%]'>
                <div>
                    <div className="filterTitle flex flex-col items-center">
                        <label htmlFor="anime-choice" className='mb-5'>Filter by anime / Manwha</label>
                        <input list="anime-select" id="anime-choice" name="anime-choice" className='text-black rounded-full text-center' onChange={animeChange}/>
                    </div>

                    <datalist id="anime-select">
                        <option value="H-Manga"></option>
                        <option value="Hanime"></option>
                        <option value="One Piece"></option>
                        <option value="Naruto"></option>
                        <option value="Chainsaw-man"></option>
                        <option value="One punch man"></option>
                        <option value="Bleach"></option>
                        <option value="Black clover"></option>
                    </datalist>
                </div>

                <div>
                    <div className="filterTitle flex flex-col items-center">
                        <label htmlFor="character-choice" className='mb-5'>Filter by character</label>
                        <input list="character-select" id="character-choice" name="character-choice" className='text-black  rounded-full' onChange={characterChange}/>

                    </div>

                    <datalist id="character-select">
                        <option value="Nami"></option>
                        <option value="Robin"></option>
                        <option value="Hancock"></option>
                        <option value="Makima"></option>
                        <option value="Fubuki"></option>
                    </datalist>
                </div>
            </div>

            <div className="flex flex-row justify-center gap-24 flex-wrap w-[80%] mr-[10%] ml-[10%] mt-[5%] mb-[10%]">
                {displayedImages.map((picture) => 
                    (
                        <div className='picdic w-[19%] h-60' key={picture.id}>
                                <img onClick={redirectAnimePic} id={picture.id} src={picture.image} alt={picture.title} className='pic cursor-pointer h-72 w-[100%] rounded-xl object-cover' loading='lazy'></img>
                        </div>
                    ))
                }
            </div>

        </div>
)
}

