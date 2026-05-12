const fs = require("fs");

const report = JSON.parse(fs.readFileSync("reports/api.json", "utf8"));
const stats = report.run.stats;
const rows = report.run.executions.map((item) => {
  const assertions = item.assertions || [];
  const failed = assertions.filter((assertion) => assertion.error).length;
  return `<tr><td>${item.item.name}</td><td>${item.response.code}</td><td>${assertions.length}</td><td>${failed}</td></tr>`;
});

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Newman API Report</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 32px; color: #1f2937; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #d1d5db; padding: 8px; text-align: left; }
    th { background: #e5f3f8; }
  </style>
</head>
<body>
  <h1>Newman API Report</h1>
  <p>Requests: ${stats.requests.total}, Assertions: ${stats.assertions.total}, Failed: ${stats.assertions.failed}</p>
  <table>
    <thead><tr><th>Request</th><th>Status</th><th>Assertions</th><th>Failed</th></tr></thead>
    <tbody>${rows.join("")}</tbody>
  </table>
</body>
</html>`;

fs.writeFileSync("reports/api.html", html);
console.log("reports/api.html generated");
