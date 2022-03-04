import { useSelector, useDispatch } from "react-redux";
import { showByIndex, hide, changeImg } from "../../app/gallerySlice";
import React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

export default function ProfileGallery({ galleryPictures }) {
  const { index, isShow } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();

  return (
    <div className="profileGallery">
      {galleryPictures.map((pic) => {
        const currI = galleryPictures.indexOf(pic);
        return (
          <div
            className="galleryPic"
            key={currI}
            style={{ backgroundImage: `url(${pic})` }}
            onClick={() => dispatch(showByIndex(currI))}
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
          onCloseRequest={() => dispatch(hide())}
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
