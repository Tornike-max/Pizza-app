import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../data/locationApi";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchPosition = createAsyncThunk(
  "user/fetchPosition",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  }
);

const initialState = {
  position: {},
  address: "",
  error: "",
  status: "loading",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosition.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPosition.fulfilled, (state, action) => {
      state.status = "idle";
      state.position = action.payload.position;
      state.address = action.payload.address;
    });
    builder.addCase(fetchPosition.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

export default userSlice.reducer;
