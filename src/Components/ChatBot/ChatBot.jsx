// import React, { useState, useRef, useEffect } from 'react';
// import './ChatBot.css'



// const ChatBot = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState('');
//   const msgerChatRef = useRef(null);

//   const BOT_IMG = 'https://res.cloudinary.com/dbenwgwfn/image/upload/v1687350731/Cancheros-Map/cancheros%20logos/bot.png';
//   const PERSON_IMG = 'https://res.cloudinary.com/dbenwgwfn/image/upload/v1687350727/Cancheros-Map/cancheros%20logos/user.png';
//   const BOT_NAME = 'BOT';
//   const PERSON_NAME = 'Usuario';
//   const prompts = [
//     ['hola', 'hey', 'que tal', 'buen dia', 'buenas tardes', 'buenas noches'],
//     ['como estas', 'como va la vida', 'como van las cosas'],
//     ['que haces', 'que estas haciendo', 'que pasa'],
//     ['cuantos años tienes', 'cual es tu edad', 'cuando naciste', 'tu edad es', 'tu edad'],
//     ['quien eres', 'eres humano', 'eres un bot', 'eres un humano o un bot', 'que eres'],
//     ['quien te creo', 'quien te hizo'],
//     [
//       'tu nombre por fa',
//       'tu nombre por favor',
//       'tu nombre',
//       'voy a conocer tu nombre',
//       'cual es tu nombre',
//       'que cuentas de tu vida'
//     ],
//     ['i love you', 'te amo', 'i u'],
//     ['feliz', 'bueno', 'divertido', 'increible', 'fantastico', 'cool'],
//     ['que es nft', 'que son los nft', 'que es un nft'],
//     ['para que sirven', 'para que sirven los nft', 'que beneficios tienen los nft'],
//     ['cuanto valen los nft', 'cuanto cuestan los nft'],
//     [
//       'los nft solo los tiene una persona',
//       'un nft los puede tener mas de una persona',
//       'los nft son unicos',
//       'see you later'
//     ],
//     ['que deberia comer hoy'],
//     ['bro'],
//     [
//       'como se compran los nft',
//       'como conseguir nft',
//       'como adquirir nft',
//       'como adquirir los nft',
//       'como comprar los nft'
//     ],
//     ['que de especial tiene los nft', 'que tienen los nft'],
//     ['que tan seguro es invertir en nft', 'que tan seguros son los nft'],
//     ['por que comprar un nft', 'ha', 'lol', 'hehe', 'funny', 'joke']
//   ];
//   const replies = [
//     ['Hola!', 'me necesitas!', 'aqui estoy!', 'que deseas!', 'yuju'],
//     ['bien... como estas tu?', 'bastante bien, como estas?', 'Fantastico, como estas ?'],
//     ['no mucho', 'acerca de dormir', 'Puedes adivinar', 'no se actualmente'],
//     ['soy infinito', 'soy mayor que todos los presentes en este momento'],
//     ['solo soy un bot', 'I am a bot. What are you?'],
//     ['Me creo el eqipo de JCAM studio©'],
//     ['mi nombre es ralphy', 'antes tenia otro nombre, pero me gusta que me llamen ralphy'],
//     ['te amo a ti ', 'yo tambien', 'tambien te amo'],
//     ['te has sentido mal?', 'Glad to hear it'],
//     ['son tokes no fungibles, son activos digitales encriptado, que representan algo unico, que puedes ser intercambiables', 'son imagenes digitales personalisadas que seria equivalente alas piezas de arte que hay en los museos pero estos serian digitales!'],
//     ['tienen funciones en el metaverso dando objetos de algun valor dentro de este mismo, otros solo son de colección?'],
//     ['los precios de los nft varian segun el nft o del grupo que lo halla creado'],
//     ['los nft solo los puede adquirir una sola persona la cual lo puede vender a otras personas'],
//     ['Sushi', 'Pizza'],
//     ['Bro!'],
//     ['se necesita tener una cuenta registrada en JCAM NFT\'s darle en el boton de agregar, despues ir al apartado del carrito de compras.'],
//     ['a los nft se les asigna una especie de certificado digital, y unos metadatos que no se pueden modificar'],
//     ['los nft son menos riesgosos que las criptomonedas'],
//     ['es que se cree que van a aumentar con el tiempo y asi podran venderlos por mas dinero']
//   ];
//   const alternative = [
//     'igual',
//     'vamos...',
//     'Bro...',
//     'intenta de nuevo',
//     'te estoy escuchando...',
//     'no te entiendo :/'
//   ];
//   const robot = ['How do you do, fellow human', 'I am not a bot'];

