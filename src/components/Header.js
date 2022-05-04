// import React from "react";
import PropTypes from "prop-types"; // impt
import Button from "./Button";

// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//     </header>
//   );
// };
const Header = ({ title }) => {
  const onClick = () => {
    console.log("click from parent");
  };
  return (
    <header className="header">
      {/* <h1 style={{ color: "red", backgroundColor: "blue" }}>{title}</h1> */}
      {/* <h1 style={headingStyle}>{title}</h1> */}
      {/* <button className="btn">Add</button> */}
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = {
//   color: "red",
//   backgroundColor: "blue",
// };

export default Header;
