'use client'
import { AuthCredentials } from "@/types"
import { axiosInstance } from "@/util/axiosInstance"
import { useState } from "react"


const loginUser = async ({ email, password }: AuthCredentials) => {
    try {
        const res = await axiosInstance.post('/auth/login', {
            email,
            password
        })
        return res.data
    } catch (error) {
        console.log("Login user error", error)
        return null
    }
}


const registerUser = async ({ email, password }: AuthCredentials) => {
    try {
        const res = await axiosInstance.post('/auth/signup', {
            email,
            password
        })
        return res.data
    } catch (error) {
        console.log("Register user error", error)
        return null
    }
}

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [openRegister, setOpenRegister] = useState(false)


    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const handleLogin = async () => {
        const credentials: AuthCredentials = { email, password }
        const data = await loginUser(credentials)
        console.log("Login response data:", data)
    }


    const handleRegister = async () => {
        if (registerPassword !== confirmPassword) {
            console.log("Passwords do not match")
            return
        }
        const credentials: AuthCredentials = { email: registerEmail, password: registerPassword }
        const data = await registerUser(credentials)
        console.log("Register response data:", data)
    }

    return (
        <div className="h-screen pl-36 flex flex-col justify-evenly py-6">
            {openRegister ? (
                <>
                    <div className="flex flex-col h-screen gap-20 justify-center">
                        <div className="text-4xl italic">Register Now!</div>
                        <div className="flex flex-col gap-8 text-green font-bold">
                            <input
                                type="text"
                                className="rounded-full py-2 px-12 text-twc-green max-w-[90%]"
                                placeholder="email"
                                value={registerEmail}
                                onChange={(e) => setRegisterEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                className="rounded-full py-2 px-12 max-w-[90%]"
                                placeholder="create password"
                                value={registerPassword}
                                onChange={(e) => setRegisterPassword(e.target.value)}
                            />
                            <input
                                type="password"
                                className="rounded-full py-2 px-12 max-w-[90%]"
                                placeholder="confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <button className="border-2 max-w-[30%] text-xl rounded-full px-8 py-2" onClick={handleRegister}>register</button>
                    </div>
                    <button className="text-start underline" onClick={() => setOpenRegister(false)}>&lt; Back to login</button>
                </>
            ) : (
                <>
                    <div className="flex flex-col gap-5">
                        <div className="text-5xl">Hi there,</div>
                        <div className="text-3xl">Welcome to our<br />contacts portal</div>
                    </div>
                    <div className="flex flex-col gap-8 text-green placeholder-green font-bold">
                        <input
                            type="text"
                            placeholder="email"
                            className="rounded-full py-2 px-12 text-green-800 max-w-96"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="rounded-full py-2 px-12 text-green-800 max-w-96"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-8 items-center">
                        <button className="border-2 text-xl rounded-full px-8 py-2" onClick={handleLogin}>login</button>
                        <p>or</p>
                        <button onClick={() => setOpenRegister(true)} className="text-xl underline">click here to register</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default LoginPage
