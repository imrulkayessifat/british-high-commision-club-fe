"use client"

import React from 'react'
import {
    FaUser,
} from "react-icons/fa";
import { TfiHome } from "react-icons/tfi";

import { LuUsers } from "react-icons/lu";
import { MdCelebration,MdOutlineLogin } from "react-icons/md";

import Navbar from '@/components/admin/navbar';
import SideBar from '@/components/admin/sidebar';

interface AdminLayoutProps {
    children: React.ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
    
    const links = [
        { href: '/dashboard', icon: TfiHome },
        { href: '/member', icon: LuUsers },
        { href: '/check-in', icon: MdOutlineLogin },
        { href: '/event', icon: MdCelebration },
        { href: '/user', icon: FaUser },
    ];
    return (
        <div className='w-full h-full flex flex-col'>
            <Navbar />
            <div className='flex w-full h-full'>
                <div className='flex flex-col gap-11 items-center px-5 pt-3'>
                    {links.map((link, index) => (
                        
                        <SideBar icon={link.icon} key={index} href={link.href} />
                    ))}
                </div>
                <div className='w-full'>
                    {
                        children
                    }
                </div>
            </div>

        </div>
    )
}

export default AdminLayout