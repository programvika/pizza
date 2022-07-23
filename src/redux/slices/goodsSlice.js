import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goods: [],
}

const goodsSlice = createSlice ({
    name: 'goods',
    initialState,
    reducers: {
        setGoods(state,action) {
            state.goods = action.payload
        }
    }
})

export const {setGoods} = goodsSlice.actions

export default goodsSlice.reducer