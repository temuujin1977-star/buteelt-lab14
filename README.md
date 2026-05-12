# Bie Daalt 14 - Integration & API Testing

Ene repository ni F.CSM311 hicheeliin Bie Daalt 14 ajil. Zorilgo ni Postman collection, Newman CLI, GitHub Actions ashiglan jijig Express REST API-g avtomataar testleh yum.

## Songoson huvilbar

Udirdamjiin **Huvilbar 3 - jijig Express/FastAPI server**-iig songoson. Express server ni 50 muroos baga code-toi baij, API testing-d heregtei endpoint-uudiig uuriinhuu repo dotor togtoogdson baidlaar ajilluulna.

## Project butets

| File/Folder | Tailbar |
| --- | --- |
| `server/index.js` | Test hiih jijig Express REST API |
| `postman/collection.json` | 9 request, 17 assertion buhii Postman collection |
| `postman/env.dev.json` | Local development environment |
| `postman/env.staging.json` | Staging environment jishee |
| `postman/env.prod.json` | Prod environment jishee |
| `postman/env.ci.json` | GitHub Actions/Newman environment |
| `.github/workflows/api-tests.yml` | Push/PR hiih ued Newman test ajilluulah CI |
| `reports/api.html` | Newman testiin HTML tailan |
| `partA/SETUP.md` | A hesgiin setup tailan |
| `REFLECTION.md` | Ajliin dugnelt |

## API endpoint-uud

Base URL:

```text
http://localhost:3000
```

Endpoint-uud:

- `GET /health`
- `GET /tasks`
- `GET /tasks/:id`
- `POST /tasks`
- `PUT /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

## Ajilluulah zaavar

Dependency suulgah:

```bash
npm install
```

API server asaah:

```bash
npm start
```

Postman/Newman test local deer ajilluulah:

```bash
npm test
```

CI-tei adil JSON bolon HTML report uusgeh:

```bash
npm run test:ci
```

## Postman testiin aguulga

Collection dotor niit 9 request orson.

- Happy GET: `/health`
- Happy GET: `/tasks`
- POST create: shine task uusgeed `createdTaskId` hadgalna
- GET by id: umnuh request-eer avsan id-g ashiglana
- PUT update
- PATCH update
- DELETE
- 404 not found error case
- 400 validation error case

## CI

GitHub Actions ni `main` branch ruu push hiih bolon pull request uusgeh ued ajillana. Workflow ni:

1. Repository checkout hiine.
2. Node.js 24 beldene.
3. `npm install` ajilluulna.
4. API server asaana.
5. `npm run test:ci` ajilluulna.
6. `reports/api.html` tailang artifact bolgoj hadgalna.
