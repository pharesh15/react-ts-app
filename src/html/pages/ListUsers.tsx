import React from "react";
import Card from "../components/Card";
import "../../css/pages/listUsers.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { UserState } from "../../store/slices/userSlice";

const ListUsers = () => {
  const { users, loading, success } = useSelector(
    (state: RootState) => state.users
  );
  return (
    <>
      <div className="show">
        {users?.length > 0 ? (
          <>
            {users?.map((user, index) => {
              return (
                <>
                  <Card key={index} {...user} />
                </>
              );
            })}
          </>
        ) : (
          <>
            <h2>Data Not Found</h2>
          </>
        )}
      </div>
    </>
  );
};

export default ListUsers;
