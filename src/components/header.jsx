import '../styles/Header.css'

import Akeno from './../assets/akeno.webp'

import {Link} from "react-router-dom"
import { FaTiktok } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'

export default function Header() 
{

	return  (

        <header className="flex flex-col w-[100%]" id="header">

                <nav className="navElement flex flex-row justify-between gap-56 w-[100%] ml-[5%] mr-[5%]">
                
                        <Link to="/" className="nav-text text-white font-bold mt-[5%] w-[30%]">PHOTOS</Link>

                        <div className='w-[30%]'>
                                <img src={Akeno} alt="Image of Akeno" className="logo w-36 h-36 mt-[3%] rounded-full object-cover"/>
                        </div>
                        
                        <Link to="/Contact" className="nav-text text-white font-bold mt-[5%] w-[30%]">CONTACT</Link>


                </nav>

                <div className='navSecondElement flex flex-row justify-around w-[100%] mt-[5%] gap-[5%]'>

                        <a href="https://www.tiktok.com/@animesaucer2" target='blank' className='tiktokLink flex flex-col'>
                                <p>Follow me on <span className=' text-purple-500'>Tik Tok</span> !</p>

                                <div className='flex flex-col justify-center items-center mt-[5%]'>
                                        <FaTiktok/>
                                </div>

                        </a>

                        <Link to="/Contact" className='flex flex-col'>
                                <p>Need a website ? I may be able to help you, details <span className=' text-purple-500'>here</span> </p>

                                <div className='flex flex-col justify-center items-center mt-[5%]'>
                                        <FaReact/>
                                </div>

                        </Link>
                </div>


        </header>
)}

