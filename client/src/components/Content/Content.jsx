import React  , {useState} from 'react'
import { Search } from "lucide-react"; // hoặc @mui/icons-material nếu bạn dùng thư viện khác
import "./Content.scss"
const Content = () => {
  //const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState("Adrin Alinejad");
  const users = [
    {
      id: 1,
      name: "Adrin Alinejad",
      status: "online",
      lastMessage: "Sure, I will check your document...",
      time: "06:29 PM",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      unread: false,
    },
    {
      id: 2,
      name: "David",
      status: "online",
      lastMessage: "Yesterday you said to me, do you remember?",
      time: "04:23 PM",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      unread: false,
    },
    {
      id: 3,
      name: "Nikhoias",
      status: "online",
      lastMessage: "Sorry, as I said, I can't do much about it...",
      time: "04:25 PM",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      unread: true,
    },
    {
      id: 4,
      name: "Anna-Hina",
      status: "offline",
      lastMessage: "",
      time: "03:34 PM",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      unread: false,
    },
    {
      id: 5,
      name: "Maria Kabook",
      status: "offline",
      lastMessage: "Do you know where you going?",
      time: "03:29 PM",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      unread: false,
    },
    {
      id: 6,
      name: "Rose",
      status: "offline",
      lastMessage: "Yesterday you said to me, do you remember?",
      time: "02:58 PM",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      unread: false,
    },
    {
      id: 7,
      name: "Mattenzo",
      status: "offline",
      lastMessage: "Sorry, as I said, I can't do much about it...",
      time: "02:54 PM",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      unread: true,
    },
    {
      id: 8,
      name: "Muhammad Shakri",
      status: "offline",
      lastMessage: "No problem, we can do that tomorrow",
      time: "04:53 PM",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      unread: false,
    },
    {
      id: 9,
      name: "Ronza",
      status: "offline",
      lastMessage: "Talk to him about projects, value some",
      time: "02:47 PM",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      unread: true,
    },
  ];

  // const messages = [
  //   {
  //     id: 1,
  //     sender: "Adrin Alinejad",
  //     content: "Hi buddy, How you doing?",
  //     timestamp: "04:23 PM",
  //     isMe: false,
  //   },
  //   {
  //     id: 2,
  //     sender: "Adrin Alinejad",
  //     content:
  //       "I'm waiting for your replay. Can you send it to me by night after that I can check it, and send it back to you. Ok ?",
  //     timestamp: "04:24 PM",
  //     isMe: false,
  //   },
  //   {
  //     id: 3,
  //     sender: "Jerry Nitel",
  //     content: "Oh, I forget, I'll send it as a Zip file 😊",
  //     timestamp: "04:25 PM",
  //     isMe: true,
  //   },
  //   {
  //     id: 4,
  //     sender: "Jerry Nitel",
  //     content: "I'm working on it. After I finished, I'll send it to you Jerry",
  //     timestamp: "04:26 PM",
  //     isMe: true,
  //   },
  //   {
  //     id: 5,
  //     sender: "Jerry Nitel",
  //     content: "and please send me new documentation. Thanks",
  //     timestamp: "04:26 PM",
  //     isMe: true,
  //   },
  //   {
  //     id: 6,
  //     sender: "Adrin Alinejad",
  //     content: "Ok, I send it just right now, check your email",
  //     timestamp: "04:53 PM",
  //     isMe: false,
  //   },
  //   {
  //     id: 7,
  //     sender: "Adrin Alinejad",
  //     content: "Thanks 🔥",
  //     timestamp: "04:53 PM",
  //     isMe: false,
  //   },
  // ];

  // const pinnedFiles = [
  //   { id: 1, name: "file1.png", thumbnail: "/api/placeholder/50/50" },
  //   { id: 2, name: "file2.pdf", thumbnail: "/api/placeholder/50/50" },
  //   { id: 3, name: "file3.jpg", thumbnail: "/api/placeholder/50/50" },
  // ];
  // Lọc và sắp xếp danh sách người dùng
  const onlineUsers = users.filter((user) => user.status === "online");
  const offlineUsers = users.filter((user) => user.status === "offline");
  const sortedUsers = [...onlineUsers, ...offlineUsers]; // Gộp online và offline, online lên trước
  return (
    <div className="main-content">
      <div className="content-container">
        <div className="sidebar">
          <div className="search-box">
            <Search className="search-icon" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>

          <div className="user-list-section">
            <h3>Message*</h3>
            <div className='user-list-box'>
              <div>
                {sortedUsers.map((user) => (
                  <button
                    key={user.id}
                    className={`user-item ${
                      activeChat === user.name ? "active" : ""
                    }`}
                    onClick={() => setActiveChat(user.name)}
                  >
                    <div className="avatar-container">
                      <img src={user.avatar}  className="avatar" />
                      <span className={`status-indicator ${user.status}`}></span>
                    </div>
                    <div className="user-info">
                      <div className="user-name-time">
                        <span className="user-name">{user.name}</span>
                        <span className="message-time">{user.time}</span>
                      </div>
                      <p className="last-message">{user.lastMessage}</p>
                    </div>
                    {user.unread && <span className="unread-indicator"></span>}
                  </button>
                ))}
              </div>
                        </div>
            </div>
        </div>
        <div className="chat-windown">
          <h1>chat</h1>
        </div>
        <div className="content-profile">
          <h1>pro</h1>
        </div>
      </div>
    </div>
  );
}

export default Content
