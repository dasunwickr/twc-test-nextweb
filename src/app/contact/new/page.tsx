"use client"
import React, { useState } from 'react';
import { axiosInstance } from '@/util/axiosInstance';

const NewContactsPage: React.FC = () => {
    const [fullname, setFullname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [gender, setGender] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('/contact', {
                name: fullname,
                email,
                phoneNumber,
                gender
            });

            console.log('Contact added:', response.data);
            setFullname('');
            setEmail('');
            setPhoneNumber('');
            setGender('');
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };

    return (
        <div className="flex flex-col justify-evenly h-[400px] text-green text-bold">
            <div className="text-4xl font-normal italic">New Contact</div>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-8">
                    <input
                        type="text"
                        placeholder="Fullname"
                        className="flex-1 rounded-full py-2 px-12 text-green-800"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="flex-1 rounded-full py-2 px-12 text-green-800"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex gap-8">
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="flex-1 rounded-full py-2 px-12 text-green-800"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <div className="flex-1 px-12">
                        <div className="flex gap-8 items-center">
                            <label className="block text-white text-sm font-bold">Gender:</label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5"
                                    name="gender"
                                    value="Male"
                                    checked={gender === 'Male'}
                                    onChange={() => setGender('Male')}
                                />
                                <span className="ml-2 text-white">Male</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5"
                                    name="gender"
                                    value="Female"
                                    checked={gender === 'Female'}
                                    onChange={() => setGender('Female')}
                                />
                                <span className="ml-2 text-white">Female</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" className="border-2 text-xl rounded-full px-8 py-2 border-white text-white">
                        Add Your First Contact
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewContactsPage;
