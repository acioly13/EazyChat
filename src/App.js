import React, { useState, useEffect } from "react";
import './App.css';
import Api from './Api';

import ChatList from "./components/ChatList/ChatList";
import ChatIntro from './components/ChatIntro/ChatIntro';
import ChatWindow from './components/ChatWindow/ChatWindow';
import NewChat from './components/NewChat/NewChat';
import Login from './Login/Login';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
    const [chatList, setChatList] = useState([]);
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState(null);

    const [showNewChat, setShowNewChat] = useState(false);

    useEffect(() => {

        if (user !== null) {
            let unsub = Api.onChatList(user.id, setChatList);
            return unsub;
        }
    }, [user]);

    const handleNewChat = () => {
        setShowNewChat(true);
    }



    const handleLoginData = async (u) => {
        let newUser = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL

        };
        await Api.addUser(newUser);
        setUser(newUser);
    };

    if (user === null) {
        return (<Login onReceive={handleLoginData} />);
    }
    return (
        <div className="app-window">
            <div className="sidebar">
                <NewChat
                    chatList={chatList}
                    user={user}
                    show={showNewChat}
                    setShow={setShowNewChat}
                />
                <header>
                    <img className="header-avatar" src={'https://static3.tcdn.com.br/img/img_prod/460977/boneco_raphael_tartarugas_ninjas_s_h_figuarts_bandai_18375_1_20201211172802.jpg'} alt="avatar" />
                    <div className="header-buttons">
                        <div className="header-btn">
                            <DonutLargeIcon style={{ color: '#919191' }} />
                        </div>
                        <div onClick={handleNewChat} className="header-btn">
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
                        <ChatList
                            key={key}
                            data={item}
                            active={activeChat.chatId === chatList[key].chatId}
                            onClick={() => setActiveChat(chatList[key])}
                        />
                    ))}
                </div>
            </div>
            <div className="contentarea">
                {activeChat.chatId !== undefined &&
                    <ChatWindow
                        user={user}
                        data={activeChat}
                    />}
                {activeChat.chatId === undefined && <ChatIntro />}
            </div>
        </div>
    );
}