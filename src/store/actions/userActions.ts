import { AppDispatch } from "../store";
import { IRegisterUser } from "../../types/User";
import { addUser, deleteUser } from "../slices/userSlice";

export const addNewUser = (data: IRegisterUser) => (dispatch:AppDispatch) => {
    dispatch(addUser(data));
}

export const removeUser = (email: string) => (dispatch: AppDispatch) => {
    dispatch(deleteUser(email));
}