import React from 'react';
import './Login.css';

export default () => {
    const handleLogin = async () => {
        let result = await Api.emailLogin();
        if (result) {
            window.location.href = '/';
        }
        else {
            alert("Erro!");
        }
    }

    return (
        <div className='login'>
            <button onClick={handleLogin}>Login com o Email e Senha</button>
        </div>
    );
}