import React from "react";
import { FavIcon } from "../assets/love-icon.jsx";
import cloud from "../assets/cloud-icon.svg";
import file from "../assets/file-icon.svg";
import excelIcon from "../assets/excel-icon.svg";
import pdfIcon from "../assets/pdf-icon.svg";
import imageIcon from "../assets/image-icon.svg";
import S from "../styles/components/fileCard.module.scss";
import {
  formatDate,
  isImage,
  isDocument,
  getNameWithoutExtension,
} from "../utils";

export const FileCard = ({ data, doubleClickImage }) => {
  return (
    <div className={S.FileCard} onDoubleClick={doubleClickImage}>
      <div className={S.image__container}>
        {isImage(data.name) ? (
          <img src={data?.src} alt="" />
        ) : isDocument(data.name) ? (
          <img src={excelIcon} alt="" className={S.file__icon} />
        ) : (
          <img src={pdfIcon} alt="" className={S.file__icon} />
        )}
        <div className={S.fav__icon}>
          <FavIcon fill={data.favourite && "white"} />
        </div>
        {!isImage(data.name) && (
          <div className={S.bottom__icon}>
            <img src={cloud} alt="" />
            <img src={file} alt="" />
          </div>
        )}
      </div>
      <div className={S.content__container}>
        <div className={S.content}>
          <div
            className={`${S.icon__wrap} ${
              isImage(data.name)
                ? S.bg__image
                : isDocument(data.name)
                ? S.bg__excel
                : S.bg__pdf
            }`}
          >
            <img
              src={
                isImage(data.name)
                  ? imageIcon
                  : isDocument(data.name)
                  ? excelIcon
                  : pdfIcon
              }
              alt=""
            />
          </div>
          <div>
            <p className={S.title}>{getNameWithoutExtension(data.name)}</p>
            <p className={S.date}>{`Added ${formatDate(data.created_at)}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
