const generate = require('./generateReport');
let configs;

function generateScenario5ReportForSpringerLink() {
    configs=generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.springerLinkPageUrl.scenario5, configs.windows.springerLinkReportPath.scenario5);
    } else {
        generate.generateReport(configs.macOrLinux.springerLinkPageUrl.scenario5, configs.macOrLinux.springerLinkReportPath.scenario5);
    }
}

function generateScenario4ReportForSpringerLink() {
    configs=generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.springerLinkPageUrl.scenario4, configs.windows.springerLinkReportPath.scenario4);
    } else {
        generate.generateReport(configs.macOrLinux.springerLinkPageUrl.scenario4, configs.macOrLinux.springerLinkReportPath.scenario4);
    }
}

function generateScenario3ReportForSpringerLink() {
    configs = generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.springerLinkPageUrl.scenario3, configs.windows.springerLinkReportPath.scenario3);
    } else {
        generate.generateReport(configs.macOrLinux.springerLinkPageUrl.scenario3, configs.macOrLinux.springerLinkReportPath.scenario3);
    }
}

function generateScenario2ReportForSpringerLink() {
    configs = generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.springerLinkPageUrl.scenario2, configs.windows.springerLinkReportPath.scenario2);
    } else {
        generate.generateReport(configs.macOrLinux.springerLinkPageUrl.scenario2, configs.macOrLinux.springerLinkReportPath.scenario2);
    }
}

function generateScenario1ReportForSpringerLink() {
    configs = generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.springerLinkPageUrl.scenario1, configs.windows.springerLinkReportPath.scenario1);
    } else {
        generate.generateReport(configs.macOrLinux.springerLinkPageUrl.scenario1, configs.macOrLinux.springerLinkReportPath.scenario1);
    }
}

function generatePageLoadReportForSpringerLink() {
    configs = generate.getConfigs();
    if (configs.isWindows) {
        generate.generateReport(configs.windows.springerLinkPageUrl.pageLoad, configs.windows.springerLinkReportPath.pageLoad);
    } else {
        generate.generateReport(configs.macOrLinux.springerLinkPageUrl.pageLoad, configs.macOrLinux.springerLinkReportPath.pageLoad);
    }
}


module.exports = {
    generatePageLoadReportForSpringerLink: generatePageLoadReportForSpringerLink,
    generateScenario1ReportForSpringerLink: generateScenario1ReportForSpringerLink,
    generateScenario2ReportForSpringerLink: generateScenario2ReportForSpringerLink,
    generateScenario3ReportForSpringerLink: generateScenario3ReportForSpringerLink,
    generateScenario4ReportForSpringerLink: generateScenario4ReportForSpringerLink,
    generateScenario5ReportForSpringerLink: generateScenario5ReportForSpringerLink
};

