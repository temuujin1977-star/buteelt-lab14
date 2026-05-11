# Bie Daalt 14 - Integration & API Testing

Ene repository нь Postman collection, Newman CLI, GitHub Actions ашиглан жижиг Express API-г автоматаар тестлэх лабораторийн ажил юм.

## Бүтэц

| Folder/File | Үүрэг |
| --- | --- |
| `server/index.js` | Тестлэх жижиг Express REST API |
| `postman/collection.json` | Postman collection, нийт 8+ request/test |
| `postman/env.dev.json` | Local development environment |
| `postman/env.ci.json` | GitHub Actions/Newman environment |
| `.github/workflows/api-tests.yml` | CI pipeline |
| `partA/SETUP.md` | A хэсгийн setup тайлан |
| `reports/api.html` | Newman HTML report output |
| `REFLECTION.md` | Ажлын дүгнэлт |

## Ажиллуулах

```bash
npm install
npm start
```

Өөр terminal дээр:

```bash
npm test
```

CI-тэй адил HTML report үүсгэх:

```bash
npm run test:ci
```

## API

Base URL: `http://localhost:3000`

- `GET /health`
- `GET /tasks`
- `GET /tasks/:id`
- `POST /tasks`
- `PUT /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

## Сонгосон хувилбар

Удирдамжийн **Хувилбар 3 - жижиг өөрийн Express server**-ийг сонгосон. Ингэснээр бүх endpoint, status code, response body, chained request-ийг тогтвортой шалгах боломжтой.
