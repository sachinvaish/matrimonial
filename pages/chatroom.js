import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function chatroom() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message != " " && message.trim().length > 0) {
      let node = {
        user: localStorage.getItem("name"),
        msg: message,
        time : '11:50am'
      };
      socket.emit("chat-message", node);
      setChat(chat.concat(node));
      setMessage("");
    }
    let msgArea = document.getElementById("msgArea");
    msgArea.scrollTop = msgArea.scrollHeight;
  };

  socket.on("broadcast", (msg) => {
    setChat(chat.concat(msg));
  });

  useEffect(() => {
    if (!localStorage.getItem("name")) {
      let promptValue = prompt("Enter user name");
      localStorage.setItem("name", promptValue);
      setName(promptValue);
    } else {
      setName(localStorage.getItem("name"));
    }
  }, []);
  return (
    <div className="flex h-[90vh] justify-center">
      <div className=" flex flex-col justify-between container w-full md:w-[60%] h-[90vh] bg-white shadow-lg">
        <div className="text-3xl font-bold header h-8 bg-pink-600 text-white flex justify-center items-center p-6">
          Talk with Stranger <span className="text-sm">Hi {name}</span>
        </div>
        <div id="msgArea" className="overflow-y-scroll flex-grow">
          <div className="msg-area pb-3">
            {chat.map((node) => {
              // console.log(node);
              if (node.user != localStorage.getItem("name")) {
                return (
                    <div className="flex justify-start items-center ml-2" key={node.msg}>
                      <div className="sender rounded-full w-10 h-10 bg-blue-600 mx-1 text-center py-2">
                        {node.user.charAt(0).toUpperCase()}
                      </div>
                      <div className="msg msg-in">{node.msg} <div className=" text-sm text-left" >{node.time}</div></div>
                    </div>
                );
              } else {
                return (
                    <div className="flex justify-end items-center mr-2"  key={node.msg}>
                      <div className="msg msg-out">{node.msg}  <div className="text-sm text-right" >{node.time}</div></div>
                      <div className="sender rounded-full w-10 h-10 bg-pink-600 text-white mx-1 text-center py-2">
                        {node.user.charAt(0).toUpperCase()}
                      </div>
                    </div>
                );
              }
            })}
          </div>
        </div>
        <div className="footer px-2 sticky bottom-0 backdrop-blur-md py-2 bg-gray-200">
          <form onSubmit={sendMessage} className="flex justify-between">
            <input
              type="text"
              name="message"
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full focus:outline-none h-full p-2 px-6"
            />
            <input
              type="submit"
              value="Send"
              className="w-auto h-full rounded-sm px-3 py-1.5 bg-pink-600 text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
