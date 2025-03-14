// Function to submit data
function submitData() {
    const fullname = document.querySelector("#fullname").value;
    const email = document.querySelector("#email").value;
    const address = document.querySelector("#address").value;
    const city = document.querySelector("#city").value;
    const zip = document.querySelector("#zip").value;
    const country = document.querySelector("#country").value;

    const cardnumber = document.querySelector("#cardnumber").value;
    const expirydate = document.querySelector("#expirydate").value;
    const cvv = document.querySelector("#cvv").value;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the cart is empty
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before placing an order.");
        return;
    }

    if (fullname && email && cardnumber) {
        set(ref(db, "Orders/" + fullname.replace(/\s+/g, '_')), {
            billingInfo: {
                fullname: fullname,
                email: email,
                address: address,
                city: city,
                zip: zip,
                country: country,
            },
            paymentInfo: {
                cardnumber: cardnumber,
                expirydate: expirydate,
                cvv: cvv,
            },
            items: cart // Include cart items in the order
        })
        .then(() => {
            alert("Order placed successfully! Thank you for your purchase.");

            // Clear the cart
            localStorage.removeItem("cart");

            // Refresh the cart display
            displayCartItems();

            // Reset forms
            checkoutForm.reset();
            paymentForm.reset();
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
    } else {
        alert("Please fill out all required fields!");
    }
}