import React, { useEffect, useState } from "react";
import useFetchCustom from "./useFetchCustom";
import PropTypes from "prop-types";
import DefaultImage from "./assets/myDefaultImage.jpg";

const CustomHook = () => {
  const { isLoading, data } = useFetchCustom(
    "https://course-api.com/react-prop-types-example"
  );

  return (
    <div>
      {
        <>
          {isLoading ? (
            <h1>Loading....</h1>
          ) : (
            data.map((item) => {
              return <Product key={item.id} {...item} />;
            })
          )}
        </>
      }
    </div>
  );
};

const Product = ({ name, image, price }) => {
  const url = image && image.url;
  const url1 = image ? image.url : DefaultImage;
  return (
    <div>
      {/* <img src={url || DefaultImage} alt={name} /> */}
      <img src={url1} alt={name} />
      <h3>{name}</h3>
      <p>{price || 39.9}</p>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   id: new Date().getTime().toString(),
//   name: "Furniture",
//   image: { url: DefaultImage },
//   price: 3.99,
// };
export default CustomHook;
