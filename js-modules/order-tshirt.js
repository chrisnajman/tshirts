import setMultipleAttributes from "./set-multiple-attributes.js"

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

    // Retrieve params sent back from checkout.html and use them to repopulate form fields and t-shirt image accordingly.
    const params = new URLSearchParams(window.location.search)
    const data = JSON.parse(params.get("data"))

    if (data) {
      document.addEventListener("DOMContentLoaded", () => {
        /* Quantity form field */
        const quantity = document.getElementById("quantity")
        quantity.value = data.quantityValue

        /* Size */
        const size = document.getElementById("size")
        size.value = data.sizeValue

        /* Colour selection (radios) */
        const radios = document.querySelectorAll("input[name='colour']")
        radios.forEach((radio) => {
          radio.value === data.radioValue
            ? (radio.checked = true)
            : (radio.checked = false)
        })

        // Tshirt image
        const colourValue = data.radioValue
        const colourValueLowerCase = colourValue.toLowerCase()

        const tshirtWebp = document.getElementById("t-shirt-webp")
        const tshirtImage = document.getElementById("t-shirt-image")
        setMultipleAttributes(tshirtWebp, {
          srcset: `https://raw.githubusercontent.com/chrisnajman/t-shirts/refs/heads/main/t-shirt-${colourValueLowerCase}.webp`,
          type: "image/webp",
        })
        setMultipleAttributes(tshirtImage, {
          src: `https://raw.githubusercontent.com/chrisnajman/t-shirts/refs/heads/main/t-shirt-${colourValueLowerCase}.png`,
          alt: `${colourValue} t-shirt`,
        })

        /* Restore form and t-shirt image to defaults */
        const clearForm = document.getElementById("clear-form")
        const clearFormButton = document.createElement("button")
        clearFormButton.textContent = "Clear form"
        clearFormButton.setAttribute("type", "button")
        clearFormButton.addEventListener("click", () => {
          location.href = "index.html"
        })
        clearForm.append(clearFormButton)
      })
    }
  }
}
