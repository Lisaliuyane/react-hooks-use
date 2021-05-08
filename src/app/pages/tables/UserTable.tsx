import React from "react";
import "./UserTable.less";

const UserTable = (props: any) => (
  <table>
    <thead className="thead-width">
      <tr>
        <th className="th-width">Name</th>
        <th className="th-width">UserName</th>
        <th className="th-width">Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user: any) => (
          <tr key={user.id}>
            <td className="td-width">{user.name}</td>
            <td className="td-width">{user.userName}</td>
            <td className="td-width">
              <button
                className="button-mar"
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Edit
              </button>
              <button onClick={() => props.deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
