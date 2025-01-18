import setMultipleAttributes from "./set-multiple-attributes.js"

export default function switchTshirtColour() {
  const radios = document.querySelectorAll("input[name='colour']")
  const radio = document.getElementsByName("colour")
  const tshirtWebp = document.getElementById("t-shirt-webp")
  const tshirtImage = document.getElementById("t-shirt-image")
  let i

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      switchImage()
    })
  })

  function switchImage() {
    for (i = 0; i < radio.length; i++) {
      imageattributes("white", "White")
      imageattributes("red", "Red")
      imageattributes("green", "Green")
      imageattributes("blue", "Blue")
    }
  }

  function imageattributes(colourLower, colourUpper) {
    if (radio[i].checked && radio[i].value === `${colourUpper}`) {
      tshirtWebp.setAttribute(
        "srcset",
        `https://raw.githubusercontent.com/chrisnajman/t-shirts/refs/heads/main/t-shirt-${colourLower}.webp`
      )
      setMultipleAttributes(tshirtImage, {
        src: `https://raw.githubusercontent.com/chrisnajman/t-shirts/refs/heads/main/t-shirt-${colourLower}.png`,
        alt: `${colourUpper} t-shirt`,
      })
    }
  }
}
