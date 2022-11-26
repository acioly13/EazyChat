import React from 'react';
import './Login.css';
import Api from '../Api';

export default ({ onReceive }) => {
    const handleFacebookLogin = async () => {
        let result = await Api.fbPopup();

        if (result) {
            onReceive(result.user);
        } else {
            alert('Erro!');
        }
    }

    return (
        <div className='login'>
            <img className="login-univ" src={'http://images.educamaisbrasil.com.br/content/superior/instituicao/logo/g/universidade-de-vassouras.png'} alt="avatar" />
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    );
}