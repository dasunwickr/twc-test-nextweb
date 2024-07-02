import Image from "next/image";
import { Icon } from "@iconify/react";

const ContactPage = () => {
    return (
        <div className="h-full my-8">
            <div className="flex justify-between items-center">
                <div className="text-4xl italic font-normal">Contacts</div>
                <div>
                    <button className="border-2 text-xl rounded-full px-8 py-2">Add New Contact</button>
                </div>
            </div>
            <div className="bg-white rounded-2xl mt-8 pt-4 h-72 text-green-700 p-2">
                <div className="max-h-64 overflow-y-auto text-green">
                    <table className="w-full">
                        <thead className="sticky top-0 bg-white italic">
                            <tr>
                                <th className="text-left"></th>
                                <th className="text-left">name</th>
                                <th className="text-left">email</th>
                                <th className="text-left">phone</th>
                                <th className="text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="flex justify-center items-center">
                                    <Image src="/female.png" width={50} height={50} alt="avatar" />
                                </td>
                                <td className="text-left">John Doe</td>
                                <td className="text-left">john@example.com</td>
                                <td className="text-left">(123) 456-7890</td>
                                <td>
                                    <div className="flex justify-end p-2 gap-2">
                                        <Icon icon="mdi:trash-can-outline" width="24" height="24" />
                                        <Icon icon="mdi:pencil-outline" width="24" height="24" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex justify-center items-center">
                                    <Image src="/female.png" width={50} height={50} alt="avatar" />
                                </td>
                                <td className="text-left">John Doe</td>
                                <td className="text-left">john@example.com</td>
                                <td className="text-left">(123) 456-7890</td>
                                <td>
                                    <div className="flex justify-end p-2 gap-2">
                                        <Icon icon="mdi:trash-can-outline" width="24" height="24" />
                                        <Icon icon="mdi:pencil-outline" width="24" height="24" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex justify-center items-center">
                                    <Image src="/female.png" width={50} height={50} alt="avatar" />
                                </td>
                                <td className="text-left">Jane Smith</td>
                                <td className="text-left">jane@example.com</td>
                                <td className="text-left">(987) 654-3210</td>
                                <td>
                                    <div className="flex justify-end p-2 gap-2">
                                        <Icon icon="mdi:trash-can-outline" width="24" height="24" />
                                        <Icon icon="mdi:pencil-outline" width="24" height="24" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex justify-center items-center">
                                    <Image src="/female.png" width={50} height={50} alt="avatar" />
                                </td>
                                <td className="text-left">Jane Smith</td>
                                <td className="text-left">jane@example.com</td>
                                <td className="text-left">(987) 654-3210</td>
                                <td>
                                    <div className="flex justify-end p-2 gap-2">
                                        <Icon icon="mdi:trash-can-outline" width="24" height="24" />
                                        <Icon icon="mdi:pencil-outline" width="24" height="24" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="flex justify-center items-center">
                                    <Image src="/female.png" width={50} height={50} alt="avatar" />
                                </td>
                                <td className="text-left">Jane Smith</td>
                                <td className="text-left">jane@example.com</td>
                                <td className="text-left">(987) 654-3210</td>
                                <td>
                                    <div className="flex justify-end p-2 gap-2">
                                        <Icon icon="mdi:trash-can-outline" width="24" height="24" />
                                        <Icon icon="mdi:pencil-outline" width="24" height="24" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
