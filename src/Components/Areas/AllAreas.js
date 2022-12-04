import React from 'react';

const AllAreas = ({ spot }) => {

    const { area, company, picture } = spot
    return (

        <p >
            <img
                alt="Signage"
                src={picture}
                className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
            />

            <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong className="font-medium">{company}</strong>

                <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                <p className="mt-0.5 opacity-50 sm:mt-0">{area} / Signage</p>
            </div>

        </p>
    );
};

export default AllAreas;