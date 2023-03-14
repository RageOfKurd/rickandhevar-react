import { createSlice } from '@reduxjs/toolkit'


export const themeSlice = createSlice({
      
    name: 'theme',
    initialState: {
        theme: 'light',
    },
    reducers: {
        setTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            console.log(state.theme);
        },
    },

});

export const  {setTheme}  = themeSlice.actions;
export default themeSlice.reducer;