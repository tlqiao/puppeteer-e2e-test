const generate = require('./generateReport');
let configs;

function generateScenario8ReportForNature() {
    configs=generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.naturePageUrl.scenario8, configs.windows.natureReportPath.scenario8);
    } else {
        generate.generateReport(configs.macOrLinux.naturePageUrl.scenario8, configs.macOrLinux.natureReportPath.scenario8);
    }
}
function generateScenario7ReportForNature() {
    configs=generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.naturePageUrl.scenario7, configs.windows.natureReportPath.scenario7);
    } else {
        generate.generateReport(configs.macOrLinux.naturePageUrl.scenario7, configs.macOrLinux.natureReportPath.scenario7);
    }
}
function generateScenario6ReportForNature() {
    configs=generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.naturePageUrl.scenario6, configs.windows.natureReportPath.scenario6);
    } else {
        generate.generateReport(configs.macOrLinux.naturePageUrl.scenario6, configs.macOrLinux.natureReportPath.scenario6);
    }
}
function generateScenario5ReportForNature() {
    configs=generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.naturePageUrl.scenario5, configs.windows.natureReportPath.scenario5);
    } else {
        generate.generateReport(configs.macOrLinux.naturePageUrl.scenario5, configs.macOrLinux.natureReportPath.scenario5);
    }
}
function generateScenario4ReportForNature() {
    configs=generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.naturePageUrl.scenario4, configs.windows.natureReportPath.scenario4);
    } else {
        generate.generateReport(configs.macOrLinux.naturePageUrl.scenario4, configs.macOrLinux.natureReportPath.scenario4);
    }
}

function generateScenario3ReportForNature() {
    configs = generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.naturePageUrl.scenario3, configs.windows.natureReportPath.scenario3);
    } else {
        generate.generateReport(configs.macOrLinux.naturePageUrl.scenario3, configs.macOrLinux.natureReportPath.scenario3);
    }
}

function generateScenario2ReportForNature() {
    configs = generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.naturePageUrl.scenario2, configs.windows.natureReportPath.scenario2);
    } else {
        generate.generateReport(configs.macOrLinux.naturePageUrl.scenario2, configs.macOrLinux.natureReportPath.scenario2);
    }
}

function generateScenario1ReportForNature() {
    configs = generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.naturePageUrl.scenario1, configs.windows.natureReportPath.scenario1);
    } else {
        generate.generateReport(configs.macOrLinux.naturePageUrl.scenario1, configs.macOrLinux.natureReportPath.scenario1);
    }
}

function generatePageLoadReportForNature() {
    configs = generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.naturePageUrl.pageLoad, configs.windows.natureReportPath.pageLoad);
    } else {
        generate.generateReport(configs.macOrLinux.naturePageUrl.pageLoad, configs.macOrLinux.natureReportPath.pageLoad);
    }
}


module.exports = {
    generatePageLoadReportForNature: generatePageLoadReportForNature,
    generateScenario1ReportForNature: generateScenario1ReportForNature,
    generateScenario2ReportForNature: generateScenario2ReportForNature,
    generateScenario3ReportForNature: generateScenario3ReportForNature,
    generateScenario4ReportForNature: generateScenario4ReportForNature,
    generateScenario5ReportForNature: generateScenario5ReportForNature,
    generateScenario6ReportForNature: generateScenario6ReportForNature,
    generateScenario7ReportForNature: generateScenario7ReportForNature,
    generateScenario8ReportForNature: generateScenario8ReportForNature
};

