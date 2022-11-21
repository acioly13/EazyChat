import React from 'react';
import './ChatListitem.css';

export default () => {
    return (
        <div className='chatListitem'>
            <img className='chatListitem-avatar' src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' alt='avatar' />
            <div className='chatListitem-lines'>
                <div className='chatListitem-line'>
                    <div className='chatListitem-name'>Jose Testanu</div>
                    <div className='chatListitem-date'>19:00</div>
                </div>
                <div className='chatListitem-line'>
                    <div className='chatListitem-lastMsg'>
                        <p>AAA</p>
                    </div>
                </div>
            </div>
        </div>
    );
}