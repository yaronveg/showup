import { useSelector, useDispatch } from "react-redux";
import { toggleVisible, changeImg } from "../../app/gallerySlice";
import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

let i = 0;

export default function ProfileGallery({ galleryPictures }) {
  const { index, isShow } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();

  return (
    <div className="profileGallery">
      {galleryPictures.map((pic) => {
        i++;
        return (
          <div
            className="galleryPic"
            key={i}
            style={{ backgroundImage: `url(${pic})` }}
            onClick={() => dispatch(toggleVisible())}
          />
        );
      })}
      {isShow && (
        <Lightbox
          mainSrc={galleryPictures[index]}
          nextSrc={galleryPictures[(index + 1) % galleryPictures.length]}
          prevSrc={
            galleryPictures[
              (index + galleryPictures.length - 1) % galleryPictures.length
            ]
          }
          onCloseRequest={dispatch(toggleVisible())}
          onMovePrevRequest={() =>
            dispatch(
              changeImg(
                (index + galleryPictures.length - 1) % galleryPictures.length
              )
            )
          }
          onMoveNextRequest={() =>
            dispatch(changeImg((index + 1) % galleryPictures.length))
          }
        />
      )}
    </div>
  );
}
