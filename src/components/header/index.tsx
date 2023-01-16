import React from 'react';
import { headerButtons } from '../../helpers/compinfo';
import HeaderButton from '../buttons/HeaderButton';

export default function Header(): JSX.Element {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='bg-gradient w-full h-[24px] mb-[15px] flex items-center justify-center text-[10px] text-white font-sans'>
                <span>Query engine is live! Apply for beta testing</span>
                <span>&nbsp;<u>here</u></span>
            </div>
            <div className='flex w-[1920px]'>
                <img src='https://static.wixstatic.com/media/7b17b3_ea39502dd230464aaf2e10bc335d159a~mv2.jpg/v1/fill/w_139,h_43,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Logo%20(2)_edited.jpg' alt='logo' className='ml-[204.5px] w-[139px] h-[43px]' />
                <div className='flex ml-[146px] items-center mb-[2px]'>
                    {
                        headerButtons.map((button, index) => {
                            return (
                                <HeaderButton content={button} key={index} />
                            )
                        })
                    }
                    <button className='w-[142px] h-[30px] ml-[30px] border border-solid border-[#0057e1] text-[#0057e1] hover:text-[#c7c7c7] transition-colors duration-700'>Start Building</button>
                </div>
            </div>
            <div className='w-full border-t-[1px] border-solid border-[#dbdbdb] mb-[7px]'></div>
        </div>
    )
}