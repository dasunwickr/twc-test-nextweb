"use client"
import { LayoutPageProps } from "@/types"
import { removeToken } from "@/util/tokenServices";
import Image from "next/image"
import { useRouter } from 'next/navigation';

const ContactsPage = ({ children }: LayoutPageProps) => {
    const router = useRouter();

    const logoutService = () => {
        removeToken();
        router.push('/login');
    }

    return (
        <div className="h-screen py-16 px-[204px] bg-ellipse-1 bg-cover flex flex-col justify-evenly">
            <div className="flex flex-col flex-1">
                <Image src='/logo_white.png' width={72.94} height={24.03} alt='logo' />
                <span className="text-3xl font-bold">contacts</span>
                <span className="text-3xl font-normal">portal</span>
            </div>
            <div className="flex-auto">
                {children}
            </div>
            <div className="flex-1 flex items-center gap-4 ml-auto -mr-8">
                <Image src='/logout_btn.png' width={43} height={43} alt='logout' />
                <button className="text-xl underline" onClick={logoutService}>logout</button>
            </div>
        </div>
    )
}

export default ContactsPage;
