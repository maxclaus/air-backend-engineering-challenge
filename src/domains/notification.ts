import type {
  NotificationModel,
  Notification,
} from "../models/notification.ts";

export class NotificationDomain {
  notificationModel: NotificationModel;

  constructor(notificationModel: NotificationModel) {
    this.notificationModel = notificationModel;
  }

  findAll(teamID: string, userID: number): Promise<Array<Notification>> {
    return this.notificationModel.findAll(teamID, userID);
  }
}
