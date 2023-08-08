import '../styles/Index.css'

export default function Contact() 
{
	return  (

        <section className="contact-bloc flex flex-col justify-center w-[100%] ml-[5%] mr-[5%] mt-[10%] h-60 gap-32">

            <div className="contact-div flex flex-col ml-[5%] mr-[5%] mt-[10%]">
                <h1 className="text-purple-500 font-bold">Need a website ?</h1>
                <p className="contact-p ml-[1%] mr-[3%] mt-[2%]">
                    If you want a website like this one or better, I can code one for you! I usually only accept small projects but it depends on yours. 
                    If you're interested, contact me and we can discuss the details and determine if I can create your project.                
                </p>
            </div>

            <div className="contact-div flex flex-col ml-[5%] mr-[5%] ">
                <h1 className="text-purple-500 font-bold">Want to contact me ?</h1>
                <p className="contact-p ml-[1%] mr-[3%] mt-[2%]">
                    For a quick response, Tik Tok is the better option but I check my emails at least once a week. 
                    If you're interested in talking to me about anything, here are my links. It's also possible to click on the footer icons below.                
                </p>
                <div className="contact-links flex flex-row justify-around mt-[5%] mb-[10%] items-center">
                    <div className='flex flex-col justify-center items-center'>
                        <p className="flex text-purple-500"> Mail   </p>
                        <a href="mailto:animesaucer@hotmail.com"  className="flex"> animesaucer@hotmail.com  </a>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className='flex text-purple-500'>Tik Tok  </p>
                        <a href="https://www.tiktok.com/@animesaucer_" target='blank'  className="flex"> https://www.tiktok.com/@animesaucer_  </a>
                    </div>
                </div>

            </div>

        </section>
)
}

