import React from 'react';
import { getButtonWidth } from '../../helpers/utils';

interface PropTypes {
    content: string;
}

export default function HeaderButton({ content }: PropTypes): JSX.Element {

    const length = getButtonWidth(content);

    return (
        <div className={`h-[55px] flex items-center justify-center mr-[35px] text-[14px] text-[#424542] whitespace-nowrap cursor-pointer`} style={{width: length}}>
            {
                content
            }
        </div>
    )
}