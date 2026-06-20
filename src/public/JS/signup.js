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
$(function () {
  const fileTarget = $(".file-box .upload-hidden");
  let filename;

  fileTarget.on("change", function () {
    if (window.FileReader) {
      const uploadFile = $(this)[0].files[0];
      const fileType = uploadFile["type"];
      const validImageType = ["image/jpg", "image/jpeg", "image/png"];
      if (!validImageType.includes(fileType)) {
        alert("Please insert only jpg, jpeg and png");
      } else {
        if (uploadFile) {
          console.log(URL.createObjectURL(uploadFile));
          $(".upload-img-frame")
            .attr("src", URL.createObjectURL(uploadFile))
            .addClass("success");
        }
        filename = $(this)[0].files[0].name;
      }
      $(this).siblings(".upload-name").val(filename);
    }
  });
});

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

  const memberImage = $(".member-image").get(0).files[0].name
    ? $(".member-image").get(0).files[0].name
    : null;

  if (!memberImage) {
    alert("Please insert restaurant image!");
    return false;
  }
}
