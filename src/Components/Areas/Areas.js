import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllAreas from './AllAreas';

const Areas = () => {

    const [spots, setSpots] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/areaSpots')
            .then(res => res.json())
            .then(data => {
                setSpots(data)
                console.log(data)
            })
    }, [])
    return (
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

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {
                            spots.map(spot => <AllAreas key={spot._id} spot={spot}></AllAreas>)
                        }
                    </div>

                    <div className="mt-12 text-center">
                        <Link to='/products'>
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
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Areas;