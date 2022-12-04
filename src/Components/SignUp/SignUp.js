import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const SignUp = () => {

    const { register, updateUser } = useContext(AuthContext)

    const handleRgister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const photourl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const color = form.color.value;
        const user = {
            name: name,
            email: email,
            photo: photourl,
            color: color
        }
        fetch('http://localhost:5000/service', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        register(email, password)
            .then(result => {
                handleupdateUser(name, photourl)
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(error => console.error(error))
    }

    const handleupdateUser = (name, photourl) => {
        const profile = {
            displayName: name,
            photoURL: photourl
        }
        updateUser(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="container my-24 px-6 mx-auto">
            <section className="mb-32 text-gray-800 text-center">
                <div className="px-6 py-12 md:px-12">
                    <div className="container mx-auto xl:px-32">
                        <div className="grid lg:grid-cols-2 flex items-center">
                            <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                <div
                                    className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                                >
                                    <h2 className="text-3xl font-bold mb-12 text-white">Sign Up</h2>
                                    <form onSubmit={handleRgister}>
                                        <div className="form-group mb-6">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput7"
                                                placeholder="Name"
                                                name='name'
                                            />
                                        </div>
                                        <div className="form-group mb-6">
                                            <input
                                                type="email"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput8"
                                                placeholder="Email address"
                                                name='email'
                                            />
                                        </div>
                                        <div className="form-group mb-6">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput7"
                                                placeholder="Photo URL"
                                                name='photo'
                                            />
                                        </div>
                                        <div className="form-group mb-6">
                                            <input
                                                type="text"
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput7"
                                                placeholder="Place Your Favorite Color (#A21E0C)"

                                                name='color'
                                            />
                                        </div>
                                        <div className="form-group mb-6">
                                            <input
                                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleFormControlTextarea13"
                                                rows="3"
                                                placeholder="Password"
                                                name='password'
                                            ></input>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            SignUp
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="md:mb-12 lg:mb-0">
                                <div className="map-container relative shadow-lg rounded-lg">
                                    <iframe background="transparent" speed="1" style={{ width: '500px', height: '500px' }} src="https://embed.lottiefiles.com/animation/92809"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;