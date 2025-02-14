import setMultipleAttributes from "./set-multiple-attributes.js"

export default function checkoutTshirt() {
  const checkout = document.getElementById("checkout")
  const backButton = document.getElementById("back-button")

  if (checkout) {
    const quantity = document.getElementById("quantity")
    const size = document.getElementById("size")
    const colour = document.getElementById("colour")
    const unitPrice = document.getElementById("unit-price")
    const total = document.getElementById("total")
    const image = document.getElementById("image")
    const poundSymbol = "\xa3"

    // GET THE PARAMETERS
    const params = new URLSearchParams(window.location.search)
    const data = JSON.parse(params.get("data"))

    // ACCESS INDIVIDUAL VALUES
    const quantityValue = Number(data.quantityValue)
    const sizeValue = data.sizeValue
    const colourValue = data.radioValue

    // OUTPUT PRICE
    const priceValue = quantityValue * 5

    // CREATE IMAGE (PNG and WEBP)
    const tshirtWebp = document.createElement("source")
    const tshirtImage = document.createElement("img")
    const colourValueLowerCase = colourValue.toLowerCase()

    setMultipleAttributes(tshirtWebp, {
      srcset: `https://raw.githubusercontent.com/chrisnajman/t-shirts/refs/heads/main/t-shirt-${colourValueLowerCase}.webp`,
      type: "image/webp",
    })
    setMultipleAttributes(tshirtImage, {
      src: `https://raw.githubusercontent.com/chrisnajman/t-shirts/refs/heads/main/t-shirt-${colourValueLowerCase}.png`,
      alt: `${colourValue} t-shirt`,
      width: "400",
      height: "400",
    })

    // PRINT TO SCREEN
    image.append(tshirtWebp, tshirtImage)
    quantity.textContent = quantityValue
    size.textContent = sizeValue
    colour.textContent = colourValue
    unitPrice.textContent = `${poundSymbol}5`
    total.textContent = poundSymbol + priceValue

    /* Go back (sending params back to index.html) */
    backButton.addEventListener("click", () => {
      const url = "index.html?" + params.toString()
      location.href = url
    })
  }
}
