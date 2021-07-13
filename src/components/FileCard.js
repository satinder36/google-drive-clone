import React from "react";
import "../styles/FileCard.css";

import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const FileCard = ({ name, url }) => {
  return (
    <div className="fileCard">
      <a href={url} target="_blank" download>
        <div className="fileCard--top">
          <InsertDriveFileIcon style={{ fontSize: 130 }} />
        </div>

        <div className="fileCard--bottom">
          <p>{name}</p>
        </div>
      </a>
    </div>
  );
};

export default FileCard;
