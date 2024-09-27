import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from './redux/jobSlice';

const HeroSection = () => {

    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }


    return (
        <div>
            <div className='text-center'>
                <div className='flex flex-col gap-5 my-10 items-center'>
                    <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>
                        No. 1 Job Hunt Website
                    </span>
                    <h1 className='text-5xl font-bold'>
                        Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>

                    {/* Input container */}
                    <div className='flex items-center w-[90%] md:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full mx-auto'>
                        <input
                            type="text"
                            placeholder='Find your dream jobs'
                            onChange={(e) => setQuery(e.target.value)}
                            className='outline-none border-none w-full py-2 px-4 rounded-full'
                        />
                        <Button onClick={searchJobHandler} className='rounded-r-full bg-[#6A38C2] text-white flex items-center justify-center p-2'>
                            <Search className='h-6 w-6' />
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
