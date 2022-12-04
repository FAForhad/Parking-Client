import { Link } from "react-router-dom";

const User = ({ user, handleDeleteuser }) => {
    const { _id, name, picture, color, email } = user;
    return (
        <div>
            <div>
                <div
                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
                >
                    <span
                        className="absolute inset-x-0 bottom-0 h-2"
                        style={{ backgroundColor: color }}
                    ></span>

                    <div className="justify-between sm:flex">
                        <div>
                            <h3 className="text-xl font-bold text-gray-500 mx-5">
                                {name}
                            </h3>
                            <p></p>
                        </div>

                        <button
                            onClick={() => handleDeleteuser(_id)}
                            className='absolute top-5 left-5 text-red-500 font-bold text-2xl'>
                            X
                        </button>
                        <div className="ml-3 hidden relative flex-shrink-0 sm:block">
                            <img
                                alt={name}
                                src={picture}
                                className="h-16 w-16 rounded-lg object-cover shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="mt-4 sm:pr-8">
                        <p className="text-sm text-gray-500">
                            {email}
                        </p>
                    </div>

                    <dl className="mt-6 flex">
                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-gray-600">Published</dt>
                            <dd className="text-xs text-gray-500">31st June, 2021</dd>
                        </div>

                        <div className="ml-3 flex flex-col-reverse sm:ml-6">
                            <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                            <dd className="text-xs text-gray-500">3 minute</dd>
                        </div>
                        <div className="ml-3 flex flex-col-reverse sm:ml-6">
                            <button
                                className=" inline-flex items-center rounded border border-orange-800 bg-orange-800 px-1 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-orange-800"
                            >
                                <Link to={`/checkout/${_id}`}> <span className="text-sm font-medium">Update User </span></Link>
                            </button>
                        </div>
                    </dl>
                </div>

            </div>
        </div>
    );
};

export default User;