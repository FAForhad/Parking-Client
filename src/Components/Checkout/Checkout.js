import e from 'express';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const user = useLoaderData()
    console.log(user)

    const handleUpdateuser = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.emai.value;
        const name = form.name.value;
        const photo = form.phoyo.value;

        const updateUser = {
            email: email,
            name: name,
            photo: photo
        }

        fetch(`http://localhost:5000/service/${user._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
    }

    return (
        <div>
            <section>
                <h1 className="sr-only">Checkout</h1>
                <div className="relative mx-auto max-w-screen-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className=" bg-transparent py-12 md:py-24">
                            <div className="mx-auto max-w-lg px-4 lg:px-8">

                                <div className="mt-8">
                                    <p className="text-2xl font-medium tracking-tight">$99.99</p>
                                    <p className="mt-1 text-sm text-gray-500">For the purchase of</p>
                                </div>

                                <div className="mt-12">
                                    <div className="flow-root">
                                        <ul className="-my-4 divide-y divide-gray-200">


                                            <li className="flex items-center justify-between py-4">
                                                <div className="flex items-start">
                                                    <img
                                                        alt="Lettuce"
                                                        src={user?.photo}
                                                        className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                                                    />

                                                    <div className="ml-4">
                                                        <p className="text-xl text-white">{user?.name}</p>

                                                        <dl className="mt-1 space-y-1 text-xs text-gray-400">
                                                            <div>

                                                                <p>{user?.email}</p>
                                                            </div>
                                                        </dl>
                                                    </div>
                                                </div>

                                                <div>
                                                    <p className="text-sm">
                                                        $25
                                                        <small className="text-gray-500">x2</small>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800 py-12 md:py-24">
                            <div className="mx-auto max-w-lg px-4 lg:px-8">
                                <form onSubmit={handleUpdateuser} className="grid grid-cols-6 gap-4">
                                    <div className="col-span-6">
                                        <label className="mb-1 block text-sm text-gray-600" type="email">
                                            Name
                                        </label>

                                        <input
                                            className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                            type="email"
                                            id="email"
                                            name='name'
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label className="mb-1 block text-sm text-gray-600" type="phone">
                                            Email
                                        </label>

                                        <input
                                            className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                            type="tel"
                                            id="phone"
                                            email='email'
                                        />
                                    </div>

                                    <fieldset className="col-span-6">
                                        <legend className="mb-1 block text-sm text-gray-500">
                                            Photo
                                        </legend>
                                        <div className="-space-y-px rounded-lg bg-white shadow-sm">
                                            <div>
                                                <input
                                                    className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                    type="text"
                                                    name="photo"
                                                    id="card-number"
                                                    placeholder="Card number"
                                                />
                                            </div>


                                        </div>
                                    </fieldset>


                                    <div className="col-span-6">
                                        <button
                                            className="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                                            type="submit"
                                        >
                                            Update Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Checkout;