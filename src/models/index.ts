import { NotificationModel } from "./notification";

export interface Models {
  notification: NotificationModel;
}

export const setupModels = (): Models => {
  return {
    notification: new NotificationModel(),
  };
};
