// This file waits and pops up if checkout.js is true
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "showExtension") {
      chrome.action.openPopup();
      //Need to implement other actions
    }
  });
  