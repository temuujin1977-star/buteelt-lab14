# REFLECTION

## 1. Ali assertion test hamgiin ih une tsentei sanagdsan be?

Hamgiin une tsentei assertion ni status code, response body property, business rule gurviig hamt shalgasan testuud baisan. Zuvhun `200` status avah ni API zov ajillaj baina gesen ug bish. Jishee ni task uusgeh ued `201` status, `id` number turultei baih, `title` ilgeesen utgatai tentsuu baih, `status` ni `todo`, `doing`, `done` gesen zovshoorogdson utguudiin neg baih yostoi. Ene ni aldaa nuugdah bolomjiig bagasgasan.

## 2. Negative test yu ilruulj chadah ve?

Negative test ni buruu payload, baihgui resource, validation aldaa zergiig API yaj hariulj baigaag shalgana. Manai collection deer title-gui POST request `400`, baihgui task avah request `404` butsaaj baigaag shalgasan. Mun validation error ued shine `id` uusgeegui esehiig shalgasan ni buruu request data system-d sanamsargui hadgalagdahaas hamgaalna.

## 3. Postman dotroos ajillaj baisan collection-iig Newman-aar ajilluulahad yamar asuudal garsan be?

Gol yalgaa ni environment, server asaalt, report reporter dependency deer garsan. Postman GUI deer garaar songodog environment-iig Newman deer `-e postman/env.dev.json` gej todorhoi zaah heregtei. Mun server asaagui bol Newman buh request deer fail bolno. HTML report deer `newman-reporter-htmlextra` ashiglahaar shiidej local bolon CI deer neg adil report uusgedeg bolgoson.

## 4. Token esvel secret-iig herhen zohitsuulsan be?

Ene project ni token shaardahgui uuriin local Express API ashiglasan. Tiimees repository dotor bodit token, password, API key, Bearer secret commit hiigeegui. Environment file-uud deer zovhon `baseUrl` bolon testiin tur variable-uud baina. Hervee daraa token shaardah API ashiglaval GitHub Secrets ashiglaj, env file-d placeholder l hadgalna.

## 5. API uurchlugduhud collection-iin aldaa yu heleh ve?

API endpoint, response body, status code uurchlugduhud Newman test fail bolj, ali request deer yamar assertion unasan gedgiig shuud haruulna. Ene ni testiin yamar hesgiig shinechleh heregtei, esvel API deer regression garsan uu gedgiig ylgan oilgohod tusalna. CI deer fail bolbol merge/push-iin daraa aldaag ert ilruulne.
