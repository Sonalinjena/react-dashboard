import React from "react";
import UserProfile from "./UserProfile";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <UserProfile 
        username="Sonalin" 
        age={22} 
        isAdmin={true} 
      />

      <UserProfile 
        username="Rahul" 
        age={25} 
        isAdmin={false} 
      />

      <UserProfile 
        username="Priya" 
        age={20} 
        isAdmin={true} 
      />

    </div>
  );
};

export default Dashboard;