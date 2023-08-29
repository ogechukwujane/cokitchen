import React from "react";
import loveIcon from "../assets/love-icon.svg";
import cloud from "../assets/cloud-icon.svg";
import closeIcon from "../assets/close.svg";
import folderIcon from "../assets/folder-icon.svg";
import girl from "../assets/girl-image.svg";

import S from "../styles/components/modal.module.scss";

export const Modal = () => {
  return (
    <div className={S.Modal__Container}>
      <div className={S.content}>
        <div className={S.header__wrap}>
          <div className={S.header__content}>
            <img src={cloud} alt="" />
            <img src={closeIcon} alt="" />
          </div>
        </div>
        <div className={S.image__container}>
          <img src={girl} alt="" />
          <div className={S.fav__icon}>
            <img src={loveIcon} alt="" />
          </div>
        </div>
        <div className={S.bottom__container}>
          <div className={S.bottom__content}>
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
    </div>
  );
};
