const AdmZip = require('adm-zip');

async function zipArchive() {
    const zip = new AdmZip();
    const outputFile = "test.zip";
    zip.addLocalFolder('./test');
    const initialDate = new Date();
    zip.writeZip(outputFile);
    const finishDate = new Date();
    console.log((finishDate - initialDate).toLocaleString());
    console.log(`Ziped archive ${outputFile} SUCESSFULLY!`);
}

zipArchive();