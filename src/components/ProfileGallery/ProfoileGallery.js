let i = 0;

export default function ProfileGallery({ arr }) {
  return arr.map((pic) => {
    i++;
    console.log(pic);
    return <img src={pic} alt="profilePic" key={i} />;
  });
}
