import React from "react";
import FolderIcon from "../assets/folder-icon.svg";
import S from "../styles/components/folderCard.module.scss";
import { formatDate } from "../utils";

export const FolderCard = ({ data ,handleDoubleClick}) => {
  return (
    <div className={S.FolderCard} onDoubleClick={handleDoubleClick}>
      <div className={S.icon__wrap}>
        <img src={FolderIcon} alt="" />
      </div>
      <div className={S.text__wrap}>
        <p className={S.title}>{data.name}</p>
        <p className={S.text}>{formatDate(data.created_at)}</p>
      </div>
    </div>
  );
};
