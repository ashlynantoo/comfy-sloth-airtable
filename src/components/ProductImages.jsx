import { useState } from "react";
import Wrapper from "../assets/wrappers/ProductImages";

const ProductImages = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <Wrapper>
      <img src={mainImage.url} alt={mainImage.filename} className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          const { id, url, filename } = image;
          return (
            <img
              key={id}
              src={url}
              alt={filename}
              className={url === mainImage.url ? "active" : null}
              onClick={() => {
                setMainImage(images[index]);
              }}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductImages;
