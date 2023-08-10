import '../styles/index.css'

import {imagesList} from './../data/imagesList'
import {Link} from "react-router-dom"
import {useState} from "react"
import {Route, useNavigate} from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FaRandom } from 'react-icons/fa';

export default function datalist() 
{
    const listImgs = imagesList.sort((a,b)=>b.number - a.number);
    var [displayedImages, setDisplayedProjects] = useState(listImgs);
    var [filterActive, setfilterActive] = useState(false);
    // var [isRandomClick, setisRandomClick] = useState(false);

    function shuffle(array) 
    {
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

    const animeChange = (anime) => {

    anime = anime.target.value; 
    var filteredAnime = imagesList.reverse().filter( pic =>  pic.anime.includes(anime.toLowerCase()) === true  );
    setDisplayedProjects(filteredAnime.reverse());
    setfilterActive(true);
    }

    const characterChange = (character) => {

    character = character.target.value;
    var filteredCharacter = imagesList.reverse().filter( pic => pic.character.includes(character.toLowerCase()) === true  );
    setDisplayedProjects(filteredCharacter.reverse());
    setfilterActive(true);
    }


    // var getRandomPics = () => {
        
    //     shuffle(displayedImages);
    //     setDisplayedProjects(displayedImages);

    //     if (isRandomClick === false) 
    //     {
    //         setisRandomClick(true);
    //     }
    //     else if (isRandomClick === true)
    //     {
    //         setisRandomClick(false);
    //     }
    //     setfilterActive(true);
    // }

    const navigate = useNavigate();

    const redirectAnimePic = (allAnime) => 
    {
        var animeId = allAnime.target.id; 
        var path = "/Details/" + animeId;
        navigate(path);

        const element = document.getElementById('header');            
        element.scrollIntoView({ behavior: 'smooth' });
    }


     /* Pagination */

    const [pageNumber, setPageNumber] = useState(0);
    const imagesPerPage = 8;
    const pagesVisited = pageNumber * imagesPerPage;

    const displayPictures = displayedImages.slice(pagesVisited, pagesVisited + imagesPerPage).map((picture) => {
        return(
            <div className='picdic w-[16%] h-60' key={picture.id}>
                <img onClick={redirectAnimePic} id={picture.id} src={picture.image} alt={picture.title} className='pic cursor-pointer h-72 w-[100%] rounded-xl object-cover' loading='lazy'></img>
            </div>
        );
    });

    const pageCount = Math.ceil(imagesList.length / imagesPerPage);

    const changePage = ({selected}) =>{
        setPageNumber(selected);
        const element = document.getElementById('displayedPics');            
        element.scrollIntoView({ behavior: 'smooth' });
    }

    /* Pagination */

	return  (
        <main className='flex flex-col'>
            <section className='filterBar flex flex-row justify-between w-[80%] mr-[10%] ml-[10%]'>
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
                        <option value="spy family"></option>
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
                        <option value="Yamato"></option>
                        <option value="Hancock"></option>
                        <option value="Makima"></option>
                        <option value="Fubuki"></option>
                        <option value="Yor"></option>
                    </datalist>
                </div>
            </section>

            {/* <div className="flex justify-center items-center">
                <button onClick={getRandomPics} className="btn mt-[3%] bg-purple-500 hover:bg-purple-700  font-bold py-2 px-4 rounded-xl inline-flex items-center w-[15%] ">
                    <FaRandom/><span className='text-center ml-[3%]'>Randomizer button</span>
                </button>
            </div> */}


            <section className="flex flex-row justify-center gap-24 flex-wrap w-[80%] mr-[10%] ml-[10%] mt-[5%] mb-[10%]" id="displayedPics">
                {displayPictures}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}  
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBtns'}
                    previousLinkClassName={'previousBtn'}
                    nextLinkClassName={'nextBtn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                    className={filterActive ? 'hidden' : ''}
                />
            </section>

        </main>
)
}

