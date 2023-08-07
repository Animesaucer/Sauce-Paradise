import { useParams } from "react-router-dom"
import {imagesList} from './../data/imagesList'
import {Link} from "react-router-dom"
import {useState} from "react"
import swal from 'sweetalert';

import {Route, useNavigate} from 'react-router-dom';

import '../styles/Accueil.css'

export default function Details()
{

        var params = useParams()
        const listImages = imagesList;

        var found = listImages.find(element => element.id === params.id)
        console.log(found)

        const navigate = useNavigate();

        if (found === undefined)
        {
                console.log("No images found");
                swal
                (
                        {
                                title: "Error 404",
                                text: "Bad ID or page unavailable",
                                button: "Ok",
                                className: "alert",
                        }
                );

                var animeId = "img1";
                var path = "/Details/" + animeId
                return navigate(path)

        }

        var filteredImages = listImages.filter(picture => picture.id === params.id)
        var authorLength = filteredImages[0].author.length
        var anime = filteredImages[0].anime
        var picId = filteredImages[0].id
        var characterName = filteredImages[0].character

        var isAnH = false;
        var autorKnown = true;



        const redirectAnimePic = (allAnime) =>
        {
            var animeId = allAnime.target.id;
            var path = "/Details/" + animeId
            navigate(path)

            const element = document.getElementById('header');
            element.scrollIntoView({ behavior: 'smooth' });
        }



        if ( authorLength < 2 && anime != 'Hanime' && anime != 'H-Manga')
        {
            autorKnown = false;
        }

        if ( anime === 'Hanime' || anime === 'H-Manga')
        {
            isAnH = true;
        }


        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;

            // While there remain elements to shuffle.
            while (currentIndex != 0) {

                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }

            return array;
            }

            var randomAnime = listImages.filter(picture => picture.anime === anime && picture.character !== characterName);

            shuffle(randomAnime);
            randomAnime.length = Math.min(randomAnime.length, 4)

            var otherAnime = true;
            if (randomAnime.length === 0)
            {
                otherAnime = false;
            }


            var randomCharacter = listImages.filter(picture => picture.character === characterName && picture.id != picId)

            shuffle(randomCharacter);
            randomCharacter.length = Math.min(randomCharacter.length, 4)

            var otherCharacter = true;
            if (randomCharacter.length === 0)
            {
                otherCharacter = false;
            }

            var randomAllAnime = listImages.filter(picture => picture.id != picId)

            shuffle(randomAllAnime);
            randomAllAnime.length = Math.min(randomAllAnime.length, 4)

        return <div className='flex flex-col justify-center  w-[100%] mt-[5%]' id='imageDetails'>

                    {listImages.filter(picture => picture.id === params.id).map((filteredPic,index) =>

                    <div key={index} className="detailsBloc flex flex-col justify-center items-center w-[100%]">
                        <div className="detailsLinkPic flex flex-row justify-around items-center w-[100%] ml-[5%] mr-[5%]">

                        { authorLength > 1 &&
                            <div className="detailsDiv w-[30%] ml-[5%]">
                                <p>Creator of this picture  <br/><span className="text-purple-500 font-bold">{filteredPic.author}</span></p><br/>
                                <Link to={filteredPic.authorlink} target="blank" className="flw-text  mt-[5%]">Link to the creator of this picture <br/><span className="flw-text text-purple-500 font-bold">Follow and support him click here</span></Link>
                            </div>
                        }
                        { autorKnown  === false &&
                            <div className="detailsDiv w-[30%] ml-[5%] mr-[5%]">
                                <Link to="https://www.tiktok.com/@animesaucer_" target="blank" className="flw-text  mt-[5%]">Creator unknown, if you know who made this image contact me <span className="flw-text text-purple-500 font-bold">here</span> to credit him</Link>
                            </div>
                        }
                        { isAnH  === true &&
                            <div className="detailsDiv w-[30%] ml-[5%]">
                                <Link to={filteredPic.authorlink} target="blank" className="flw-text  mt-[5%]">Link to the hanime/manga <br/><span className="flw-text text-purple-500 font-bold">Click here</span></Link>
                            </div>
                        }
                            <div className='picdic2 flex justify-center items-center w-[30%] '>
                                <img src={filteredPic.image} alt={filteredPic.title} className='pic2  w-[100%] rounded-xl object-cover' loading='lazy'></img>
                            </div>

                            <div className="titleAnime flex flex-col w-[30%] ml-[5%]">
                                <h2 className="">
                                Title<br/><span className="text-purple-500 font-bold">{filteredPic.title}</span>
                                </h2><br/>
                                <p className="">
                                Manga / Anime <br/><span className="text-purple-500 font-bold">{filteredPic.anime}</span>
                                </p>
                            </div>
                        </div>
                            <a target="blank" className="mt-[3%]" href={filteredPic.image} download={filteredPic.author + filteredPic.title}>
                                <button className="btn mt-[3%] bg-purple-500 hover:bg-purple-700  font-bold py-2 px-4 rounded inline-flex items-center">
                                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                    <span>Download</span>
                                </button>
                            </a>
                    </div>

                    )
                    }

                { randomCharacter.length > 0  &&
                    <h2 className="font-bold ml-[5%]"> More pictures of <span className="text-purple-500">{characterName}</span></h2>
                }
                <div className={otherCharacter ? "flex flex-row justify-center gap-24 flex-wrap w-[80%] mr-[10%] ml-[10%] mt-[5%] mb-[10%]" : "hidden flex-row justify-center gap-24 flex-wrap w-[80%] mr-[10%] ml-[10%] mt-[5%] mb-[10%]"}>
                {randomCharacter.map((filteredPic) =>
                    (
                        <div className='picdic w-[19%] h-60' key={filteredPic.id} onClick={redirectAnimePic}>
                                <img id={filteredPic.id} src={filteredPic.image} alt={filteredPic.title} className='pic cursor-pointer h-72 w-[100%] rounded-xl object-cover' loading='lazy'></img>
                        </div>
                    ))
                }
                </div>

                { randomAnime.length > 0  &&
                    <h2 className="font-bold ml-[5%]"> More pictures from <span className="text-purple-500">{anime}</span></h2>
                }
                <div className={otherAnime ? "flex flex-row cursor-pointer justify-center gap-24 flex-wrap w-[80%] mr-[10%] ml-[10%] mt-[5%] mb-[10%]" : "hidden cursor-pointer flex-row justify-center gap-24 flex-wrap w-[80%] mr-[10%] ml-[10%] mt-[5%] mb-[10%]"}>
                {randomAnime.map((filteredPic) =>
                    (
                        <div className='picdic w-[19%] h-60' key={filteredPic.id} onClick={redirectAnimePic}>
                                <img id={filteredPic.id} src={filteredPic.image} alt={filteredPic.title} className='pic cursor-pointer h-72 w-[100%] rounded-xl object-cover' loading='lazy'></img>
                        </div>
                    ))
                }
                </div>

                <h2 className="font-bold ml-[5%]"> More random <span className="text-purple-500">pictures</span></h2>
                <div className="flex flex-row justify-center gap-24 flex-wrap w-[80%] mr-[10%] ml-[10%] mt-[5%] mb-[10%]">
                {randomAllAnime.map((filteredPic) =>
                    (
                        <div className='picdic w-[19%] h-60' key={filteredPic.id} onClick={redirectAnimePic}>
                                <img id={filteredPic.id} src={filteredPic.image} alt={filteredPic.title} className='pic cursor-pointer h-72 w-[100%] rounded-xl object-cover' loading='lazy'></img>
                        </div>
                    ))
                }
                </div>

                </div>
}

