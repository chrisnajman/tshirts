export default function orderTshirt() {
  const orderForm = document.getElementById("order-form")
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault()

      /** Get form values */
      // Get no. t-shirts ordered
      const quantity = document.getElementById("quantity")
      const quantityValue = quantity.value

      // Get t-shirt size from select list
      const size = document.getElementById("size")
      const sizeValue = size.value

      // Get t-shirt colour from radio group
      const radios = document.querySelectorAll("input[name='colour']")
      let radioValue
      radios.forEach((radio) => {
        if (radio.checked) {
          radioValue = radio.value
        }
      })

      /** Construct the query */
      // URL Parametres
      const params = new URLSearchParams()
      params.append(
        "data",
        JSON.stringify({ quantityValue, sizeValue, radioValue })
      )

      // Go to checkout.html
      const url = "checkout.html?" + params.toString()
      location.href = url
    })
  }
}
