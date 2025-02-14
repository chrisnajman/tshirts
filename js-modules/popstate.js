export default function popstate() {
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
}
