// This file waits and pops up if checkout.js is true
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "showPopup") {
      chrome.action.openPopup();
    }
  });
  