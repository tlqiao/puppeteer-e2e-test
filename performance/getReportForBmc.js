const generate = require('./generateReport');
let configs;

function generateScenario4ReportForBMC() {
    configs=generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.bmcPageUrl.scenario4, configs.windows.bmcReportPath.scenario4);
    } else {
        generate.generateReport(configs.macOrLinux.bmcPageUrl.scenario4, configs.macOrLinux.bmcReportPath.scenario4);
    }
}

function generateScenario3ReportForBMC() {
    configs = generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.bmcPageUrl.scenario3, configs.windows.bmcReportPath.scenario3);
    } else {
        generate.generateReport(configs.macOrLinux.bmcPageUrl.scenario3, configs.macOrLinux.bmcReportPath.scenario3);
    }
}

function generateScenario2ReportForBMC() {
    configs = generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.bmcPageUrl.scenario2, configs.windows.bmcReportPath.scenario2);
    } else {
        generate.generateReport(configs.macOrLinux.bmcPageUrl.scenario2, configs.macOrLinux.bmcReportPath.scenario2);
    }
}

function generateScenario1ReportForBMC() {
    configs = generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.bmcPageUrl.scenario1, configs.windows.bmcReportPath.scenario1);
    } else {
        generate.generateReport(configs.macOrLinux.bmcPageUrl.scenario1, configs.macOrLinux.bmcReportPath.scenario1);
    }
}

function generatePageLoadReportForBMC() {
    configs = generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.bmcPageUrl.pageLoad, configs.windows.bmcReportPath.pageLoad);
    } else {
        generate.generateReport(configs.macOrLinux.bmcPageUrl.pageLoad, configs.macOrLinux.bmcReportPath.pageLoad);
    }
}


module.exports = {
    generatePageLoadReportForBMC: generatePageLoadReportForBMC,
    generateScenario1ReportForBMC: generateScenario1ReportForBMC,
    generateScenario2ReportForBMC: generateScenario2ReportForBMC,
    generateScenario3ReportForBMC: generateScenario3ReportForBMC,
    generateScenario4ReportForBMC: generateScenario4ReportForBMC
};

