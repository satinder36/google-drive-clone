import React, { useEffect, useState } from "react";
import FileItem from "./FileItem";
import { storage, db } from "../firebase";
import "../styles/Newfile.css";
import FileCard from "./FileCard";
function FilesView() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    db.collection("myFiles").onSnapshot((snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, []);
  console.log(files, "files***");
  return (
    <div className="fileView">
      <div className="fileView__row">
        {files.slice(0, 5).map(({ id, item }) => {
          return <FileCard name={item.caption} url={item.fileUrl}/>;
        })}
      </div>
      <div className="fileView__titles">
        <div className="fileView__titles--left">
          <p>Name</p>
        </div>
        <div className="fileView__titles--right">
          <p>Last modified</p>
          <p>File size</p>
        </div>
      </div>
      {files.map(({ id, item }) => (
        <FileItem
          id={id}
          caption={item.caption}
          timestamp={item.timestamp}
          fileUrl={item.fileUrl}
          size={item.size}
        />
      ))}
    </div>
  );
}

export default FilesView;
