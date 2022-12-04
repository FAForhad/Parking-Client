import React, { useEffect, useState } from 'react';
import AllAreas from '../Areas/AllAreas';
import Area from '../Areas/Area';

const Products = () => {
    const [spots, setSpots] = useState([])
    console.log(spots)
    useEffect(() => {
        fetch('http://localhost:5000/spots')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSpots(data)
            })
    }, [])
    return (
        <div>
            <div>
                <section className="bg-gray-900 text-white">
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-lg text-center">
                            <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>

                            <p className="mt-4 text-gray-300">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                                aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                                saepe laborum.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                            {
                                spots.map(spot => <Area key={spot._id} spot={spot}></Area>)
                            }
                        </div>

                        <div className="mt-12 text-center">
                            <button
                                className="mt-8 inline-flex items-center rounded border border-orange-800 bg-orange-800 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-orange-800"
                            >
                                <span className="text-sm font-medium"> All States </span>
                                <svg
                                    className="ml-3 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Products;