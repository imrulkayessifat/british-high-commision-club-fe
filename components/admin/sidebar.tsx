"use client"

import React from 'react'
import Link from 'next/link';
import { IconType } from 'react-icons'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface SideBarProps {
    icon: IconType;
    href: string;
}

const SideBar: React.FC<SideBarProps> = ({
    icon: Icon,
    href,
}) => {
    const pathname = usePathname()
    return (
        <Link
            href={href}
            className={cn("px-2 py-2 rounded-md",pathname === href && 'bg-[#DEEFFAFF]')}
        >
            <Icon className='w-8 h-8' />
        </Link>
    )
}

export default SideBar