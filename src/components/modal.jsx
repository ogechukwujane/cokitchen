import React from "react";
import cloud from "../assets/cloud-icon.svg";
import closeIcon from "../assets/close.svg";
import imageIcon from "../assets/image-icon.svg";

import S from "../styles/components/modal.module.scss";
import { FavIcon } from "../assets/love-icon";
import { formatDate, getNameWithoutExtension } from "../utils";

export const Modal = ({ data, onClickModal }) => {
  return (
    <>
      <div className={S.Modal__Container}>
        <div className={S.content}>
          <div className={S.header__wrap}>
            <div className={S.header__content}>
              <img src={cloud} alt="" />
              <img src={closeIcon} alt="" onClick={onClickModal} />
            </div>
          </div>
          <div className={S.image__container}>
            <img src={data.src} alt="" />
            <div className={S.fav__icon}>
              <FavIcon />
            </div>
          </div>
          <div className={S.bottom__container}>
            <div className={S.bottom__content}>
              <div className={S.icon__wrap}>
                <img src={imageIcon} alt="" />
              </div>
              <div>
                <p className={S.title}>{getNameWithoutExtension(data.name)}</p>
                <p className={S.date}>{`Added ${formatDate(
                  data.created_at
                )}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
