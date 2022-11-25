import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import './ChatWindow.css';
import Api from "../../Api";

import MessageItem from "../MessageItem/MessageItem";

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MenuIcon from '@material-ui/icons/Menu';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default ({ user, data }) => {

    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList([]);
        let unsub = Api.onChatContent(data.chatId, setList, setList);
        return unsub;
    }, [data.chatId]);

    useEffect(() => {
        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [list]);

    const handleEmojiClick = (emojiObject) => {
        setText(text + emojiObject.emoji);
    }
    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }
    const handleMicClick = () => {
        if (recognition !== null) {

            recognition.onsoundstart = () => {
                setListening(true);
            }
            recognition.onsoundend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript);
            }
            recognition.start();
        }
    }

    const handleInputKeyUp = (e) => {
        if (e.keyCode === 13) {
            handleSendClick();
        }
    };
    const handleSendClick = () => {
        if (text !== '') {
            Api.sendMessage(data, user.id, 'text', text, text);
            setText('');
            setEmojiOpen(false);
        }
    }
    return (
        <div className="chatWindow">
            <div className="chatWindow-header">

                <div className="chatWindow-header-info">
                    <img className="chatWindow-avatar" src={data.image}></img>
                    <div className="chatWindow-name">{data.title}</div>
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
            <div ref={body} className="chatWindow-body">
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
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
                        style={{ width: emojiOpen ? 40 : 0 }}
                    >
                        <CloseIcon style={{ color: '#111' }} />
                    </div>
                    <div
                        className="chatwindow-btn"
                        onClick={handleOpenEmoji}
                    >
                        <InsertEmoticonIcon style={{ color: emojiOpen ? '#007aeb' : '#111' }} />
                    </div>
                </div>
                <div className="chatWindow-input-area">
                    <input
                        className="chatWindow-input"
                        type="text"
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        onKeyUp={handleInputKeyUp}
                    />
                </div>
                <div className="chatWindow-pos">

                    {text === '' &&
                        <div onClick={handleMicClick} className="chatwindow-btn">
                            <MicIcon style={{ color: listening ? '#126ECE' : '#111' }} />
                        </div>
                    }
                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatwindow-btn">
                            <SendIcon style={{ color: '#111' }} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}