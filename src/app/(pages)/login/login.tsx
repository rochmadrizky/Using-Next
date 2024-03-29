"use client";

import { useState } from "react";
import Link from "next/link";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

const Login = () => {
    const [tampilanPassword, aturPassword] = useState(false);

    const tombolBukaTutupPassword = () => {
        aturPassword(!tampilanPassword);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-xs border p-8 rounded-lg">
                <h1 className="text-blue-500 text-3xl font-bold mb-2">
                    Login
                </h1>
                <p className="font-medium text-gray-500 mb-8">
                    Lorem ipsum dolor sit amet consectetur.
                </p>

                <form action="">
                    <div className="mb-6">
                        <label id="email" className="block text-gray-500 text-sm font-bold mb-2">Email:</label>

                        <input type="email" className=" text-sm border rounded w-full py-2 px-3 text-gray-700" placeholder="coba@gmail.com"/>
                    </div>

                    <div className="mb-6">
                        <label id="password"  className="block text-gray-500 text-sm font-bold mb-2">Password:</label>

                        <div className="relative">
                            <input type={tampilanPassword ? "text" : "password"} className=" text-sm border rounded w-full py-2 px-3 text-gray-700" placeholder="****"/>
                            <button type="button" onClick={tombolBukaTutupPassword} className="absolute inset-y-0 right-0 px-4 py-1 focus:outline-none">
                            {tampilanPassword ? <IconEye className="text-gray-400"/> : <IconEyeOff className="text-gray-400"/>}
                            </button>
                        </div>

                    </div>

                    <button className="w-full py-2 bg-blue-500 text-white">
                        Login
                    </button>

                    <div className="flex items-center justify-center my-3 gap-1">
                        <p className="text-sm text-gray-700">
                            You don't have account?
                        </p>
                        <Link href="/register">
                            <p className="text-blue-500 font-semibold text-sm">
                                Register
                            </p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;
