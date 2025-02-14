import themeSwitcher from "./js-modules/theme.js"
import switchTshirtColour from "./js-modules/switch-tshirt-colour.js"
import orderTshirt from "./js-modules/order-tshirt.js"
import checkoutTshirt from "./js-modules/checkout-tshirt.js"
window.addEventListener("popstate", function () {
  const confirmLeave = confirm(
    "Are you sure you want to go back? All provided data will be lost."
  )
  if (!confirmLeave) {
    history.pushState(null, "", window.location.href) // Push the same state to prevent navigation
  }
})

// Ensure there's an initial state in history so 'popstate' fires
history.pushState(null, "", window.location.href)

themeSwitcher()
switchTshirtColour()
orderTshirt()
checkoutTshirt()
