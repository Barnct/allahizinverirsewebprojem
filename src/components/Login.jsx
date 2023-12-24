import React from 'react';
import '../App.css';

function LoginScreen() {
  return (
    <div className="App">
      <div className="login-container">
        <h2>Giriş Yap</h2>
        <div className="input-group">
          <input type="text" placeholder="Kullanıcı Adı" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Şifre" />
        </div>
        <button>Giriş Yap</button>
      </div>
    </div>
  );
}

export default LoginScreen;
