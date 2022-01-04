import { notification } from "antd";
export const notificationComponent = (
  type: string,
  time: number,
  title: string,
  content: string
): void => {
  if (type === "success") {
    notification.success({
      duration: time,
      message: title,
      description: content,
    });
  } else if (type === "warning") {
    notification.warning({
      duration: time,
      message: title,
      description: content,
    });
  } else {
    notification.error({
      duration: time,
      message: title,
      description: content,
    });
  }
};
