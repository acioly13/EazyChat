import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import './ChatWindow.css';

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MenuIcon from '@material-ui/icons/Menu';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default () => {

    const [emojiOpen, setEmojiOpen] = useState(false);
    const handleEmojiClick = () => {

    }
    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }
    return (
        <div className="chatWindow">
            <div className="chatWindow-header">

                <div className="chatWindow-header-info">
                    <img className="chatWindow-avatar" src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'></img>
                    <div className="chatWindow-name">Emanuel</div>
                </div>

                <div className="chatWindow-header-buttons">
                    <div className="chatwindow-btn">
                        <SearchIcon style={{ color: '#111' }} />
                    </div>
                    <div className="chatwindow-btn">
                        <AttachFileIcon style={{ color: '#111' }} />
                    </div>
                    <div className="chatwindow-btn">
                        <MenuIcon style={{ color: '#111' }} />
                    </div>
                </div>

            </div>
            <div className="chatWindow-body">

            </div>

            <div className="chatWindow-emoji-area"
                style={{
                    height: emojiOpen ? '200px' : '0px'
                }}>
                <EmojiPicker
                    width="100%"
                    onEmojiClick={handleEmojiClick}
                    searchDisabled={true}
                    skinTonesDisabled={true}
                />
            </div>

            <div className="chatWindow-footer">
                <div className="chatWindow-pre">
                    <div
                        className="chatwindow-btn"
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen ? 40 : 0}}
                    >
                        <CloseIcon style={{ color: '#111' }} />
                    </div>
                    <div
                        className="chatwindow-btn"
                        onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{ color: emojiOpen? '#007aeb' : '#111' }} />
                    </div>
                </div>
                <div className="chatWindow-input-area">
                    <input className="chatWindow-input" type="text" placeholder="Digite uma mensagem" />
                </div>
                <div className="chatWindow-pos">
                    <div className="chatwindow-btn">
                        <SendIcon style={{ color: '#111' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}