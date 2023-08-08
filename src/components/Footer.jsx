import '../styles/Footer.css'
import { FaTiktok } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'

export default function Footer() 
{
	return  (

        <footer className="footer flex flex-row justify-center w-[100%] h-60 gap-32 items-center mt-[10%]">

                <a href="https://www.tiktok.com/@animesaucer_" target='blank' className='flex flex-col'>
                        <div className="flex flex-col items-center">
                                <p>Tik Tok</p>
                                <FaTiktok className='text-purple-500 h-7'/>
                        </div>
                </a>

                <a href="mailto:animesaucer@hotmail.com" title='animesaucer@hotmail.com' target='blank' className='flex flex-col'>
                        <div className="flex flex-col items-center">
                                <p>Mail</p>
                                <FaMailBulk className='text-purple-500 h-7'/>
                        </div>
                </a>

        </footer>
)
}

