import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export const ButtonVariant = ({ variant, label }) => {
  return (
    <>
      <Button variant={variant} size="medium">
        {label}
      </Button>
    </>
  );
};

ButtonVariant.PropTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
};