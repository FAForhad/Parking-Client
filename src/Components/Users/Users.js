import React, { useEffect, useState } from 'react';
import User from './User';

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                console.log(data)
            })
    }, [])

    const handleDeleteuser = (id) => {
        fetch(`http://localhost:5000/service/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining)
                }
            })
    }


    return (

        <div>
            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {
                            users.map(user => <User key={user._id} user={user} handleDeleteuser={handleDeleteuser}></User>)
                        }

                    </div>

                </div>
            </section>

        </div>
    );
};

export default Users;