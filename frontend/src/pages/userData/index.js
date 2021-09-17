import React, { useEffect } from "react";
import { useFetchAllUsers } from "../../hooks/users/useUsers";
import Table from "./table";
import LocalStorageService from "../../utils/localStorageService";
import "./style.css";
import "./style.css";
import { Redirect } from 'react-router-dom'

export default function Users() {
  const { data } = useFetchAllUsers();
  const localStorageService = LocalStorageService.getService();
  const getCurrentUser = localStorageService.getCurrentUser() ? localStorageService.getCurrentUser() : "";

  const isAdmin = getCurrentUser.user.is_admin;
  return (
    <>
      {
        isAdmin && isAdmin === "1" ? <Table data={data?.data} />
          : <Redirect to='/' />
      }



    </>
  );
}
