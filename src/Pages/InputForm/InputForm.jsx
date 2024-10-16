import React, { useEffect, useState } from 'react';





const InputForm = () => {





    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user ={name, email}

        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const newUsers = [...users , data];
            setUsers(newUsers);
            form.reset()

        })
    };



    return (
        <div className='flex items-center flex-col'>

            <div>

                {
                    users.map(user => <p key={user.id}>{user.id}. {user.name} : {user.email}</p>)
                }

            </div>


            <div className="flex justify-center items-center ">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg w-96">
                    <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"

                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"

                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    );
};

export default InputForm;