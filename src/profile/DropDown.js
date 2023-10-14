import { useState } from "react";
import "./dropDown.css";
import "./profile.css";
const Dropdown = () => {
  const selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };
  const allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      name: "Henry Boyd"
    },
    {
      image:
        "https://files.oyebesmartest.com/uploads/preview/indian-girl-model-photography-photoshoot-hd--(4)x2nnvj2keb.jpg",
      id: 2,
      name: "Martha Curtis"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 3,
      name: "Phillip Tucker"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 4,
      name: "Christine Reid"
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 5,
      name: "Jerry Guzman"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 6,
      name: "Russell Williams"
    }
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const itemList = (props) => {
    const list = props.map((item) => (
      <div
        onClick={selectChat}
        className={`chatlist__item ${item.active ? item.active : ""} `}
      >
        <div className="avatar">
          <div className="avatar-img">
            <img src={item.image} alt="#" />
          </div>
        </div>

        <div className="userMeta">
          <p>{item.name}</p>
        </div>
      </div>
    ));

    return <div className="dropdown__items"> {list} </div>;
  };

  return (
    <div className={isOpen ? "dropdown active" : "dropdown"}>
      <div className="dropdown__text" onClick={handleClick}>
        Active Conversation
        <div className="chatCount">{allChatUsers.length}</div>
      </div>
      {itemList(allChatUsers)}
    </div>
  );
};

export default Dropdown;
