export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    return (
        <>
            <div className='flex justify-center align-center h-screen '>
                <form className='flex flex-col justify-center w-3/6'>
                    <div>
                        {type == "signup" ? <div>
                            <div className='text-3xl font-black'>Create an account</div>
                            <div className='max-w-md text-xl font-medium text-slate-400'>
                                Already an user? <a href="#">Signin</a>
                            </div>
                        </div>
                            : <div>
                                <div className='text-3xl font-black'>Login an account</div>
                                <div className='max-w-md text-xl font-medium text-slate-400'>
                                    Not an user? <a href="#">Signup</a>
                                </div>
                            </div>}
                    </div>
                    <label className='text-xl font-semibold mt-5'>Username</label>
                    <input className='border border-gray-300 p-3 my-3 rounded-md ' type='text' placeholder='Enter your username' />

                    <label className='text-xl font-semibold mt-3' >Email</label>
                    <input className='border border-gray-300 p-3 my-3 rounded-md' type='email' placeholder='me@example.com' />

                    <label className='text-xl font-semibold mt-3'>Password</label>
                    <input className='border border-gray-300 p-3 my-3 rounded-md' type='password' placeholder='******' />

                    <input
                        className="bg-black mt-5 border border-black text-white font-semibold text-lg rounded-md py-3 px-6 shadow-md focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 transition duration-300 hover:bg-transparent hover:border-outset-black hover:text-black"
                        type="submit"
                        value={type === "signin" ? "Sign in" : "Sign up"}
                    />


                </form>
            </div>
        </>
    )
}


