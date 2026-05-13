# Reflection

Ene bie daaltaar Integration & API testing-iin undes boloh Postman collection zohion baiguulah, environment variable ashiglah, request hoorond ugugdul damjuulah, Newman CLI-eer collection ajilluulah, GitHub Actions deer avtomat test pipeline beldeh ajluudiig hiisen.

## Hiisen ajil

- Express deer jijig Task API bichsen.
- API ni `GET`, `POST`, `PUT`, `PATCH`, `DELETE` request-uudiig demjine.
- Postman collection-d 9 request nemsen.
- Request buriin test script deer status code bolon response body shalgasan.
- POST request-eer uusgesen task-iin `id`-g `createdTaskId` environment variable-d hadgalaad daraagiin request-uuded ashiglasan.
- Newman CLI script beldsen.
- GitHub Actions workflow nemj, push bolon pull request hiih ued test avtomataar ajillahaar bolgoson.
- Newman `htmlextra` reporter ashiglan HTML report uusgeh tohirgoo nemsen.

## Sursan zuil

API test hiihdee zuvhun endpoint ajillaj baina uu gedgiig bish, status code, response body, error response, chained request zergiig davhar shalgah heregtei gedgiig oilgoson. Mun Postman deer beldsen collection-iig Newman ashiglan command line deer ajilluulj, CI pipeline-d holboh bolomjtoi gedgiig sursan.

## Tulgarasan asuudal

Ehnii ued engiin HTML reporter zurchil uusgej baisan. Tiimees `newman-reporter-htmlextra` ashiglan `reports/api.html` tailang local bolon CI deer neg adil uusgeheer shiidsen.

## Dugnel

Lab 14-iin zorilgo boloh Integration & API testing-iig jijig Express API deer heregjuulsen. Collection ni 8-aas deesh request-tei, buh gol HTTP method-uudiig ashiglasan, error case bolon chained request-iig bagtaasan. CI workflow ni test-iig dahin davtan ajilluulah, HTML report-iig artifact bolgon hadgalah bolomjtoi bolgoson.

## G hesgiin dugnelt

G hesegt Newman CLI bolon GitHub Actions workflow-iig production-ready helbert oruulsan. Local deer `npm run test:report`, CI deer `npm run test:ci` command ajillaj, ali ali ni `reports/api.html` tailan uusgene. Workflow ni dependency suulgah, API server asaah, health check hiih, Newman collection ajilluulah, tailan upload hiih daraallaar ajillana.
