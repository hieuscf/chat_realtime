import React, { useState } from "react";
import {
  Mic,
  Send,
  Paperclip,
  Search,
  X,
  Home,
  MessageSquare,
  Settings,
  User,
  LogOut,
  File,
  Menu,
} from "lucide-react";
import "./test.css";

function ChatTikoApp() {
  const [message, setMessage] = useState("");
  const [activeChat, setActiveChat] = useState("Adrin Alinejad");

  const users = [
    {
      id: 1,
      name: "Adrin Alinejad",
      status: "online",
      lastMessage: "Sure, I will check your document...",
      time: "06:29 PM",
      avatar: "/api/placeholder/40/40",
      unread: false,
    },
    {
      id: 2,
      name: "David",
      status: "online",
      lastMessage: "Yesterday you said to me, do you remember?",
      time: "04:23 PM",
      avatar: "/api/placeholder/40/40",
      unread: false,
    },
    {
      id: 3,
      name: "Nikhoias",
      status: "online",
      lastMessage: "Sorry, as I said, I can't do much about it...",
      time: "04:25 PM",
      avatar: "/api/placeholder/40/40",
      unread: true,
    },
    {
      id: 4,
      name: "Anna-Hina",
      status: "offline",
      lastMessage: "",
      time: "03:34 PM",
      avatar: "/api/placeholder/40/40",
      unread: false,
    },
    {
      id: 5,
      name: "Maria Kabook",
      status: "offline",
      lastMessage: "Do you know where you going?",
      time: "03:29 PM",
      avatar: "/api/placeholder/40/40",
      unread: false,
    },
    {
      id: 6,
      name: "Rose",
      status: "offline",
      lastMessage: "Yesterday you said to me, do you remember?",
      time: "02:58 PM",
      avatar: "/api/placeholder/40/40",
      unread: false,
    },
    {
      id: 7,
      name: "Mattenzo",
      status: "offline",
      lastMessage: "Sorry, as I said, I can't do much about it...",
      time: "02:54 PM",
      avatar: "/api/placeholder/40/40",
      unread: true,
    },
    {
      id: 8,
      name: "Muhammad Shakri",
      status: "offline",
      lastMessage: "No problem, we can do that tomorrow",
      time: "04:53 PM",
      avatar: "/api/placeholder/40/40",
      unread: false,
    },
    {
      id: 9,
      name: "Ronza",
      status: "offline",
      lastMessage: "Talk to him about projects, value some",
      time: "02:47 PM",
      avatar: "/api/placeholder/40/40",
      unread: true,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Adrin Alinejad",
      content: "Hi buddy, How you doing?",
      timestamp: "04:23 PM",
      isMe: false,
    },
    {
      id: 2,
      sender: "Adrin Alinejad",
      content:
        "I'm waiting for your replay. Can you send it to me by night after that I can check it, and send it back to you. Ok ?",
      timestamp: "04:24 PM",
      isMe: false,
    },
    {
      id: 3,
      sender: "Jerry Nitel",
      content: "Oh, I forget, I'll send it as a Zip file 😊",
      timestamp: "04:25 PM",
      isMe: true,
    },
    {
      id: 4,
      sender: "Jerry Nitel",
      content: "I'm working on it. After I finished, I'll send it to you Jerry",
      timestamp: "04:26 PM",
      isMe: true,
    },
    {
      id: 5,
      sender: "Jerry Nitel",
      content: "and please send me new documentation. Thanks",
      timestamp: "04:26 PM",
      isMe: true,
    },
    {
      id: 6,
      sender: "Adrin Alinejad",
      content: "Ok, I send it just right now, check your email",
      timestamp: "04:53 PM",
      isMe: false,
    },
    {
      id: 7,
      sender: "Adrin Alinejad",
      content: "Thanks 🔥",
      timestamp: "04:53 PM",
      isMe: false,
    },
  ];

  const pinnedFiles = [
    { id: 1, name: "file1.png", thumbnail: "/api/placeholder/50/50" },
    { id: 2, name: "file2.pdf", thumbnail: "/api/placeholder/50/50" },
    { id: 3, name: "file3.jpg", thumbnail: "/api/placeholder/50/50" },
  ];

  return (
    <div className="chat-app-container">
      {/* Header */}
      <header className="app-header">
        <div className="flex items-center justify-between">
          <div className="logo">
            <span>💬</span>
            <span>ChatTiko</span>
          </div>
          <nav className="flex items-center space-x-6">
            <button className="nav-item">Home</button>
            <button className="nav-item active">Chat</button>
            <button className="nav-item">Upgrade</button>
            <button className="nav-item">Setting</button>
            <button className="nav-item">Contact</button>
            <button className="nav-item flex items-center space-x-1">
              <span>Log out</span>
              <LogOut size={16} />
            </button>
          </nav>
        </div>
      </header>

      {/* Status bar */}
      <div className="status-bar">
        <div className="flex justify-between items-center">
          <div className="status-tabs flex space-x-6">
            <button>Public Messages</button>
            <button>Private Messages</button>
          </div>
          <div>
            Your status:{" "}
            <span>
              Hey team, I'm away from laptop, see you after 20 minutes 😊 ✌️
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              Local Time: <span>6:29 PM</span>
            </div>
            <div className="theme-toggle">
              Theme: <span className="mx-1">Dark</span>
              <div className="toggle-track toggle-active">
                <div className="toggle-thumb"></div>
              </div>
              <span className="ml-1">Light</span>
            </div>
            <button className="text-blue-400 hover:text-blue-300">
              Edit Your Profile
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex" style={{ height: "600px" }}>
        {/* Sidebar */}
        <div className="sidebar w-1/4">
          <div className="search-box">
            <Search className="search-icon" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>

          {/* Online users */}
          <div className="user-list-section">
            <h3>Online*</h3>
            <div>
              {users
                .filter((user) => user.status === "online")
                .map((user) => (
                  <button
                    key={user.id}
                    className={`user-item ${
                      activeChat === user.name ? "active" : ""
                    }`}
                    onClick={() => setActiveChat(user.name)}
                  >
                    <div className="avatar-container">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="avatar"
                      />
                      <span
                        className={`status-indicator ${user.status}`}
                      ></span>
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

          {/* Offline users */}
          <div className="user-list-section">
            <h3>Offline*</h3>
            <div>
              {users
                .filter((user) => user.status === "offline")
                .map((user) => (
                  <button
                    key={user.id}
                    className={`user-item ${
                      activeChat === user.name ? "active" : ""
                    }`}
                    onClick={() => setActiveChat(user.name)}
                  >
                    <div className="avatar-container">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="avatar"
                      />
                      <span
                        className={`status-indicator ${user.status}`}
                      ></span>
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

        {/* Chat window */}
        <div className="chat-window w-2/4">
          {/* Chat header */}
          <div className="chat-header">
            <div className="flex items-center">
              <img
                src="/api/placeholder/48/48"
                alt="User avatar"
                className="avatar"
              />
              <h3 className="ml-3 font-medium">{activeChat}</h3>
            </div>
            <div className="chat-header-actions">
              <button>Clear all</button>
              <button>Files</button>
              <button>Profile</button>
            </div>
          </div>

          {/* Messages */}
          <div className="messages-container">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message ${msg.isMe ? "sent" : "received"}`}
              >
                <p>{msg.content}</p>
                <div className="message-time">{msg.timestamp}</div>
              </div>
            ))}
            <div className="message received">
              <div className="audio-player">
                <div className="progress-container">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
                <div className="time-display">
                  <span>0:16</span>
                  <span>1:24</span>
                </div>
              </div>
              <div className="message-time">04:27 PM</div>
            </div>
          </div>

          {/* Message input */}
          <div className="input-container">
            <div className="message-input-wrapper">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a message..."
                className="message-input"
              />
              <div className="input-actions">
                <button className="input-action-button">
                  <Paperclip size={20} />
                </button>
                <button className="input-action-button">
                  <Mic size={20} />
                </button>
              </div>
              <button className="send-button">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* User profile panel */}
        <div className="profile-sidebar w-1/4">
          <div className="profile-header">
            <span>Profile</span>
            <button>Close</button>
          </div>

          <div className="profile-content">
            <img
              src="/api/placeholder/80/80"
              alt="User avatar"
              className="profile-avatar"
            />
            <h3 className="profile-name">Adrin Alinejad</h3>
            <p className="profile-username">@slinejad</p>
          </div>

          <div className="profile-actions">
            <button className="profile-action">
              <div className="action-icon">
                <MessageSquare size={16} />
              </div>
              <span>Chat</span>
            </button>
            <button className="profile-action">
              <div className="action-icon">
                <User size={16} />
              </div>
              <span>Profile</span>
            </button>
            <button className="profile-action">
              <div className="action-icon">
                <Phone size={16} />
              </div>
              <span>Call</span>
            </button>
            <button className="profile-action">
              <div className="action-icon">
                <Menu size={16} />
              </div>
              <span>More</span>
            </button>
          </div>

          <div className="profile-info-section">
            <div className="mb-4">
              <p className="info-label">Display Name</p>
              <p className="info-value">Jerry Nitel</p>
            </div>

            <div className="mb-4">
              <p className="info-label">Email Address</p>
              <p className="info-value">jerrynitel04@gmail.com</p>
            </div>

            <div className="mb-4">
              <p className="info-label">Address</p>
              <p className="info-value">245 Loya, Nia, New York, USA</p>
            </div>

            <div className="mb-4">
              <p className="info-label">Local Time</p>
              <p className="info-value">11:40 AM</p>
            </div>

            <div className="mb-4">
              <p className="info-label">Phone Number</p>
              <p className="info-value">+1732436789</p>
            </div>
          </div>

          <div className="files-section">
            <div className="files-header">
              <h4>Files</h4>
              <button className="view-all">View All</button>
            </div>

            <div className="files-grid">
              {pinnedFiles.map((file) => (
                <div key={file.id} className="file-thumbnail">
                  <img src={file.thumbnail} alt={file.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for phone icon since it's not part of the imported icons
function Phone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

export default ChatTikoApp;