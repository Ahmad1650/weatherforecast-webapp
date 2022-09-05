import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const zipCodes = [{ label: "43730" }];

const SearchByZipCode = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={zipCodes}
      sx={{ width: "100%" }}
      renderInput={(params) => (
        <TextField {...params} label="Search zip code" />
      )}
    />
  );
};
export default SearchByZipCode;
