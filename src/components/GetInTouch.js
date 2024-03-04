import React, { useState } from "react";
import * as Unicons from '@iconscout/react-unicons'
import { Link } from "react-router-dom";
import axios from 'axios'; // Import Axios

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default function GetInTouch(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        comments: ''
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send form data to server
            const response = await axios.post('http://13.55.58.250/api/send_email', formData);
            // console.log('Response:', response.data);
            // Reset form fields after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                comments: ''
            });

        } catch (error) {
            // console.error('Error:', error);
        }
    };
    return(
        <section className="relative md:py-24 py-8 bg-gray-50 dark:bg-slate-800" id="contact">
        <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Get In Touch !</h3>

                <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Feel free to get in touch with me. And if you have any feedback about the website, I would appreciate that as well.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
                <div className="lg:col-span-8">
                    <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                        <form onSubmit={handleSubmit}>
                            <div className="grid lg:grid-cols-12 lg:gap-5">
                                <div className="lg:col-span-6 mb-5">
                                    <input name="name" value={formData.name} onChange={handleChange} type="text" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Name :" />
                                </div>

                                <div className="lg:col-span-6 mb-5">
                                    <input name="email" value={formData.email} onChange={handleChange} type="email" className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Email :" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1">
                                <div className="mb-5">
                                    <input name="subject" value={formData.subject} onChange={handleChange} className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Subject :" />
                                </div>

                                <div className="mb-5">
                                    <textarea name="comments" value={formData.comments} onChange={handleChange} className="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Message :"></textarea>
                                </div>
                            </div>
                            <Popup trigger={<button type="submit" id="submit" name="send" className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center">Send Message</button>
                            } position="center center" modal nested lockScroll={true} closeOnDocumentClick={true}>
                                <div className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center">
                                    Email Sent. Thanks for taking the time !!</div>
                            </Popup>
                        </form>
                    </div>
                </div>

                <div className="lg:col-span-4">
                    <div className="lg:ms-8">
                        <div className="flex">
                            <div className="icons text-center mx-auto">
                                <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0"/>
                            </div>

                            <div className="flex-1 ms-6">
                                <h5 className="text-[17px] dark:text-white mb-2 font-medium">Phone</h5>
                                <Link to="tel:+61473749039" className="text-slate-400 text-[15px]">+61 473-749-039</Link>
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="icons text-center mx-auto">
                                <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0"/>
                            </div>

                            <div className="flex-1 ms-6">
                                <h5 className="text-[17px] dark:text-white mb-2 font-medium">Email</h5>
                                <Link to="mailto:amansh.3108@gmail.com" className="text-slate-400 text-[15px]">amansh.3108@gmail.com</Link>
                            </div>
                        </div>

                        <div className="flex mt-4">
                            <div className="icons text-center mx-auto">
                                <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0"/>
                            </div>

                            <div className="flex-1 ms-6">
                                <h5 className="text-[17px] dark:text-white mb-2 font-medium">Location</h5>
                                <p className="text-slate-400 text-[15px] mb-2">Box Hill North VIC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
