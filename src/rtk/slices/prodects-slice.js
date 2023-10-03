import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProdects = createAsyncThunk(
  "prodectsSlice/fetchProdects",
  async () => {
    const res = await fetch(
      "https://amrabdo74.github.io/render-json-server-main-master/db.json"
    );
    const data = await res.json();
    return data.item;
  }
);
export const getspecifiProdect = createAsyncThunk(
    "prodectsSlice/getspecifiProdect",
    async (category,thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI

      const res = await fetch(
        "https://amrabdo74.github.io/render-json-server-main-master/db.json"
      );
      const data = await res.json();
      return data.item.filter((product) => product.category === category);
    }
  );
  export const filtersubcategorys = createAsyncThunk(
    "prodectsSlice/filtersubcategorys",
    async (subcategory,thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI
      const res = await fetch(
        "https://amrabdo74.github.io/render-json-server-main-master/db.json"
      );
      const data = await res.json();
      return data.item.filter((product) => product.subcategory === subcategory );
    }
  );

export const prodectsSlice = createSlice({
  initialState:[],
  name: "prodectsSlice",
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchProdects.fulfilled,(state, action) => {
        return state = action.payload
    });
    builder.addCase(getspecifiProdect.fulfilled,(state, action) => {
        return state = action.payload
    });
    builder.addCase(filtersubcategorys.fulfilled,(state, action) => {
        return state = action.payload
    });

}
});
export const { } = prodectsSlice.actions;
export default prodectsSlice.reducer;
