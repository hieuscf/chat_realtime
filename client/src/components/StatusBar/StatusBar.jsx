import React, { useEffect, useState }  from "react";
import "./StatusBar.scss";

const StatusBar = () => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
      const updateTimeAndDate = () => {
        const now = new Date();

        // Lấy giờ hiện tại
        const formattedTime = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        // Lấy ngày hiện tại
        const formattedDate = now.toLocaleDateString("en-US", {
          weekday: "long", // Monday
          month: "short", // Apr
          day: "numeric", // 22
        });

        setTime(formattedTime);
        setDate(formattedDate);
      };

      updateTimeAndDate(); // gọi ngay
      const interval = setInterval(updateTimeAndDate, 1000); // cập nhật mỗi giây

      return () => clearInterval(interval); // cleanup
    }, []);
  return (
    <div className="status-bar">
      <div className="status-container">
        <div className="status-localtime">
          <span>{date}</span> Local Time: <span>{time}</span>
        </div>
        <span>|</span>
        <div className="status-story">
          Your status:{" "}
          <span>
            Hey team, I'm away from laptop, see you after 20 minutes 😊 ✌️
          </span>
        </div>
        <span>|</span>
        <div className="status-profile">Your profile</div>
      </div>
    </div>
  );
};

export default StatusBar;
