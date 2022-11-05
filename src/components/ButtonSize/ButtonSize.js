import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export const ButtonSize = ({ size, label }) => {
  return (
    <>
      <Button variant="contained" size={size}>
        {label}
      </Button>
    </>
  );
};

ButtonSize.PropTypes = {
  size: PropTypes.string,
  label: PropTypes.string,
};