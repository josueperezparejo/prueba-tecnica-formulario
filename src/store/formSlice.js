import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fullname: '',
    email: '',
    phone: '',
    portfolio: '',
    skillLevel: '',
    challenge: ''
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        saveStep1: (state, { payload }) => {
            return {
                ...state,
                fullname: payload.fullname,
                email: payload.email,
                phone: payload.phone,
                portfolio: payload.portfolio,
                challenge: payload.challenge
            }
        },
        saveStep2: (state, { payload }) => {
            return {
                ...state,
                skillLevel: payload.skillLevel,
            }
        },
        saveStep3: (state, { payload }) => {
            return {
                ...state,
                challenge: payload.challenge,
            }
        }
    }
});

export const { saveStep1, saveStep2, saveStep3 } = formSlice.actions;
export default formSlice.reducer