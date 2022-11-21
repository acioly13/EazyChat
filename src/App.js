import React, { useState } from "react";
import './App.css';
import ChatListitem from "./components/ChatListitem";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
    const [chatList, setChatList] = useState([
        {},
        {},
        {},
        {},
    ]);
    return (
        <div className="app-window">
            <div className="sidebar">
                <header>
                    <img className="header-avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar" />
                    <div className="header-buttons">
                        <div className="header-btn">
                            <DonutLargeIcon style={{ color: '#919191' }} />
                        </div>
                        <div className="header-btn">
                            <ChatIcon style={{ color: '#919191' }} />
                        </div>
                        <div className="header-btn">
                            <MoreVertIcon style={{ color: '#919191' }} />
                        </div>
                    </div>
                </header>
                <div className="search">
                    <div className="search-input">
                        <SearchIcon fontSize="small" style={{ color: '#919191' }} />
                        <input type="search" placeholder="Procurar ou começar uma nova conversa" />
                    </div>
                </div>
                <div className="chatlist">
                    {chatList.map((item, key) => (
                        <ChatListitem
                            key={key}
                        />
                    ))}
                </div>
            </div>
            <div className="contentarea">
                ...
            </div>
        </div>
    );
}