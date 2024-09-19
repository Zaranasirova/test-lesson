import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/UserSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.user);
  console.log(users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      USERlIST
      
      {users.map((item) => (
        <div style={{ display: "flex", gap: "20px" }} key={item}>
          <p>name:{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
