import React from 'react';

const Area = ({ spot }) => {
    const { about, area, company, picture } = spot
    return (
        <article
            className="flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25"
        >
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                    datetime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
                >
                    <span>2022</span>
                    <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
                    <span>Oct 10</span>
                </time>
            </div>

            <div className="hidden sm:block sm:basis-56">
                <img
                    alt="Guitar"
                    src={picture}
                    className="aspect-square h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div
                    className="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
                >
                    <p >
                        <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                            {area} / {company}
                        </h3>
                    </p>

                    <p
                        className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200"
                    >
                        {about.length === 200 ? about : about.slice(0, 200)}
                    </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                    <a
                        href="#"
                        className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
                    >
                        Read Blog
                    </a>
                </div>
            </div>
        </article>

    );
};

export default Area;