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
    future: true,
    image: "../src/assets/images/image-11.jpeg",
  },
];

function App() {
  return (
    <div className="container mx-auto px-6">
      <h1 className="text-3xl font-bold  text-purple-600">Image Galary</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((item, index) =>
          item.future ? (
            <div
              key={index}
              className="order-first md:col-span-2 md:row-span-2"
            >
              <img
                className="max-w-full max-h-full rounded-lg border-solid border-2 border-sky-500"
                src={`${item.image}`}
              />
            </div>
          ) : (
            <div key={index}>
              <img
                className="max-w-full max-h-full rounded-lg border-solid border-2 border-sky-500"
                src={`${item.image}`}
              />
            </div>
          )
        )}

        <div className="order-last rounded-lg border-solid border-2 border-sky-500">
          Add Image
        </div>
      </div>
    </div>
  );
}

export default App;
