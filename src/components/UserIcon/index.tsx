import React from "react";
import "./usericon.css";
function UserIcon({ name, available }: { name: string; available: boolean }) {
  const text = React.useMemo(() => {
    return name
      .split(" ")
      .map((item: string) => item[0])
      .join("");
  }, [name]);

  return (
    <div className="usericon-container">
      <img
        src="https://t3.ftcdn.net/jpg/05/70/92/72/360_F_570927210_vhObXb7oDTx5Y4VUu9BUO9pCe7Q0mj09.jpg"
        alt={text}
        className="usericonImage"
      />
      <div className={`user-status ${available ? "available" : ""}`}></div>
    </div>
  );
}

export default UserIcon;
