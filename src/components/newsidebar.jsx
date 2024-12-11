import React, { useEffect, useState } from "react";

const NewSidebar = ({ role }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (role === "union admin") {
      fetch("/api/user?role=user") // Fetch users for tree-view
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching users:", error));
    }
  }, [role]);

  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      {role === "union admin" && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.fullName} - {user.tunion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewSidebar;
