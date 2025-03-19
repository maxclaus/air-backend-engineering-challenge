## REST API Endpoints

This document describes the routes related to the notification system.

The first part of the request path describes which domain service owns that endpoint.

> Note: I am not writing the documentation for the way frontend consumes data from the domain services. But we can discuss about it later.

### Get notifications

List all the notifications for the current user:

> Note: I wasn't sure about the difference between summarize and display notifications endpoints mentioned in the implementation requirements.

**Route**

`GET /notifications-api/teams/:teamID/users/:userID/notifications`

**Params**

- `status` = `read/unread` (optional)

**Response Payload**

Status code 200 on success with payload:

```json
[
  {
    "id": 100,
    "message": "Mark uploaded 10 assets to 10/2024 Photo Shoot",
    "user_id": 50,
    "read": true,
    "created_at": ""
  }
]
```

### Update notifications reading status

List all the notifications for the current user:

**Route**

`POST /notifications-api/teams/:teamID/users/:userID/status/(read|unread)`

**Response Payload**

Status code 204 on success with no payload.
