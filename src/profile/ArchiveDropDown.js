import { useState } from "react";
import "./dropDown.css";
import "./profile.css";
const ArchiveDropdown = () => {
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
  const archivedChats = [
    {
      image:
        "https://assets.vogue.com/photos/5876fe0a8a28e998768824d3/4:3/w_795,h_597,c_limit/david-gandy.jpg",
      id: 1,
      name: "Jason Dwarf"
    },
    {
      image:
        "https://images.unsplash.com/photo-1594063596316-aa5f41ceb8dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      id: 2,
      name: "Kamala Harris"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXB4KVC8wH3olpHWzApTqWQBSLXxHHyE07w&usqp=CAU",
      id: 3,
      name: "William Smith"
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
        Archived Conversation
        <div className="chatCount1">{archivedChats.length}</div>
      </div>
      {itemList(archivedChats)}
    </div>
  );
};

export default ArchiveDropdown;
