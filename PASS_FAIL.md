# Pass / Fail Checklist

## Pass boloh nuhtsul

### A heseg

- [x] `partA/SETUP.md` dotor songoson API, brief, base URL, auth tailbar orson.
- [x] `partA/screenshot.png` file baina.

### B heseg

- [x] `postman/collection.json` dotor 9 request baina.
- [x] GET, POST, PUT, PATCH, DELETE method-uud ashiglasan.
- [x] Request-uud `{{baseUrl}}` ashiglasan, collection dotor hardcoded base URL baihgui.
- [x] Folder zohion baiguulalt `Users`, `Tasks` gesen 2 foldertei.
- [x] Response-oos avsan `createdTaskId` daraagiin request-uuded ashiglagdsan.

### V heseg

- [x] 28 test assertion baina.
- [x] 5-aas olon assertion turul baina: status, latency, header, schema/property, type, business rule.
- [x] Negative test baina: 400 validation, 404 not found.
- [x] 4 pre-request script baina.
- [x] 3-aas olon variable chain baina: `randomTaskTitle`, `createdTaskId`, `updatedTaskTitle`, `updatedStatus`, `patchedStatus`, `missingTaskId`.

### G heseg

- [x] Newman local deer ajillana: `npm test`.
- [x] HTML report uusgene: `npm run test:report`.
- [x] CI command ajillana: `npm run test:ci`.
- [x] GitHub Actions workflow baina: `.github/workflows/api-tests.yml`.
- [x] HTML report artifact file baina: `reports/api.html`.

### Busad

- [x] `REFLECTION.md` ni 5 asuultad hariulsan.
- [x] `README.md` ni clone hiigeed yaj ajilluulah zaavartai.
- [x] 8-aas olon commit hiigdsen.
- [x] Secret, token, API key commit hiigeegui.

## Fail boloh nuhtsul ba manai projectiin shalgalt

- [x] A, B, V, G heseg dutuu baih: dutuu bish, buh heseg file-uudtai.
- [x] Bukh ajliig neg commit hiih: dutuu bish, olon checkpoint commit hiigdsen.
- [x] Hardcoded URL ashiglah: collection dotor request URL-uud `{{baseUrl}}` ashiglasan.
- [x] Newman fail boloh: `npm test` bolon `npm run test:ci` 0 failed.
- [x] CI workflow baihgui baih: workflow file baina.
- [x] Token/secret commit hiih: bodit secret ilreegui.
- [x] AI ashiglasan code/test-iig oilgohgui baih: reflection deer testuud yamar zorilgotoig tailbarlasan.

## Shudarga baidal ba AI ashiglalt

- [x] AI-g code bolon tailbar beldehed tuslah heregsel bolgon ashiglasan.
- [x] Test script-uudiin utga, assertion-uudiin zorilgo, Newman/CI ajillah daraalliig reflection bolon README deer tailbarlasan.
- [x] Secret, token, busdiin private medeelel ashiglaagui.
- [x] Bagsh asuuhad collection, environment, CI workflow-iig tailbarlah bolomjtoi baidlaar bichsen.
