import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/UserSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const {users}=useSelector((store)=>store.user);
  console.log(users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return <div>USERlIST
   {
   users.map((item)=>{
    <div>
      
    </div>
   })
   }
  </div>;
};

export default UserList;
