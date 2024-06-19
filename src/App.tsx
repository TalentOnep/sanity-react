import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import sanityClient from './sanityClient'
import { client, urlFor } from "./sanityClient"

import { RootState, AppDispatch } from './app/store';
import { removeNotification, setNotification } from './features/handlerNotificaiton';
import { notificationButton } from './utils/config/notificationGroup';
import Notification from './components/NotificationComponent';
import Button from './components/ButtonComponent';

async function getTestImages() {
  const CONTENT_QUERY = `*[_type == "testImage"] {mainImage, title, attribution}`
  const content = await client.fetch(CONTENT_QUERY)
  return content
}

const App = () => {
  const notificationGroup = useSelector((state: RootState) => state.handler.notifications);
  const contentGroup = useSelector((state: RootState) => state.input.contents);
  const [testImages, setTestImages] = useState<any[]>();
  const [docs, setDocs] = useState<any[]>();

  useEffect(() => {
    getTestImages().then(content => setTestImages(content))
    getTestImages().then(content => console.log(content))
  }, [])

  const dispatch: AppDispatch = useDispatch();
  const handleButtonClick = (notification: {title: string, color: string}) => {
    console.log(contentGroup[notification.title])
    dispatch(setNotification({
      title: notification.title,
      color: notification.color,
      content: contentGroup[notification.color] === "" ?
        "This is a default Notification!" : 
        contentGroup[notification.color]
    }));
  }

  const removeNotifications = (id: number) => {
    dispatch(removeNotification(id));
  }

  useEffect(() => {
    // return;
    // setNotificationGroup(useSelector((state: RootState) => state.handler.notifications);
  }, [notificationGroup])
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          {/* <img 
            className="h-auto max-w-full" 
            src={urlFor(content[0].mainImage).url()}
            alt="image description" 
          /> */}
          
        </div>
        {testImages && testImages.map((testImage, index) => {
          return (
            <div
              className="p-10" 
              key={index}
            >
              {testImage.title}
              <img 
                className="h-auto max-w-full" 
                src={urlFor(testImage.mainImage).url()}
                alt="image description" 
              />
              {testImage.attribution}
            </div>
          )
        })}
      </div>
      <div className="relative text-center h-[100vh]">
        <div className="absolute bottom-20 w-full flex justify-center items-center">
          {notificationButton.map((notification, index) => {
            return (
              <Button
                key={index}
                color={notification.color}
                title={notification.title}
                onClick={() => handleButtonClick(notification)}
              />
            )
          })}
        </div>
        <div className="fixed right-0">
          {notificationGroup.map((notification, index) => {
            return (
              <Notification 
                key={notification.id}
                autoClose={true}
                index={index}
                id={notification.id}
                color={notification.color}
                title={notification.title}
                content={notification.content}
                onDelete={() => removeNotifications(notification.id)}
              />
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;