import React from "react";
import folderIcon from "../assets/folder-icon.svg";
import loveIcon from "../assets/love-icon.svg";
import cloud from "../assets/cloud-icon.svg";
import file from "../assets/file-icon.svg";
import girl from "../assets/girl-image.svg";
import S from "../styles/components/fileCard.module.scss";
export const FileCard = () => {
  return (
    <div className={S.FileCard}>
      <div className={S.image__container}>
        <img src={girl} alt="" />
        <div className={S.fav__icon}>
          <img src={loveIcon} alt="" />
        </div>
        <div className={S.bottom__icon}>
          <img src={cloud} alt="" />
          <img src={file} alt="" />
        </div>
      </div>
      <div className={S.content__container}>
        <div className={S.content}>
          <div className={S.icon__wrap}>
            <img src={folderIcon} alt="" />
          </div>
          <div>
            <p className={S.title}>Brunch with friends</p>
            <p className={S.date}>Added 13th July, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};
