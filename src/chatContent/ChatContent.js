import React, { useState, useEffect } from "react";
import "./chatContent.css";
import ChatItem from "./ChatItem";
import attachment from "../Images/attachment.png";
import emoji from "../Images/emoji.png";
import send from "../Images/send.png";
const ChatContent = () => {
  const chatItems = [
    {
      key: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUCKBsmGfRJkGgq3xR8owntnvtb1azeJPDw&usqp=CAU",
      type: "",
      msg: "Hi Henry!!"
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUCKBsmGfRJkGgq3xR8owntnvtb1azeJPDw&usqp=CAU",
      type: "",
      msg: "How can I help you today?"
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Hey Bill, nice to meet you!"
    },
    {
      key: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Hope you're doing fine."
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUCKBsmGfRJkGgq3xR8owntnvtb1azeJPDw&usqp=CAU",
      type: "",
      msg: "I'm good thanks for asking."
    },
    {
      key: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg:
        "I am interested to know more about your prices and services you offer"
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUCKBsmGfRJkGgq3xR8owntnvtb1azeJPDw&usqp=CAU",
      type: "",
      msg:
        "Sure, please check below link to find more http://mazepixel.com/portfolio"
    },
    {
      key: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg:
        "Awesome, will get in touch if there's anything unclear, Thanks for now!"
    },
    {
      key: 9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Have a great day!"
    },
    {
      key: 10,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUCKBsmGfRJkGgq3xR8owntnvtb1azeJPDw&usqp=CAU",
      type: "",
      msg: "Thanks buddy, you too as well"
    }
  ];

  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState(chatItems);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        if (msg !== "") {
          chatItems.push({
            key: 1,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUCKBsmGfRJkGgq3xR8owntnvtb1azeJPDw&usqp=CAU",
            type: "",
            msg: msg
          });
          setChat([...chatItems]);
          setMsg("");
        }
      }
    });
  }, [msg, chat, chatItems]);
  const sendClicked = () => {
    if (msg !== "") {
      chatItems.push({
        key: 1,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUCKBsmGfRJkGgq3xR8owntnvtb1azeJPDw&usqp=CAU",
        type: "",
        msg: msg
      });
      setChat([...chatItems]);
      setMsg("");
    }
  };
  return (
    <div className="main__chatcontent">
      <div className="content__body">
        <div className="chat__items">
          {chat.map((itm, index) => {
            return (
              <ChatItem
                animationDelay={index + 2}
                key={itm.key}
                user={itm.type ? itm.type : "me"}
                msg={itm.msg}
                image={itm.image}
              />
            );
          })}
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <img src={attachment} style={{ maxWidth: "1.7em" }} alt="attach" />
          <div className="inputField">
            <input
              type="text"
              placeholder="Enter your message here"
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            />
            <img style={{ maxWidth: "1.2em" }} src={emoji} alt="emoji" />
          </div>
          <button onClick={sendClicked} className="btnSendMsg" id="sendMsgBtn">
            <p>Send</p>
            <img src={send} style={{ maxWidth: "1em" }} alt="send" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatContent;
