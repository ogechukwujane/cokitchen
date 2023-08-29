import React from "react";
import FolderIcon from "../assets/folder-icon.svg";
import S from "../styles/components/folderCard.module.scss";

export const FolderCard = () => {
  return (
    <div className={S.FolderCard}>
      <div className={S.icon__wrap}>
        <img src={FolderIcon} alt="" />
      </div>
      <div className={S.text__wrap}>
        <p className={S.title}>Brunch Memories villa</p>
        <p className={S.text}>10mb</p>
      </div>
    </div>
  );
};
