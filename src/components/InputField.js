import React from "react";
import { FormGroup, TextField } from "@material-ui/core";
import { ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#fff",
  },
  inputLabel: {
    color: "#fff",
  },
  error: {
    color: theme.palette.error.main,
  },
}));

function InputField(props) {
  const classes = useStyles();
  const { form, field, variant, margin, label, autoComplete, type } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div>
      <FormGroup>
        <TextField
          {...field}
          variant={variant}
          margin={margin}
          fullWidth
          id={name}
          label={label}
          autoComplete={autoComplete}
          type={type}
          error={showError ? true : false}
          InputProps={{ className: classes.input }}
          InputLabelProps={{ className: classes.inputLabel }}
        />
        <ErrorMessage name={name}>
          {(msg) => <div className={classes.error}>{msg}</div>}
        </ErrorMessage>
      </FormGroup>
    </div>
  );
}

export default InputField;
