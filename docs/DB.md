# Persistence

This document describes how data is persisted to the database related to the notification system.

> Note: A unique type means either numeric auto-incremental or uuid/cuid string.

## Database: Notifications-API

### Table: events

This is a temporary data used by the notifications system to batch common events into a notification.
It is hard deleted once the batched notification data has been created.

- `id` (unique)
- `event_type` (numeric)
  - `asset_added=1`
  - `comment_created=2`
  - `assets_downloaded=3`
  - `asset_share_link_viewed=4`
  - `asset_share_link_not_viewed=5`
- `data` (json): raw notification data
- `created_at` (datetime)

### Table: notifications

This is a persistent data which represents notifications can possible be batched when there are multiple common events emitted in a short time.

- `id` (unique)
- `message` (string) (this is the grouped message)
- `user_id` (unique from users-api)
- `read` (bool, default false)
- `read_at` (datetime)
- `created_at` (datetime)
- `updated_at` (datetime)

> Note: Although I mention it is a persistent data. It could eventually be hard deleted after 1 year since at that time they are not important anymore and it can save data costs.

> Note: I wasn't sure if it was required to keep info about the notification delivering status such as whether an email was sent and when it was sent.
> It didn't seem to be so important so I kept it out.

## Database: Users-API

### Table: users

- `id` (unique)
- `name` (string)
- `email` (string)

### Table: user-settings

- `user_id` (unique)
- `notification_inapp_enabled` (bool, true by default)
- `notification_email_enabled` (bool, true by default)
