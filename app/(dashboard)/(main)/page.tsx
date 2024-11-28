"use client";
import React from 'react';
import { useState } from 'react';

import ResultBoard from '@/components/result-board';
import SubmitBox from '@/components/submit-box';
import Typewriter from 'typewriter-effect';
import BuyMeACoffeeButton from '@/components/buymeacoffee-button';


const Dashboard = () => {
    const [analysisResult, setAnalysisResult] = useState([]);

    const text1 = 'This is a GPT-based SaaS boilerplate that could help you build your SaaS...';
    const text2 = 'achieve your dream!';
    return (
        <div className="flex flex-col item-center">
            
            <h1 className="mb-4 text-center mt-12 text-2xl leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Build & Deploy Your SaaS Really <b>Fast!</b></h1>

            <div className="mb-8 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">

                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(text1)
                        .callFunction(() => {
                            // console.log('String typed out!');
                        })
                        .pauseFor(300)
                        .deleteChars(18)
                        .typeString(text2)
                        .callFunction(() => {
                            // console.log('All strings were deleted');
                        })
                        .start();
                    }}
                />
            </div>

            <h1 className="m-1 text-center mt-2 text-xl leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white">This is a simple example of how you can use this boilerplate. This simple SaaS gets a user's feedback about a product or service and return an analysis result of that comment. You may want to remove this line later on.</h1>

            <BuyMeACoffeeButton />

            <div className="container mx-auto">
                <SubmitBox setAnalysisResult={setAnalysisResult} />
                <ResultBoard analysisResult={analysisResult} />
            </div>
        </div>
    )
}

export default Dashboard;