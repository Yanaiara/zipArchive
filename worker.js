const AdmZip = require('adm-zip');
function zipArchive() {
    const zip = new AdmZip();
    const outputFile = `test${Math.random()}.zip`;
    zip.addLocalFolder('./test');
    zip.writeZip(outputFile);
}


zipArchive();