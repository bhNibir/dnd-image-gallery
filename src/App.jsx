const images = [
  {
    image: "../src/assets/images/image-1.webp",
  },
  {
    image: "../src/assets/images/image-2.webp",
  },
  {
    image: "../src/assets/images/image-3.webp",
  },
  {
    image: "../src/assets/images/image-4.webp",
  },
  {
    image: "../src/assets/images/image-5.webp",
  },
  {
    image: "../src/assets/images/image-6.webp",
  },
  {
    image: "../src/assets/images/image-7.webp",
  },
  {
    image: "../src/assets/images/image-8.webp",
  },
  {
    image: "../src/assets/images/image-9.webp",
  },
  {
    image: "../src/assets/images/image-10.jpeg",
  },
  {
    image: "../src/assets/images/image-11.jpeg",
  },
];

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold  text-purple-600">Image Galary</h1>

      {images.map((item, index) => (
        <img key={index} src={`${item.image}`} />
      ))}
    </>
  );
}

export default App;
