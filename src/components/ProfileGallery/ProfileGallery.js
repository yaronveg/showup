let i = 0;

export default function ProfileGallery({ arr }) {
  return (
    <div className="profileGallery">
      {arr.map((pic) => {
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
