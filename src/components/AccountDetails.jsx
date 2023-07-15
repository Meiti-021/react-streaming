import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "../services/countries";
const years = [
  {
    label: 2023,
  },
  {
    label: 2024,
  },
  {
    label: 2025,
  },
  {
    label: 2026,
  },
  {
    label: 2027,
  },
  {
    label: 2028,
  },
  {
    label: 2029,
  },
  {
    label: 2030,
  },
];
const month = [
  { label: "January" },
  { label: "February" },
  { label: "March" },
  { label: "April" },
  { label: "May" },
  { label: "June" },
  { label: "July" },
  { label: "August" },
  { label: "September" },
  { label: "October" },
  { label: "November" },
  { label: "December" },
];
import PropTypes from "prop-types";
const AccountDetails = ({ myPlan }) => {
  return (
    <form className="h-full mt-10 w-full flex flex-col 2xl:items-start 2xl:flex-row 2xl:gap-10 justify-center items-center">
      <div className="flex flex-col w-full">
        <div className="px-5 py-10 bg-black w-full">
          <p className="text-lg font-semibold mb-2">Account Information</p>
          <p className="text-sm mb-7">Already have an account? Log in here</p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                UserName <sup>*</sup>
              </p>
              <input
                type="text"
                required
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                Password <sup>*</sup>
              </p>
              <input
                type="text"
                required
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                Confirm Password <sup>*</sup>
              </p>
              <input
                type="text"
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                Email Address <sup>*</sup>
              </p>
              <input
                type="text"
                required
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                Confirm Email Addrlight-red <sup>*</sup>
              </p>
              <input
                type="text"
                required
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
          </div>
        </div>
        <div className="px-5 pb-10 bg-black w-full">
          <p className="text-lg font-semibold mb-5">Billing Information</p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                First Name <sup>*</sup>
              </p>
              <input
                type="text"
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                Last Name <sup>*</sup>
              </p>
              <input
                type="text"
                required
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                Address 1 <sup>*</sup>
              </p>
              <input
                type="text"
                required
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <p className="">Address 2</p>
              <input
                type="text"
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                City<sup>*</sup>
              </p>
              <input
                type="text"
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                State<sup>*</sup>
              </p>
              <input
                type="text"
                required
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                Postal Code<sup>*</sup>
              </p>
              <input
                type="text"
                required
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                Country<sup>*</sup>
              </p>
              <Autocomplete
                id="country-select-demo"
                aria-required
                sx={{
                  width: "100%",
                  backgroundColor: "#1A1A1A",
                }}
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                      style: {
                        color: "white",
                      },
                    }}
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                Phone<sup>*</sup>
              </p>
              <input
                type="text"
                required
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
          </div>
        </div>
      </div>
      {myPlan === "Free" ? (
        <div className="bg-black max-w-md flex flex-col gap-4 w-full p-5 pb-10 ">
          <p className="text-xl">Membership Level</p>
          <p className=" border-b-1 border-gray pb-7">
            You have selected the Free membership level.
          </p>
          <button className="bg-light-red h-12 mt-4 rounded-md ">
            CheckOut
          </button>
        </div>
      ) : (
        <div className="bg-black max-w-md flex flex-col gap-4 w-full p-5 pb-10 ">
          <p className="text-xl">Membership Level</p>
          <p className=" border-b-1 border-gray pb-7">
            You have selected the {myPlan} membership level.
          </p>
          <p className="text-xl">Payment Information</p>
          <p className="text-xs italic mb-5">We Accept Visa and Master Card</p>
          <div className="flex flex-col gap-3 mb-5">
            <p className="">
              Card Number<sup>*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
            />
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <p className="">
              Expiration Date<sup>*</sup>
            </p>
            <div className="flex gap-2">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={years}
                sx={{ width: "100%", backgroundColor: "#1A1A1A" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Year"
                    sx={{
                      color: "white",
                      "& .MuiFormLabel-root": {
                        color: "#A1A1A1",
                      },
                    }}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                      style: {
                        color: "white",
                      },
                    }}
                  />
                )}
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={month}
                sx={{ width: "100%", backgroundColor: "#1A1A1A" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Month"
                    sx={{
                      color: "white",
                      "& .MuiFormLabel-root": {
                        color: "#A1A1A1",
                      },
                    }}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                      style: {
                        color: "white",
                      },
                    }}
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <p className="">
                Security Code (CVC)<sup>*</sup>
              </p>
              <input
                type="text"
                placeholder="XXX"
                required
                className="w-full h-14 border-none outline-none focus:outline-1 focus:outline-light-red transition-all duration-700 p-2 bg-dark-gray"
              />
            </div>
          </div>
          <button className="bg-light-red h-12  rounded-md " type="submit">
            Make Payment
          </button>
        </div>
      )}
    </form>
  );
};

AccountDetails.propTypes = {
  myPlan: PropTypes.string,
};
export default AccountDetails;
