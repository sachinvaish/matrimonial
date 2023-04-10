import React, { useState, useEffect } from 'react'
import {io} from 'socket.io-client'

const socket = io('https://localhost:5000',{transports:['websocket']})

export default function chatroom() {
  const [message, setMessage] = useState("");
  const [chat,setChat] = useState([
    {
      user : 'ajay',
      msg : 'Hello baba'
    },
    {
      user : 'vinay',
      msg : 'Hello Ajay'
    },
    {
      user : 'ajay',
      msg : 'Kya Haal hain'
    }
  ]);

  const sendMessage = (e)=>{
    e.preventDefault();
    if(message!=" " && message.trim().length>0){
      let node = {
        user : 'vinay',
        msg : message
      }
      socket.emit('chat-message',node);
      setChat(chat.concat(node));
      setMessage("");
    }
    let msgArea = document.getElementById('msgArea');
    msgArea.scrollTop = msgArea.scrollHeight;
  }

  return (
    <div className='flex h-[90vh] justify-center'>
      <div className=" flex flex-col justify-between container w-full md:w-[60%] h-[90vh] bg-white shadow-lg">
        <div className="text-3xl font-bold header h-8 bg-pink-600 text-white flex justify-center items-center p-6">Talk with Stranger</div>
        <div  id="msgArea" className='overflow-y-scroll flex-grow' >
            <div className="msg-area pb-3">
             { chat.map((node)=>{
              // console.log(node);
              if(node.user == 'ajay'){
                return(
                  <div className='flex justify-start items-center ml-2' key={node.msg}>
                    <div className="sender rounded-full w-10 h-10 bg-blue-600 mx-1 text-center py-2">S</div>
                    <div className="msg msg-in">{node.msg}</div>
                  </div>
                )
              }else{
                return (
                  <div className='flex justify-end items-center mr-2' key={node.msg}>
                  <div className="msg msg-out">{node.msg}</div>
                  <div className="sender rounded-full w-10 h-10 bg-pink-600 mx-1 text-center py-2">S</div>
              </div>
                )
              }
             })}
                
                
            </div>
        </div>
        <div className="footer px-2 sticky bottom-0 backdrop-blur-md py-2 bg-gray-200">
          <form onSubmit={sendMessage} className='flex justify-between'>
                <input type="text" name="message" placeholder='Type your message here' value={message} onChange={(e)=>setMessage(e.target.value)} className='w-full focus:outline-none h-full p-2 px-6'/>
                <input type='submit'  value='Send' className='w-auto h-full rounded-sm px-3 py-1.5 bg-pink-600 text-white'/>
          </form>
        </div>
      </div>
    </div>
  )
}
