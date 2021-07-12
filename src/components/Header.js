import React, { useEffect, useState } from "react";
import googleDriveLogo from "../media/googleDriveLogo.png";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../styles/Header.css";
import { storage, db } from "../firebase";
import FileItem from "./FileItem";
function Header({ userPhoto }) {
  // const [files,setFiles] =useState([]);

  // useEffect(()=>{
  //   db.collection("myFiles").onSnapshot((snapshot)=>{
  //     setFiles(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         item: doc.data(),
  //       }))
  //     );
  //   })
  // },[])
// const [title,setTitle]=useState("");
//   const handleChange=(e)=>{
//       setTitle("Search is not functional");
//   }
  return (
    <div className="header">
      <div className="header_logo">
        <img src={googleDriveLogo} width="200px" height="200px"></img>
        <span>Drive</span>
      </div>
      <div className="header_searchContainer">
        <div className="header_searchBar">
          <SearchIcon />
          <input disabled type="text" placeholder="Search" ></input>
          
        </div>
      </div>

      <div className="header_icons"></div>
      <img src={userPhoto} alt="User"></img>
      
    </div>
  );
}

export default Header;
