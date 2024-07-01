import Image from "next/image"

interface ContactsPageProps {
    children: React.ReactNode

}

const ContactsPage = ({ children }: ContactsPageProps) => {
    return (
        <div className=" h-screen px-[204px] bg-ellipse-1 flex flex-col justify-evenly">
            <div className="flex flex-col ">
                <Image src='/logo_white.png' width={72.94} height={24.03} alt='logo' />
                <span className="text-3xl font-bold">contacts</span>
                <span className="text-3xl font-normal">portal</span>
            </div>
            <div>{children}</div>
            <div className="flex items-center gap-4 ml-auto -mr-8">
                <Image src='/logout_btn.png' width={43} height={43} alt='logout' />
                <button className="text-xl underline">logout</button>
            </div>
        </div>
    )
}

export default ContactsPage