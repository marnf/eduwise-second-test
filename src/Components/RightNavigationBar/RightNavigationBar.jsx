import React from 'react';
import { MdMargin } from 'react-icons/md';

const RightNavigationBar = () => {
    return (
        <div class="fixed top-1/3 right-0 my-auto bg-slate-100 border border-gray-300 rounded-l-lg

">
            <div class="flex flex-col my-auto">




                <div class="relative group border border-purple-500 rounded-tl-lg ">
                    <a href="/logOut" class="flex items-center justify-center p-4">
                        <svg class="h-6 w-6 text-purple-600   " fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L1 9h3v7h12V9h3L10 2z"></path></svg>
                    </a>
                    <span class=" w-32 absolute text-center mt-1 right-full top-0 bg-gray-700 border rounded text-white p-2 rounded-r-lg opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
                        Log Out
                    </span>
                </div>

                <div class="relative group border border-purple-500  ">
                    <a href="/logOut" class="flex items-center justify-center p-4">
                        <svg class="h-6 w-6 text-purple-600   " fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L1 9h3v7h12V9h3L10 2z"></path></svg>
                    </a>
                    <span class=" w-32 absolute text-center mt-1 right-full top-0 bg-gray-700 border rounded text-white p-2 rounded-r-lg opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
                        Log Out
                    </span>
                </div>

                <div class="relative group border border-purple-500  ">
                    <a href="/logOut" class="flex items-center justify-center p-4">
                        <svg class="h-6 w-6 text-purple-600   " fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L1 9h3v7h12V9h3L10 2z"></path></svg>
                    </a>
                    <span class=" w-32 absolute text-center mt-1 right-full top-0 bg-gray-700 border rounded text-white p-2 rounded-r-lg opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
                        Log Out
                    </span>
                </div>

                <div class="relative group border border-purple-500 rounded-bl-lg ">
                    <a href="/logOut" class="flex items-center justify-center p-4">
                        <svg class="h-6 w-6 text-purple-600   " fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L1 9h3v7h12V9h3L10 2z"></path></svg>
                    </a>
                    <span class=" w-32 absolute text-center mt-1 right-full top-0 bg-gray-700 border rounded text-white p-2 rounded-r-lg opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-2 transition-all duration-300 ease-in-out">
                        Log Out
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RightNavigationBar;