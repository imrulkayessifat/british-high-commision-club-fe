/* eslint-disable @next/next/no-img-element */
"use client"
import {
  // FaEye,
  FaEyeSlash,
  FaArrowRight
} from "react-icons/fa";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className="w-full h-screen">
      <div className="flex h-full bg-gradient-to-b from-white via-slate-100 to-slate-300">
        <div className="hidden lg:block w-1/2 h-full py-2 px-2">
          <div className="h-full relative ">
            <div className="absolute rounded-2xl w-full h-full bg-[#104263]/50 z-10"></div>
            <img
              src="/image-6.jpg"
              alt="Image 6"
              className="absolute rounded-2xl w-full h-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full py-2 px-2">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <img
              src="/image-19.png"
              alt="Image 16"
              className="w-[113px] h-[107px]"
            />
            <h1 className="text-[32px] mt-5 leading-[48px] font-bold	font-lexend text-[#104263FF] text-center">Welcome Back! Please Sign In</h1>
            <span className="text-[16px] leading-[26px] font-normal font-lexend text-[#104263FF] text-center">Enter your credentials to proceed</span>
            <div className="">
              <div className="flex flex-col w-[336px] px-3 py-1 mt-[24px] rounded-[6px] bg-[#F2F8FD]">
                <span className="font-bold  text-[#104263FF] text-[14px] leading-[22px]">
                  User ID
                </span>
                <input type="text" placeholder="Enter your user id" className="w-full outline-none text-[14px] font-normal leading-[22px] font-inter text-[#104263FF]	bg-[#F2F8FD]" />
              </div>
              <div className="flex flex-col w-[336px] px-3 py-1 mt-[24px] rounded-[6px] bg-[#F2F8FD]">
                <span className="font-bold w-full text-[#104263FF] text-[14px] leading-[22px]">
                  Password
                </span>
                <div className="relative w-full">
                  <input type="password" placeholder="Enter at least 8+ characters " className="outline-none	bg-[#F2F8FD] text-[#104263FF] font-inter" />
                  <FaEyeSlash className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
              <div className="mt-[24px] flex items-center gap-1">
                <input type="checkbox" className="accent-[#104263FF]" />
                <span className="text-[#104263FF] font-bold font-inter text-[14px] leading-[22px]">Remember me</span>
              </div>
            </div>
            <button onClick={() => router.push('/member')} className="bg-[#104263FF] mt-[24px] flex items-center justify-center gap-1 w-[271px] h-[36px] rounded-[10px] text-white">
              <span className="font-inter font-light">Continue</span>
              <FaArrowRight />
            </button>
            <p className="font-inter mt-6">
              You agree to the{" "}
              <span className="font-lexend font-bold text-[#104263FF] underline">Terms & Condition</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
