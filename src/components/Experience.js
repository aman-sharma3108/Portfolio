import React from "react";
import {Link} from "react-router-dom";
import Pdf from "../Swinburne.zip";
export default function Experience(){
    return(
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="experience">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Work Experience and Education</h3>

                    <p className="text-slate-400 max-w-xl mx-auto text-[15px]">I worked at the same company with a promotion in roles and responsibilities. </p>
                </div>

                <div className="grid grid-cols-1 mt-8">
                    <div className="relative after:content-[''] after:absolute after:top-0 ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">
                        <div className="ms-8 md:ms-0 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="text-start md:ms-8 relative md:order-2">
                                    <img src="/images/logos/aws.jpg" className=" md:me-auto" alt=""/>
                                    <h5 className="my-2 font-semibold text-lg">Amazon Web Services</h5>
                                    <h6 className="text-sm mb-0">31 Jan 2024</h6>
                                </div>

                                <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                                    <h5 className="title mb-2 font-semibold">AWS Certified Cloud Practitioner</h5>
                                    <Link target="_blank" to='https://www.credly.com/badges/98b0d933-2d97-4369-bf84-b56bd19abdf9/public_url' className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md ms-1" >Verify</Link>

                                </div>
                            </div>
                        </div>

                        <div className="mt-12 ms-7 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="md:text-end md:me-8 relative">
                                    <img src="/images/logos/cider1.png" className=" md:ms-auto" alt=""/>
                                    <h5 className="my-2 font-semibold text-lg"><Link to='https://ciderhouse.com.au/' target="_blank"> Cider House ICT</Link></h5>
                                    <h6 className="text-sm mb-0">2023-Present</h6>
                                </div>

                                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                                    <h5 className="title mb-1 font-semibold">Developer</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-[15px]">Continued my journey post-internship, primarily focusing on collaborative integration projects with key partners like MYOB and XERO. Developed and maintained an accounting API to synchronize invoices and payments seamlessly between our software and the accounting platforms. Additionally, spearheaded integration efforts with payment providers such as MX51 and Tyro. Concurrently, maintained and managed two Laravel-based websites, <Link to='https://membership.qest.org.au/index.php' target='_blank'>QEST</Link> and <Link to='https://membership.asetnsw.org.au/' target='_blank'>ASET</Link> membership platforms, ensuring their ongoing functionality and optimization.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="text-start md:ms-8 relative md:order-2">
                                    <img src="/images/logos/swin.png" className=" md:me-auto" alt=""/>
                                    <h5 className="my-2 font-semibold text-lg">Swinburne University Of Technology</h5>
                                    <h6 className="text-sm mb-0">March 2019 - Nov 2023</h6>
                                </div>

                                <div className="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                                    <h5 className="title mb-1 font-semibold">Bachelor of Engineering(Honours)(Professional)</h5>
                                    <p className="mt-3 mb-2 text-slate-400 text-[15px]">Majored in Software with a professional internship of 1 year at Cider House ICT Pty Ltd.
                                    </p>
                                    <Link target="_blank" to={Pdf} className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md ms-1" >Transcript and Relevant Documents.</Link>

                                </div>
                            </div>
                        </div>

                        <div className="mt-12 ms-7 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                            <div className="grid md:grid-cols-2">
                                <div className="md:text-end md:me-8 relative">
                                    <img src="/images/logos/cider1.png" className=" md:ms-auto" alt=""/>
                                    <h5 className="my-2 font-semibold text-lg"><Link to='https://ciderhouse.com.au/' target="_blank"> Cider House ICT</Link></h5>
                                    <h6 className="text-sm mb-0">Jan 2022 - Nov 2022</h6>
                                </div>

                                <div className="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                                    <h5 className="title mb-1 font-semibold">Intern</h5>
                                    <p className="mt-3 mb-0 text-slate-400 text-[15px]">Embarked on a journey in full stack development, starting from the ground up, encompassing database management, HTML, JavaScript (including jQuery), and PHP MySQL. Collaborated with various partners, notably Windcave, to seamlessly integrate payment systems. A standout achievement includes the development of a fully functional file manager, a project pivotal in reinforcing PHP principles and concepts.
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}
