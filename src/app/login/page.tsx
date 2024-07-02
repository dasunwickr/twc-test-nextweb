'use client'
import { useState } from "react"

const LoginPage = () => {

    const [openRegister, setOpenRegister] = useState(false)
    return (
        <div className="h-screen pl-36 flex flex-col justify-evenly py-6">
            {openRegister ?

                (<>
                    <div className="flex flex-col h-screen gap-20 justify-center">
                        < div className="text-4xl italic" > Register Now!</ div>
                        <div className="flex flex-col gap-8 text-green font-bold">
                            <input type="text" className="rounded-full py-2 px-12 text-twc-green max-w-[90%]" placeholder="email" />
                            <input type="password" className="rounded-full py-2 px-12  max-w-[90%]" placeholder="create password" />
                            <input type="password" className="rounded-full py-2 px-12  max-w-[90%]" placeholder="confirm password" />
                        </div>
                        <button className="border-2 max-w-[30%] text-xl rounded-full px-8 py-2">register</button>
                    </div >
                    <button className="text-start underline" onClick={() => setOpenRegister(false)}>&lt; Back to login</button>

                </>) : (<><div className="flex flex-col gap-5">
                    <div className="text-5xl">Hi there,</div>
                    <div className="text-3xl">Welcome to our<br />contacts portal</div>
                </div>
                    <div className="flex flex-col gap-8  text-green placeholder-green font-bold">
                        <input type="text" placeholder="email" className="rounded-full py-2 px-12 text-green-800 max-w-96" />
                        <input type="text" placeholder="password" className="rounded-full py-2 px-12 text-green-800 max-w-96" /></div>
                    <div className="flex  gap-8 items-center">
                        <button className="border-2 text-xl rounded-full px-8 py-2">login</button>
                        <p>or</p>
                        <button onClick={() => setOpenRegister(true)} className="text-xl underline" >click here to register</button>
                    </div></>)}
        </div >
    )
}

export default LoginPage