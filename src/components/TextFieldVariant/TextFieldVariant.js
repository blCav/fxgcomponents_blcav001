import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export const TextFieldVariant = ({ id, variant, label, placeholder }) => {
  return (
    <>
      <div>
          <TextField
            id={id}
            variant={variant}
            label={label}
            defaultValue={placeholder}
          />
        </div>
    </>
  );
};

TextFieldVariant.PropTypes = {
  id: PropTypes.string,
  variant: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};