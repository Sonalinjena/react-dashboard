import React from "react";

const UserProfile = ({ username, age, isAdmin = false }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <h3>Name: {username}</h3>
      <p>Age: {age}</p>
      <p>Role: {isAdmin ? "Admin" : "User"}</p>
    </div>
  );
};

export default UserProfile;