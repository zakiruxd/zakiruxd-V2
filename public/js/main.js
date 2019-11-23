//Using jQuery this function runs and validates the form. Email sending services is from formspree.
$(document).ready(function() {
  $(".submit").click(function(event) {
    // event.preventDefault();
    // console.log("Clicked Button");

    var name = $(".userName").val();
    var email = $(".userEmail").val();
    var message = $(".userMessage").val();
    var statusElement = $(".status");
    statusElement.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      //   statusElement.append("<div>Your email is valid</div>");
    } else {
      statusElement.append("<div>Please input a valid email address</div>");
    }
  });

  let showMenu = false;

  $(".menu-btn").click(function(event) {
    if (!showMenu) {
      $(".menu-btn").toggleClass("close");
      $("#navbarNav").slideToggle(500);
    }
  });
});

//Set initial state of menu

// function toggleMenu() {
//   if (!showMenu) {
//     menuBtn.classList.add("close");
//     menu.classList.add("show");
//     menuNav.classList.add("show");
//     menuBranding.classList.add("show");
//     navItems.forEach(item => item.classList.add("show"));

//     //Set Menu State
//     showMenu = true;
//   } else {
//     menuBtn.classList.remove("close");
//     menu.classList.remove("show");
//     menuNav.classList.remove("show");
//     menuBranding.classList.remove("show");
//     navItems.forEach(item => item.classList.remove("show"));

//     //Set Menu State
//     showMenu = false;
//   }
// }
