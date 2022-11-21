import React from "react";
import './ChatWindow.css';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MenuIcon from '@mui/icons-material/Menu';

export default () => {
    return (
        <div className="chatWindow">
            <div className="chatWindow-header">
            
                <div className="chatWindow-header-info">
                    <img className="chatWindow-avatar" src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'></img>
                    <div className="chatWindow-name">Emanuel</div>
                </div>

            </div>
            
            <div className="chatWindow-body">

                <div className="chatwindow-btn">
                    <SearchIcon style={{color: '#919191'}}/>
                </div>
                <div className="chatwindow-btn">
                    <AttachFileIcon style={{color: '#919191'}}/>
                </div>
                <div className="chatwindow-btn">
                    <MenuIcon style={{color: '#919191'}}/>
                </div>

            </div>
            
            <div className="chatWindow-footer">

            </div>
        </div>
    )
}