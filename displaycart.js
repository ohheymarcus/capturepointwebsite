
    // Function to display cart items
    function displayCartItems() {
        const cartItemsContainer = document.querySelector("#cart-items");
        const totalPriceElement = document.querySelector("#total-price");
        

        // Retrieve cart from localStorage
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Clear the container before rendering
        cartItemsContainer.innerHTML = "";

        let totalPrice = 0;

        // Render each cart item
        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("summary-item");

            // Item name and quantity
            const itemName = document.createElement("p");
            itemName.textContent = `${item.name} (x${item.quantity})`;
            itemElement.appendChild(itemName);

            // Item price
            const itemPrice = document.createElement("p");
            itemPrice.textContent = `₱${(125 * item.quantity).toFixed(2)}`;
            itemElement.appendChild(itemPrice);

            // Remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-btn");
            removeButton.addEventListener("click", () => removeCartItem(index));
            itemElement.appendChild(removeButton);

            // Add to the container
            cartItemsContainer.appendChild(itemElement);

            // Calculate total price
            totalPrice += 125 * item.quantity;
        });

        // Update total price
        totalPriceElement.textContent = `₱${totalPrice.toFixed(2)}`;
    }

    // Function to remove a cart item
    function removeCartItem(index) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Remove the item at the specified index
        cart.splice(index, 1);

        // Save the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Refresh the cart display
        displayCartItems();
    }

    // Call the function to display cart items when the page loads
    displayCartItems();
