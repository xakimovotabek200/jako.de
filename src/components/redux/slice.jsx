import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: [],
    products: [],
    selectedSize: "",
};

export const Slice = createSlice({
    name: "legend",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        },
        setSize: (state, action) => {
            state.selectedSize = action.payload
        },
        increaseQuantity: (state, action) => {
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity++;
            }
        },
        drecreaseQuantity: (state, action) => {
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart: (state) => {
            state.products = [];
        },
    },
});

export const {
    addToCart,
    setSize,
    increaseQuantity,
    drecreaseQuantity,
    deleteItem,
    resetCart,
} = Slice.actions;
export default Slice.reducer;