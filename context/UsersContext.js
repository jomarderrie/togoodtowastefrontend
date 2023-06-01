import React, { useState } from "react";
export const UserContext = React.createContext("user");

export function UsersContext({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // let users = userData;

  
  return (
    <UserContext.Provider value={{ user, setUser, users, isAuthenticated: !!user, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
}
