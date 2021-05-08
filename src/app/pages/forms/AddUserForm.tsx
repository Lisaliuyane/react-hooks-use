import React, { useState } from "react";
import "./AddUserForm.less";

const AddUserForm = (props: any) => {
  const initialFormState = { id: null, name: "", userName: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <form
      className="form-containal"
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.userName) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <p>
        <label className="label-width">Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </p>

      <p>
        <label className="label-width">UserName:</label>
        <input
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleInputChange}
        />
      </p>
      <div className="add-btn">
        <button>Add new user</button>
      </div>
    </form>
  );
};

export default AddUserForm;
