import React from "react";

const displayTitle = (e) => {
  console.log(e.target.innerText);
};
const Book = (props) => {
  // console.log(props);
  const { image, author, title } = props;
  return (
    <div className="book">
      <img src={image} alt="" />
      <h3
        onClick={(e) => {
          // console.log(e);
          displayTitle(e);
        }}
      >
        {title}
      </h3>
      <h6
        onMouseEnter={(e) => {
          // console.log(e);
          displayTitle(e);
        }}
      >
        {author}
      </h6>
      <p>{props.children}</p>
      {/* <p>{props.job}</p> */}
      {/* <p>{job}</p> */}
    </div>
  );
};

export default Book;
