import React from 'react';

export default function MainPage(): JSX.Element {
    return (
        <div className='flex flex-col w-full items-center pt-[127px] animate-appearText'>
            <div className='max-w-[1122px] text-[120px] leading-[120px] font-bold text-center tracking-tighter'>
                All-in-one
            </div>
            <div className='max-w-[1122px] text-[120px] leading-[1em] font-bold text-center tracking-tighter'>
                decentralized data
            </div>
            <div className='max-w-[1122px] text-[120px] leading-[1em] font-bold text-center tracking-tighter'>
                infrastructure.
            </div>
            <div className='max-w-[858.92px] h-[162px] text-[24px] leading-normal mt-[30px] text-center tracking-tighter'>
                Our mission is to address the information asymmetry in crypto. L3 Atom stores billions of crypto and Web3 data points, transactions, and historical records so anyone can access them without censorship.
            </div>
            <div className='flex'>
                <div className='text-[20px] text-[#00a113]'>Version 3 is Live!&nbsp;&nbsp;</div>
                <div className='w-[20px] h-[20px]'>
                    <svg fill='#00a113' preserveAspectRatio="none" data-bbox="19.117 18.918 161.766 162.164" viewBox="19.117 18.918 161.766 162.164" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true">
                        <g>
                            <path d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}