import React, { useState } from "react";
import UserTable from "./UserTable";
import AddUserForm from "../forms/AddUserForm";
import EditUserForm from "../forms/EditUserForm";

const TableIndex = () => {
  const userData: any = [
    { id: 1, name: "Tania", userName: "floppydiskette" },
    { id: 2, name: "Craig", userName: "siliconeidolon" },
    { id: 3, name: "Ben", userName: "benisphere" },
  ];
  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", userName: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const addUser = (user: any) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = (id: string) => {
    setUsers(users.filter((user: any) => user.id !== id));
    setEditing(false);
  };
  const editRow = (user: any) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, userName: user.userName });
  };
  const updateUser = (id: string, updatedUser: any) => {
    setEditing(false);
    setUsers(users.map((user: any) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h2>CRUD App with Hooks</h2>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>view users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default TableIndex;
