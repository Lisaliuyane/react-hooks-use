import React, { useState, useEffect } from "react";
import "./AddUserForm.less";

const EditUserForm = (props: any) => {
  const [user, setUser] = useState(props.currentUser);
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  return (
    <form
      className="form-containal"
      onSubmit={(event) => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <p>
        <label className="label-width">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </p>
      <p>
        <label className="label-width">Username</label>
        <input
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleInputChange}
        />
      </p>
      <div className="add-btn">
        <button>Update user</button>
        <button onClick={() => props.setEditing(false)}>Cancel</button>
      </div>
    </form>
  );
};

export default EditUserForm;
