import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Uploader from "./components/Uploader";
import Input from "../../components/Input";
import Select from "../../components/Select";

export default function CreateAsset() {
    return (
        <>
            <Navbar transparent/>
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                        }}
                    >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
            ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{transform: "translateZ(0)"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src={require("assets/img/team-2-800x800.jpg").default}
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-32">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                        Create new item
                                    </h3>
                                    <div className="w-1/2 mx-auto text-left">
                                        <p className="font-bold">Image, Video, Audio, or 3D Model</p>
                                        <div className="text-xs leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                            File types: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
                                        </div>
                                        <Uploader/>
                                        <p className="font-bold mt-6">Name</p>
                                        <Input value={''} placeholder={'Item Name'} onChange={() => {}}/>
                                        <p className="font-bold mt-6">External Link</p>
                                        <div className="text-xs leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                            ACKCS will include a link to this RUL on this item's detail page, so that users can click to learn more about it. You are welcome to link to you own webpage with more details.
                                        </div>
                                        <Input placeholder={'https://yoursite.io/item/123'}/>
                                        <p className="font-bold mt-6">Description</p>
                                        <div className="text-xs leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                            The description will be included on the item's detail page underneath its image. Markdown syntax is supported.
                                        </div>
                                        <Input placeholder={'Provide a detailed description of your item'} multiLine={true}/>
                                        <p className="font-bold mt-6">Collection</p>
                                        <div className="text-xs leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                            This is the collection where your item will appear.
                                        </div>
                                        <Select/>
                                        <p className="font-bold mt-6">Supply</p>
                                        <div className="text-xs leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                            The number of copies that can be minted. No gas cost to you! Quantities above one coming soon.
                                        </div>
                                        <Input placeholder={'1'} disabled/>
                                        <p className="font-bold mt-6">Freeze metadata</p>
                                        <div className="text-xs leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                            Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage.
                                        </div>
                                        <Input placeholder={'To freeze your metadata, you must create your item first.\n'} disabled/>
                                    </div>
                                    {/*<div className="mb-2 text-blueGray-600">*/}
                                    {/*    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>*/}
                                    {/*    University of Computer Science*/}
                                    {/*</div>*/}
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <button className="bg-lightBlue-300 text-white px-6 py-2 rounded-lg">Create</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}
