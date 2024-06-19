import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notification {
  id: number;
  title: string;
  content: string;
  color: string;
}

interface CurrentNotifications {
  notifications: Array<Notification>
}

const initialState: CurrentNotifications = {
  notifications: []
};

export const handlerNotification = createSlice({
  name: 'handler',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<{title:string; color:string; content: string}>) => {
      console.log(action.payload.content)
      state.notifications.push({
        id: state.notifications[state.notifications.length - 1] ? 
          (state.notifications[state.notifications.length - 1].id + 1) : 1,
        title: action.payload.title,
        content: action.payload.content,
        color: action.payload.color
      });
    },
    removeNotification: (state, action: PayloadAction<number>) => {
      const removeIndex = state.notifications.findIndex(
        (notification) => action.payload === notification.id
      )
      state.notifications.splice(removeIndex, 1);
      console.log("deleteAction", state.notifications)
    },
    changeContent: (state, action: PayloadAction<{id: number; content:string}>) => {
      const removeIndex = state.notifications.findIndex(
        (notification) => action.payload.id === notification.id
      )
      state.notifications[removeIndex].content = action.payload.content;
      console.log("updatedAction", state.notifications);
    }
  },
});

export const { setNotification, removeNotification } = handlerNotification.actions;

export default handlerNotification.reducer;