const NewContactsPage = () => {
    return (
        <div className="flex flex-col justify-evenly h-[400px] text-green text-bold">
            <div className="text-4xl font-normal italic" >New Contact</div>
            <div className="flex gap-8">
                <input type="text" placeholder="fullname" className="flex-1 rounded-full py-2 px-12 text-green-800" />
                //test
                <input type="text" placeholder="email" className="flex-1 rounded-full py-2 px-12 text-green-800" />
            </div>
            <div className="flex gap-8">
                <input type="text" placeholder="phone number" className="flex-1 rounded-full py-2 px-12 text-green-800" />
                <div className="flex-1 px-12 ">
                    <div className="flex gap-8 items-center">
                        <label className="block text-white text-sm font-bold">Gender:</label>
                        <label className="inline-flex items-center">
                            <input type="radio" className=" form-radio h-5 w-5" name="gender" value="male" />
                            <span className="ml-2 text-white">Male</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input type="radio" className=" form-radio h-5 w-5" name="gender" value="female" />
                            <span className="ml-2 text-white">Female</span>
                        </label>
                    </div>
                </div>

            </div>
            <div><button className="border-2 text-xl rounded-full px-8 py-2">add your first contact</button></div>
        </div>
    )
}

export default NewContactsPage