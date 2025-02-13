document.addEventListener("DOMContentLoaded", function () {
  const driverAppLink = document.getElementById("driver-app");

  if (driverAppLink) {
    driverAppLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/iPhone|iPad|iPod/i.test(userAgent)) {
        window.location.href =
          "https://apps.apple.com/us/app/rameego-driver/id6504161504";
      } else if (/Android/i.test(userAgent)) {
        window.location.href =
          "https://play.google.com/store/apps/details?id=ku.rameego.driver&pli=1";
      } else {
        window.location.href = "https://rameego.com"; // Fallback to the website
      }
    });
  }
});
