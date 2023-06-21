import { useAuth0 } from '@auth0/auth0-react'
import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
// import ChatBot from '../ChatBot/ChatBot'
import './chatClient.css'


const socket= io("https://chatcancheros.onrender.com")

export const ChatClient = () => {

    const {user} = useAuth0();

    const [message, setMessage] = useState('');
    // const [username, setUserName] = useState('Machine');
    const [listMessages, setListMessages] = useState([{
        body: "entraste en el chat"
      }]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('message', {body: message, user: user.name});
        const newMsg = {
          body: message,
          user: user.name
        }
        setListMessages([...listMessages,newMsg]);
        setMessage('');
      }

    useEffect(() => {
        
        const receiveMessage = msg => {
          setListMessages([...listMessages, msg])      
        }
        socket.on( 'message', receiveMessage);
        

        return () => socket.off( 'message',receiveMessage);
      }, [listMessages])
    
  return (
    <div className='cart'>
      <div className='div-chat'>
        <div className='chat-header'>Chat cancheros</div>
        <span className="title">Chat-io</span>
        { listMessages.map( (message, idx) => (
          <p className='conver' key={message+idx}>{message.user}: {message.body}</p>
          ))
        }
      </div>              
    <form onSubmit={handleSubmit} className="form">
      <p className="description"></p>
      <div className='div-type-chat'> 
        <input 
          value={message}
          placeholder="Escribe tu mensaje."
          onChange={ e => setMessage(e.target.value)}          
          type="text" name="text" id="chat-message"
          className="input-style" 
        />
        <div className='container-boton'>
        <button className="submit">Send</button>
        </div>
      </div>
    </form>  
    {/* <ChatBot/>   */}
    </div>
  )
}
