import React from "react";
import "../../css/components/user.scss";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../store/actions/userActions";
import { IRegisterUser } from "../../types/User";
import { AppDispatch } from "../../store/store";

const User = () => {
  const dispatch = useDispatch<AppDispatch>();

  const clearInputs = (e: any) => {
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.password.value = "";
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data: IRegisterUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
    };
    dispatch(addNewUser(data));
    clearInputs(e);
  };

  return (
    <>
      <div className="user">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Register User</h2>
          <div className="form-input">
            <label htmlFor="">
              First name <span className="required">*</span>
            </label>
            <input type="text" name="name" placeholder="Enter name" required />
          </div>

          <div className="form-input">
            <label htmlFor="">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-input">
            <label htmlFor="">
              Phone number <span className="required">*</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="form-input">
            <label htmlFor="">
              Password <span className="required">*</span>
            </label>
            <input
              type="text"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default User;