//   const addChat = (name, img, side, text) => {
//     const newMessage = {
//       name: name,
//       img: img,
//       side: side,
//       text: text,
//       time: formatDate(new Date())
//     };
//     setMessages(prevMessages => [...prevMessages, newMessage]);
//     scrollToBottom();
//   };

//   const output = input => {
//     let product;
//     let text = input
//       .toLowerCase()
//       .replace(/[^\w\s]/gi, '')
//       .replace(/[\d]/gi, '')
//       .trim();
//     text = text
//       .replace(/ a /g, ' ')
//       .replace(/i feel /g, '')
//       .replace(/whats/g, 'what is')
//       .replace(/please /g, '')
//       .replace(/ please/g, '')
//       .replace(/r u/g, 'are you');

//     if (compare(prompts, replies, text)) {
//       product = compare(prompts, replies, text);
//     } else if (text.match(/thank/gi)) {
//       product = 'You\'re welcome!';
//     } else if (text.match(/(robot|bot|robo)/gi)) {
//       product = robot[Math.floor(Math.random() * robot.length)];
//     } else {
//       product = alternative[Math.floor(Math.random() * alternative.length)];
//     }

//     const delay = input.split(' ').length * 100;
//     setTimeout(() => {
//       addChat(BOT_NAME, BOT_IMG, 'left', product);
//     }, delay);
//   };

//   const compare = (promptsArray, repliesArray, string) => {
//     let reply;
//     let replyFound = false;
//     for (let x = 0; x < promptsArray.length; x++) {
//       for (let y = 0; y < promptsArray[x].length; y++) {
//         if (promptsArray[x][y] === string) {
//           let replies = repliesArray[x];
//           reply = replies[Math.floor(Math.random() * replies.length)];
//           replyFound = true;
//           break;
//         }
//       }
//       if (replyFound) {
//         break;
//       }
//     }
//     return reply;
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     if (!inputText) return;
//     addChat(PERSON_NAME, PERSON_IMG, 'right', inputText);
//     output(inputText);
//     setInputText('');
//   };

//   const scrollToBottom = () => {
//     msgerChatRef.current.scrollTop = msgerChatRef.current.scrollHeight;
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const formatDate = date => {
//     const h = '0' + date.getHours();
//     const m = '0' + date.getMinutes();
//     return `${h.slice(-2)}:${m.slice(-2)}`;
//   };

//   return (
//     <div className="msger">
//       <header className="msger-header">
//         <div className="msger-header-title">
//           <i className="fas fa-comment-alt"></i> Chatea nuestro BOT
//         </div>
//       </header>
//       <main ref={msgerChatRef} className="msger-chat">
//             <div className="msg-bubble">
//               <div className="msg-info">
//                 <p className="msg-info-name">Chat bot</p>
//                 <h1 className="msg-info-time">12:45</h1>
//               </div>
//               <div className="msg-text">quieres saber sobre cancheros!</div>
//             </div>
//         {messages.map((message, index) => (
//           <div key={index} className={`msg ${message.side}-msg`}>
//             <div className="msg-img" style={{ backgroundImage: `url(${message.img})` }}></div>
//             <div className="msg-bubble">
//               <div className="msg-info">
//                 <p className="msg-info-name">{message.name}</p>
//                 <h1 className="msg-info-time">{message.time}</h1>
//               </div>
//               <div className="msg-text">{message.text}</div>
//             </div>
//           </div>
//         ))}
//       </main>
//       <form className="msger-inputarea" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className="msger-input"
//           placeholder="Escribe un mensaje..."
//           value={inputText}
//           onChange={e => setInputText(e.target.value)}
//         />
//         <button type="submit" className="msger-send-btn">
//             enviar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatBot;
