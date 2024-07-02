import { LayoutPageProps } from "@/types"
import Image from "next/image"

const LoginLayout = ({ children }: LayoutPageProps) => {
    return (
        <div className='bg-ellipse2 bg-cover h-screen flex'>
            <div className="flex-1">
                {children}</div>
            <div className="flex-1 flex flex-col items-center justify-center text-green">
                <Image src='/logo_black.svg' width={170} height={60} alt='logo' />
                <div className="text-slate-950 flex flex-col text-6xl pl-16 py-2">
                    <span className="font-extrabold">contacts</span>
                    <span className="font-medium">portal</span>
                </div>
            </div>
        </div>
    )
}

export default LoginLayout