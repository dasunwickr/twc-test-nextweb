import Image from "next/image"

const WelcomePage = () => {
  return (
    <div className=" h-screen px-[204px] bg-ellipse-1 bg-cover flex flex-col justify-evenly">
      <div className="flex flex-col ">
        <Image src='/logo_white.png' width={72.94} height={24.03} alt='logo' />
        <span className="text-3xl font-bold">contacts</span>
        <span className="text-3xl font-normal">portal</span>
      </div>
      <div className="flex flex-col gap-4 mt-16">
        <span className="font-bold text-5xl">Welcome,</span>
        <span className="font-normal text-3xl">This is where your contacts live. Click the button below to add a new contact.</span>
      </div>
      <div><button className="border-2 text-2xl rounded-full px-8 py-2">add your first contact</button></div>
      <div className="flex items-center gap-4 ml-auto -mr-8">
        <Image src='/logout_btn.png' width={43} height={43} alt='logout' />
        <button className="text-xl underline">logout</button>
      </div>
    </div>
  )
}

export default WelcomePage