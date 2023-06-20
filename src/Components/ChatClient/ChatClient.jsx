import { useAuth0 } from '@auth0/auth0-react'
import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'


const socket= io("https://chatcancheros.onrender.com")

export const ChatClient = () => {

    const {user} = useAuth0();

    const [message, setMessage] = useState('');
    const [username, setUserName] = useState('Machine');
    const [listMessages, setListMessages] = useState([{
        body: "Welcome to the chat room"
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
    <>

      <div className='div-chat'>
        { listMessages.map( (message, idx) => (
          <p key={message+idx}>{message.user}: {message.body}</p>
          ))
        }
      </div>              
    <form onSubmit={handleSubmit} className="form">
      <span className="title">Chat-io</span>
      <p className="description">Type your message.</p>
      <div className='div-type-chat'> 
        <input 
          value={message}
          placeholder="Type your message"
          onChange={ e => setMessage(e.target.value)}          
          type="text" name="text" id="chat-message"
          className="input-style" 
        />
        <button type="submit">Send</button>
      </div>
    </form>    
    </>
  )
}
