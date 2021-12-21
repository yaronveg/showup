let i = 0;

export default function ProfileGallery({ galleryPictures }) {
  return (
    <div className="profileGallery">
      {galleryPictures.map((pic) => {
        i++;
        return (
          <div
            className="galleryPic"
            key={i}
            style={{ backgroundImage: `url(${pic})` }}
          />
        );
      })}
    </div>
  );
}
