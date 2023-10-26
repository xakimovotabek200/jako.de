import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: [],
    products: [],
    selectedSize: "",
    selectedImage: "",
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
        addWishes: (state, action) => {
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        },
        setSize: (state, action) => {
            state.selectedSize = action.payload
        },
        setImage: (state, action) => {
            state.selectedImage = action.payload
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
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i].uuid === action.payload) {
                    state.products.splice(i, 1)
                }
            }
        },
        resetCart: (state) => {
            state.products = [];
        },
    },
});

export const {
    addToCart,
    setSize,
    setImage,
    increaseQuantity,
    drecreaseQuantity,
    deleteItem,
    resetCart,
    addWishes,
} = Slice.actions;
export default Slice.reducer;