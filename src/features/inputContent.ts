import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface contentState {
  contents:Record<string, string>
}

const initialState: contentState = {
  contents: {
    "green": '',
    "orange": 'border-orange-500',
    "blue": 'border-blue-500',
  }
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setContentValue: (state, action: PayloadAction<{color: string; content: string}>) => {
      state.contents[action.payload.color] = action.payload.content;
    },
  },
});

// export const { setContentValue } = inputSlice.actions;

export default inputSlice.reducer;