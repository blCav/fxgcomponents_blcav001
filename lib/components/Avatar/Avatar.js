import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";

export const MyAvatar = ({ width, height, alt, imagesurl }) => {
  return (
    <>
      <Avatar alt={alt} src={imagesurl} sx={{ width, height }} />
    </>
  );
};

MyAvatar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  imagesurl: PropTypes.string,
};