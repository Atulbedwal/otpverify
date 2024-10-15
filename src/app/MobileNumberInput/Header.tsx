"use client"
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col p-8 w-full bg-[#4f285e] max-sm:mr-0">
      <div className="flex gap-10 justify-between items-center w-full max-w-[296px]">
        <div className="flex gap-2 items-start self-stretch px-4 py-2 my-auto w-14 bg-white shadow-lg rounded-[64px]">
          <img loading="lazy" src="/pics/Arrow.png" className="object-contain w-6 aspect-square" alt="" />
        </div>
      </div>
      <h1 className="mt-8 text-3xl font-medium leading-10 text-white">
        How do you want to login?
      </h1>
    </header>
  );
};

export default Header;