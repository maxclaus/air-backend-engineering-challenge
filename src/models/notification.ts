export type Notification = {
  id: number;
  teamID: string;
  userID: number;
  message: string;
  read: boolean;
  // - `read_at` (datetime)
  // - `created_at` (datetime)
  // - `updated_at` (datetime)
};

// TODO: implement notification model using something link sequelize lib
export class NotificationModel {
  findAll(teamID: string, userID: number): Promise<Array<Notification>> {
    console.log("teamID", teamID);
    console.log("userID", userID);
    return Promise.resolve([
      {
        id: 100,
        teamID: teamID,
        userID: userID,
        message: "Mark uploaded 10 assets to 10/2024 Photo Shoot",
        read: false,
      },
      {
        id: 101,
        teamID: teamID,
        userID: userID,
        message: "John uploaded 1 asset to 12/2024 Photo Shoot",
        read: false,
      },
    ]);
  }
}
