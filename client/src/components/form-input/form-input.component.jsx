import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input onChange={handleChange} className="form-input" {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : null
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
/*Selectively render if the value (whenever the user has typed anything, props.value.length) is in, 
then apply the class of shrink
the label will always have a class of form-input-label*/
export default FormInput;
