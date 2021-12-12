const path = require('path');
const fs = require('fs');
const generate = require('./generateReport');
let configs;

function deleteReport() {
    configs = generate.getConfigs();
    let files = [];
    let folderPath;
    if (configs.isWindows) {
        folderPath = path.join(path.resolve() + configs.windows.reportFolderPath);
    } else {
        folderPath = path.join(path.resolve() + configs.macOrLinux.reportFolderPath);
    }
    if (fs.existsSync(folderPath)) {
        files = fs.readdirSync(folderPath);
        files.forEach(function (file, index) {
            var curPath = folderPath + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                deleteReport(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(folderPath);
    }
}

module.exports = {
    deleteReport: deleteReport
}