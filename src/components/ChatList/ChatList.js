import React from 'react';
import './ChatList.css';

export default ({onClick, active,data}) => {
    return (
        <div className={`chatList ${active?'active':''}`} onClick={onClick}>
            <img className='chatList-avatar' src={data.image} alt='avatar' />
            <div className='chatList-lines'>
                <div className='chatList-line'>
                    <div className='chatList-name'>{data.title}</div>
                    <div className='chatList-date'>19:00</div>
                </div>
                <div className='chatList-line'>
                    <div className='chatList-lastMsg'>
                        <p>conversa aleatoria aleatoria aleatoria aleatoria aleatoria</p>
                    </div>
                </div>
            </div>
        </div>
    );
}