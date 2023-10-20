import React from 'react';
import {Icons} from "../icons/icons";

export const ContactsHeader = () => {
    return (
        <div>
            <a href="/"><Icons iconId={'whatsup'}/></a>
            <span>
                <Icons iconId={'tel'}/>
                <a href="/">+7 (499) 258-625-33</a>
            </span>
            <a href="/"><Icons iconId={'search'}/></a>
        </div>
    );
};

