// Function find out when you are currently in your shopping cart/checkout
function IsCheckoutPage() {
    //gets url from the window
    const url = window.location.href
    //looks for urls that have the word cart in them
    const cartPagePattern = /cart/; 
    //If the URL is a cart page, we return True
    return cartPagePattern.test(url);
}

//if IsCheckoutPage() == True, we pop up on the users screen
if (IsCheckoutPage()) {
    //Rutime is an API that listens to for events 
    chrome.runtime.sendMessage({ action: "ShowExtension"})
}
