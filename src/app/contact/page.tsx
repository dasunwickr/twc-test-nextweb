"use client"
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/util/axiosInstance';
import { Contact } from '@/types';
import Image from 'next/image';

const ContactPage: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get<Contact[]>('/contact');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchData();
    }, []);

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
                                <th className="text-left">Name</th>
                                <th className="text-left">Email</th>
                                <th className="text-left">Gender</th>
                                <th className="text-left">Phone</th>
                                <th className="text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact => (
                                <tr key={contact.id}>
                                    <td className="text-left">
                                        <Image
                                            src={contact.gender === 'male' ? '/male.png' : '/female.png'}
                                            alt={contact.gender === 'male' ? 'Male' : 'Female'}
                                            width={50}
                                            height={50}
                                        />
                                    </td>
                                    <td className="text-left">{contact.name}</td>
                                    <td className="text-left">{contact.email}</td>
                                    <td className="text-left">{contact.gender}</td>
                                    <td className="text-left">{contact.phoneNumber}</td>
                                    <td className="text-left">{/* Add any actions/buttons for each contact here */}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
