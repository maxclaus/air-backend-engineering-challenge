# air-backend-engineering-challenge

This is my assignment for the Air backend position challenge.

## Docs

> NOTE: usually I would include more details about the problem we are solving. However,
> to keep this documentation shorter, I am assuming anyone reviewing it has already read the challenge description.
> Which describes the problem very well and we can avoid duplicating most of that here.

- Diagrams are available at [diagrams][diagrams_link]
- Other documents are available at [docs][docs_link] folder.

[diagrams_link]: https://excalidraw.com/#json=8xE6bpxw1HneiPKEvrPWK,vmBQfyDHisrZ7kdN3Yd1pQ
[docs_link]: docs

## Code

It is just a basic implementation of a service in Node.js with fake data layer to show
how I usually code in backend services. Where each layer holds code for specific responsibility
and dependencies are passed as arguments. Making it simpler to mock those dependencies later on tests in general.

## Running

```
npm i
npm run dev
```

Example to test an API:

```
curl http://localhost:3000/notifications-api/team/cm8f8kkfg00002e6dws9229g7/user/100/notifications
```
