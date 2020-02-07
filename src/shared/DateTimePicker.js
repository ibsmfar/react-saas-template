import React from "react";
import PropTypes from "prop-types";
import { DateTimePicker as DTPicker } from "@material-ui/pickers";
import AccessTime from "@material-ui/icons/AccessTime";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import DateRange from "@material-ui/icons/DateRange";
import {
  withTheme,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

const Theme2 = theme =>
  createMuiTheme({
    ...theme,
    overrides: {
      MuiOutlinedInput: {
        root: {
          width: 190,
          "@media (max-width:  400px)": {
            width: 160
          },
          "@media (max-width:  360px)": {
            width: 140
          },
          "@media (max-width:  340px)": {
            width: 120
          }
        },
        input: {
          padding: "9px 14.5px"
        }
      }
    }
  });

function DateTimePicker(props) {
  const { disabled, value, onChange } = props;
  return (
    <MuiThemeProvider theme={Theme2}>
      <DTPicker
        inputVariant="outlined"
        leftArrowIcon={<KeyboardArrowLeft />}
        rightArrowIcon={<KeyboardArrowRight />}
        timeIcon={<AccessTime />}
        dateRangeIcon={<DateRange />}
        format="yyyy/MM/dd hh:mm a"
        variant="outlined"
        className="w-100"
        disabled={disabled}
        value={value}
        onChange={onChange}
        {...props}
      />
    </MuiThemeProvider>
  );
}

DateTimePicker.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func
};

export default withTheme(DateTimePicker);