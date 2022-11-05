import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export const MyTextField = ({ id, label, placeholder, helperText }) => {
  return (
    <>
      <div>
          <TextField
            id={id}
            variant="outlined"
            label={label}
            defaultValue={placeholder}
            helperText={helperText}
          />
        </div>
    </>
  );
};

MyTextField.PropTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
};