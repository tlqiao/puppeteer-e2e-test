async function retry(promiseFactory, expectValue, retryCount) {
    try {
        await sleep(1000);
        return await promiseFactory();
    } catch (error) {
        if (retryCount <= 0) {
            throw error;
        }
        if (promiseFactory !== expectValue) {
            return await retry(promiseFactory, expectValue, retryCount - 1);
        }
    }
}

async function waitForUntilGetExpectValue(selector, expectValue) {
    await page.waitForFunction(document.querySelector(selector).innerText() == expectValue, {timeout: 5000})
}

async function waitToClick(selector) {
    try {
        await page.waitForSelector(selector, {timeout: 5000});
        await page.click(selector)
    } catch (err) {
        throw err
    }
}

async function waitToType(selector, typeText) {
    try {
        await page.waitForSelector(selector, {timeout: 5000});
        await page.type(selector, typeText)
    } catch (err) {
        throw err
    }
}

async function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports = {
    retry: retry,
    sleep: sleep,
    waitToClick: waitToClick,
    waitToType: waitToType,
    waitForUntilGetExpectValue: waitForUntilGetExpectValue
};