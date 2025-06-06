const UserSignUp = () => {
    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="bg-red-500 text-white text-3xl font-bold p-4 rounded">Get Started Now!</h1>
            <h3 className="text-gray-700 mt-4">Enter your credentials to access your account</h3>

            <form className="mt-6 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default UserSignUp;