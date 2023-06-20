// import logo from './logo.svg';
import './App.css';
import { ChatClient } from './Components/ChatClient/ChatClient';
import LoginButton from './Components/login/LoginButton';
import Profile from './Components/Profile/Profile';


function App() {
  return (
    <div className="App">
      <LoginButton/>
      <Profile/>
      <ChatClient/>
    </div>
  );
}

export default App;
