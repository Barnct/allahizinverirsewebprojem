import './Login.css';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  const navigate = useNavigate();

  const OgrenciEkraninayolla = () => {
    navigate("/OgrenciScreen");
  };

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
        <button onClick={OgrenciEkraninayolla}>Giriş Yap</button>
      </div>
    </div>
  );
}

export default LoginScreen;
