const fs = require('fs');
const path = require('path');
const selfsigned = require('selfsigned');

const keyPath = path.join(__dirname, 'server.key');
const certPath = path.join(__dirname, 'server.cert');

if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
  console.log("Generating self-signed SSL certificates for secure HTTPS connection...");
  selfsigned.generate([{ name: 'commonName', value: '10.162.168.85' }], { days: 365 })
    .then(pems => {
      fs.writeFileSync(keyPath, pems.private);
      fs.writeFileSync(certPath, pems.cert);
      console.log("SSL Certificates generated successfully.");
      process.exit(0);
    })
    .catch(err => {
      console.error("Failed to generate SSL certificates:", err);
      process.exit(1);
    });
} else {
  console.log("SSL Certificates already exist.");
  process.exit(0);
}
