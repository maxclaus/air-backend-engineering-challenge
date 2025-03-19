import { Models } from "../models";
import { NotificationDomain } from "./notification";

export interface Domains {
  notification: NotificationDomain;
}

export const setupDomains = (models: Models): Domains => {
  return {
    notification: new NotificationDomain(models.notification),
  };
};
