# Bie Daalt 14 - A heseg: Setup

## Songoson API

**Huubilbar 3 - Jижиг Express server**

- API name: Lab14 Task API
- Base URL: `http://localhost:3000`
- Auth: shaardlagagui
- Data format: JSON
- Gol endpoint: `/tasks`

## Endpoint-uud

| Method | URL | Tailbar |
| --- | --- | --- |
| GET | `/health` | Server ajillaj baigaa esehiig shalgana |
| GET | `/tasks` | Buh task-iin jagsaalt avna |
| GET | `/tasks/:id` | Neg task avna |
| POST | `/tasks` | Shine task uusgene |
| PUT | `/tasks/:id` | Task-iig butneer shinechilne |
| PATCH | `/tasks/:id` | Task-iin status hesgiig shinechilne |
| DELETE | `/tasks/:id` | Task ustgana |

## Environment

3 environment uusgesen.

- `dev`: local ajilluulah ued `baseUrl=http://localhost:3000`
- `staging`: Postman deer ashiglah belen huvisagch, local port deer zaasan
- `prod`: Surgaltiin zorilgoor beldsen huvisagch, bodit production ruu holbogdohgui

Repository deer Newman CI-d ashiglah `postman/env.ci.json`, local test-d ashiglah
`postman/env.dev.json` file-uud hadgalagdsan.

## A hesgiin shalgalt

1. Node.js suulgasan.
2. Postman Desktop app-aar collection import hiih bolomjtoi.
3. `npm install` hiij dependency tataad, `npm start` command-aar API server ajilluulna.
4. Postman deer `GET {{baseUrl}}/health` request ilgeehэд 200 status avna.

## Ashiglah command

```bash
npm install
npm start
npm test
```

## Screenshot

`partA/screenshot.png` file-d ehnii amjilttai request-iin zurag hadgalah yostoi.
CLI-or batalgaajuulbal `npm test` command-iin buh request pass bolno.
