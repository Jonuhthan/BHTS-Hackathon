// Function find out when you are currently in your shopping cart/checkout
function IsCheckoutPage() {
    //gets url from the window
    const url = window.location.href
    //looks for urls that have the word cart,basket in them
    const cartPagePattern = /cart|basket/; 
    //If the URL is a cart page, we return True
    return cartPagePattern.test(url);
}

function getCartPrice() {
    // gets the cart price 
    const priceElementSelector = '.cart-price'; //Big companies do not have class names this simple! 
    const priceElement = document.querySelector(priceElementSelector);

    if (priceElement) {
        // Extract the price text and remove any non-numeric characters (e.g., currency symbols)
        const priceText = priceElement.textContent || priceElement.innerText;
        // Use regex to extract numeric values, assuming price is formatted like "$123.45"
        const priceMatch = priceText.match(/[\d.,]+/);
        return priceMatch ? parseFloat(priceMatch[0].replace(/,/g, '')) : null;
    } else {
        return null;
    }
}
//if IsCheckoutPage() == True, we pop up on the users screen
if (IsCheckoutPage()) {
    const CartPrice = getCartPrice()
    //Runtime is an API that listens to for events 
    chrome.runtime.sendMessage({ action: "ShowExtension", price: CartPrice})

    //Debugging
    console.log(CartPrice)
}

