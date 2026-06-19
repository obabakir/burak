console.log("Signup frontend javascript file");

// $(function () {
//   $(".member-nick").click(function () {
//     alert($(".member-phone").val());
//   });
// });

// $(function () {
//   $(".member-nick").click(function () {
//     // <!-- $(".member-password").hide(); -->
//     // <!-- $(".member-password").toggle(); -->
//     $(".member-password").animate({ left: "40px" });
//   });
// });

function validateSignupForm() {
  const memberNick = $(".member-nick").val();
  const memberPhone = $(".member-phone").val();
  const memberPassword = $(".member-password").val();
  const confirmPassword = $(".confirm-password").val();

  if (
    memberNick === "" ||
    memberPhone === "" ||
    memberPassword === "" ||
    confirmPassword === ""
  ) {
    alert("Please insert all requirements");
    return false;
  }
  if (memberPassword !== confirmPassword) {
    alert("Password differs, please check!");
    return false;
  }
}
