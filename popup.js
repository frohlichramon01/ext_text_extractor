// Copy button
document.getElementById("copyBtn").addEventListener("click", () => {
    const textarea = document.getElementById("output");
    textarea.select();
    document.execCommand("copy");
});


// Buttons
document.getElementById("button_1").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    function getInfoButton1() {
        // variables to build the output
        var text_from_website = document.getElementsByTagName("h1")[0].innerText;

        // Template for crafting the output
        const TEMPLATE_1 = "That is the example text for the BUTTON 1: " + "\n\n" +
            "Below is the text extracted from the page: " + "\n\n" + "> " + text_from_website + " <";

        return TEMPLATE_1;
    }

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: getInfoButton1
    }, (results) => {
        const output = document.getElementById("output");
        output.value = results[0].result;
    });
});

document.getElementById("button_2").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    function getInfoButton2() {
        // variables to build the output
        var text_from_website = document.getElementsByTagName("h1")[0].innerText;

        // Template for crafting the output
        const TEMPLATE_2 = "That is the example text for the BUTTON 2: " + "\n\n" +
            "Below is the text extracted from the page: " + "\n\n" + "> " + text_from_website + " <";

        return TEMPLATE_2;
    }

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: getInfoButton2
    }, (results) => {
        const output = document.getElementById("output");
        output.value = results[0].result;
    });
});

document.getElementById("button_3").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    function getInfoButton3() {
        // variables to build the output
        var text_from_website = document.getElementsByTagName("h1")[0].innerText;

        // Template for crafting the output
        const TEMPLATE_3 = "That is the example text for the BUTTON 3: " + "\n\n" +
            "Below is the text extracted from the page: " + "\n\n" + "> " + text_from_website + " <";

        return TEMPLATE_3;
    }

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: getInfoButton3
    }, (results) => {
        const output = document.getElementById("output");
        output.value = results[0].result;
    });
});