
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import data from '../dataStore.json'

export const fetchPhones = createAsyncThunk(
  'slice/fetchPhones',
  async function () {}
)

const initialState = {
  phones: [],
  isLoading: false,
  error: false
}
export const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      console.log(state.isLoading);
    },
    stopLoading: (state) => {
      state.isLoading = false
    },
  },

})

export const { startLoading, stopLoading } = slice.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value

export default slice.reducer