```javascript
// Get the button
const darkModeBtn = document.getElementById("darkModeBtn");

// When button is clicked
darkModeBtn.addEventListener("click", function() {

    // Add or remove dark-mode class
    document.body.classList.toggle("dark-mode");

    // Change button text
    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.innerHTML = "☀️ Light Mode";
    } else {
        darkModeBtn.innerHTML = "🌙 Dark Mode";
    }

});
```
