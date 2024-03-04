import React,{useState} from "react";
import { Link as Link2 } from "react-router-dom";
import * as Unicons from '@iconscout/react-unicons'
import Lightbox from 'react-18-image-lightbox';
import '../../node_modules/react-18-image-lightbox/style.css';
const images = [
    "/images/works/1.jpg",
    "/images/works/2.jpg",
    "/images/works/3.jpg",
    "/images/works/4.jpg",
    "/images/works/5.jpg",
    "/images/works/6.jpg",
    "/images/works/7.jpg",
    "/images/works/8.jpg",
    "/images/works/9.png",
];

export default function Projects(){
    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);


    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(!isOpen);
    }

    return(
        <>
           <section className="relative md:py-24 py-16" id="project">
        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">My Work & Projects</h3>

             </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <img src="/images/works/9.png"/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link2 to="https://chsvet.com/" target="_blank" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Petbooqz</Link2>
                        <span className="block text-sm text-slate-400">Full Stack Development</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        
                        <Link2 to="https://chsvet.com/" target="_blank" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilLink width={16}/></Link2>
                    </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <img src="/images/works/10.png" alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link2 to="https://membership.qest.org.au/index.php" target="_blank" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">QEST(Queensland Education Science Technicians).</Link2>
                        <span className="block text-sm text-slate-400">Laravel</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <Link2 to="https://membership.qest.org.au/index.php" target="_blank" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilLink width={16}/></Link2>
                    </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <img src="/images/works/11.png" alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link2 to="https://membership.asetnsw.org.au/"  target="_blank" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">ASET(Association of Science Education Technicians NSW)</Link2>
                        <span className="block text-sm text-slate-400">Laravel</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <Link2 to="https://membership.asetnsw.org.au/" target="_blank" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilLink width={16}/></Link2>
                    </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                    <img src="/images/works/12.png" alt=""/>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                        <Link2 to="https://jayasirescarpentry.com.au/"  target="_blank"  className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Freelance Website</Link2>
                        <span className="block text-sm text-slate-400">Wordpress</span>
                    </div>

                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <Link2 to="https://jayasirescarpentry.com.au/"  target="_blank"  className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilLink width={16}/></Link2>
                    </div>
                </div>
                
                {/*<div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">*/}
                {/*    <img src="/images/works/5.jpg" alt=""/>*/}
                {/*    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>*/}
                {/*    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">*/}
                {/*        <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Motos Theme</Link2>*/}
                {/*        <span className="block text-sm text-slate-400">Landing</span>*/}
                {/*    </div>*/}

                {/*    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">*/}
                {/*    <Link2 to="#" onClick={() => handleCLick(3)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilLink width={16}/></Link2>*/}
                {/*    </div>*/}
                {/*</div>*/}
                
                {/*<div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">*/}
                {/*    <img src="/images/works/6.jpg" alt=""/>*/}
                {/*    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>*/}
                {/*    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">*/}
                {/*        <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Giglink Theme</Link2>*/}
                {/*        <span className="block text-sm text-slate-400">Digital</span>*/}
                {/*    </div>*/}

                {/*    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">*/}
                {/*    <Link2 to="#" onClick={() => handleCLick(5)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilLink width={16}/></Link2>*/}
                {/*    </div>*/}
                {/*</div>*/}
                
                {/*<div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">*/}
                {/*    <img src="/images/works/7.jpg" alt=""/>*/}
                {/*    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>*/}
                {/*    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">*/}
                {/*        <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Upwind Theme</Link2>*/}
                {/*        <span className="block text-sm text-slate-400">Landing</span>*/}
                {/*    </div>*/}

                {/*    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">*/}
                {/*    <Link2 to="#" onClick={() => handleCLick(6)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilLink width={16}/></Link2>*/}
                {/*    </div>*/}
                {/*</div>*/}
                
                {/*<div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">*/}
                {/*    <img src="/images/works/8.jpg" alt=""/>*/}
                {/*    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>*/}
                {/*    <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">*/}
                {/*        <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">Techwind Theme</Link2>*/}
                {/*        <span className="block text-sm text-slate-400">Multipurpose</span>*/}
                {/*    </div>*/}

                {/*    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">*/}
                {/*    <Link2 to="#" onClick={() => handleCLick(7)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilLink width={16}/></Link2>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    </section>
        {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setOpen(false)}
                onMovePrevRequest={() =>
                setActiveIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                setActiveIndex((photoIndex + 1) % images.length)
                }
            />
        )}

        </>
     
    )
}