import React, { MouseEventHandler } from "react";
import cn from "classnames";

import styles from "./Notification.module.css";

let timeToDelete = 400;
let timeToClose = 5000;

interface NotificationProps {
  color: string;
  autoClose: Boolean;
  title: string;
  content: string;
  id: number;
  index: number;
  onDelete: MouseEventHandler<HTMLDivElement>;
}

const buttonStyle: Record<string, string> = {
  green: 'bg-green-500 hover:bg-green-600',
  orange: 'bg-orange-500 hover:bg-orange-600',
  blue: 'bg-blue-500 hover:bg-blue-600',
}

const  Notification: React.FC<NotificationProps> = ({
  color = Color.info,
  title,
  content,
  autoClose = false,
  onDelete,
}) => {

  const [isClosing, setIsClosing] = React.useState(false);

  React.useEffect( () => {
    if (isClosing) {
      const timeoutId = setTimeout(onDelete, timeToDelete);
      
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isClosing, onDelete]);
  
  React.useEffect(() => {
    if (autoClose) {
      const timeoutId = setTimeout(() => setIsClosing(true), timeToClose);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [autoClose]);

  return (
    <div className={cn([styles.container, {[styles.shrink]: isClosing }, "p-1 w-72"])}>
      <div
        className={cn([
          styles.notification,
          buttonStyle[color],
          { [styles.slideIn]: !isClosing },
          { [styles.slideOut]: isClosing },
          " text-white cursor-pointer rounded-2xl opacity-85 hover:opacity-100 transition-opacity opacity-delay-1000 px-10 py-5",
        ])}
        onClick={() => setIsClosing(true)}
      >
        <p className="text-lg text-left pb-1">{title}</p>
        <p className="text-start">
          {content}
        </p>
      </div>
    </div>
  )
}

export const Color = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
};

export default Notification;