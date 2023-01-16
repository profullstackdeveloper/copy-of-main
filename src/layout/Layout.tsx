import React from 'react';
import Header from '../components/header';

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className='flex flex-col w-full h-full overflow-hidden'>
            <div className='w-full flex-grow-0 flex-shrink-0'>
                <Header></Header>
            </div>
            <div>
                {
                    children
                }
            </div>
        </div>
    )
}