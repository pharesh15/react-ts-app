import React from "react";
import "../../css/components/card.scss";
import { IRegisterUser } from "../../types/User";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/actions/userActions";
import { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";

const Card = (data: IRegisterUser) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleUpdate = (email: string) => {
    navigate(`/`);
  };

  const handleRemove = (email: string) => {
    dispatch(removeUser(email));
  };

  return (
    <>
      <div className="card">
        <p>{data.name}</p>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p>{data.password}</p>
        <div>
          <button
            className="btn-update"
            onClick={() => handleUpdate(data.email)}
          >
            Update
          </button>
          <button
            className="btn-delete"
            onClick={() => handleRemove(data.email)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
