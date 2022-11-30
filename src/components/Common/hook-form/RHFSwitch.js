import * as React from "react";

import PropTypes from "prop-types";
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Switch, FormControlLabel } from "@mui/material";

// ----------------------------------------------------------------------

RHFSwitch.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default function RHFSwitch({ name, label, ...other }) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      label={label}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Switch {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  );
}
