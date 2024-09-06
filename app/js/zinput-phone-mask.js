import intlTelInput from "intl-tel-input";

document.querySelectorAll(".phone-js").forEach((el) => {
  PhoneDisplay(el);
});

function PhoneDisplay(input) {
  var iti = intlTelInput(input, {
    hiddenInput: "full_phone",
    nationalMode: true,
    preferredCountries: [
      "kg",
      "kz",
      "uz",
      "at",
      "be",
      "bg",
      "hu",
      "de",
      "gr",
      "dk",
      "ie",
      "es",
      "it",
      "cy",
      "lv",
      "lt",
      "lu",
      "mt",
      "nl",
      "pl",
      "pt",
      "ro",
      "sk",
      "si",
      "fi",
      "fr",
      "hr",
      "cz",
      "se",
      "ee",
    ],
  });

  const handleChange = () => {
    let text;
    if (input.value) {
      text = iti.isValidNumber();
      if (text) {
        $(input).parents(".input").addClass("success");
        $(input).parents(".input").removeClass("error");
        $(input).attr("value", iti.getNumber());
        $(input).val(iti.getNumber());

        setTimeout(function () {
          $(input).parents(".input").removeClass("success");
        }, 2000);
      } else {
        $(input).parents(".input").addClass("error");
        $(input).parents(".input").removeClass("success");
        $(input).attr("value", iti.getNumber());
      }
    } else if (input.value == "") {
      $(input).parents(".input").removeClass("success");
      $(input).parents(".input").removeClass("error");
    } else {
      text = "Пожалуйста, введите действительный номер.";
    }
  };

  // listen to "keyup", but also "change" to update when the user selects a country
  // input.addEventListener('change', handleChange);
  input.addEventListener("keyup", handleChange);
}

$(document).on("click", ".phone-add-js", function () {
  document.querySelectorAll(".added-phone-js").forEach((el) => {
    PhoneDisplay(el);
  });

  function PhoneDisplay(input) {
    var iti = intlTelInput(input, {
      hiddenInput: "full_phone",
      nationalMode: true,
      preferredCountries: [
        "kg",
        "kz",
        "uz",
        "ru",
        "uk",
        "by",
        "tj",
        "tm",
        "az",
        "am",
        "md",
      ],
    });

    const handleChange = () => {
      let text;
      if (input.value) {
        text = iti.isValidNumber();
        if (text) {
          $(input).parents(".input").addClass("success");
          $(input).parents(".input").removeClass("error");
          text = "Номер действительный!";
          $(input).parents().find(".output").text(text);
          $(input).attr("value", iti.getNumber());
          $(input).val(iti.getNumber());
        } else {
          $(input).parents(".input").addClass("error");
          $(input).parents(".input").removeClass("success");
          $(input).attr("value", iti.getNumber());
          text = "Неверный номер. Повторите попытку.";
          $(input).parents().find(".output").text(text);
        }
      } else if (input.value == "") {
        $(input).parents(".input").removeClass("success");
        $(input).parents(".input").removeClass("error");
        text = "";
        $(input).parents().find(".output").text(text);
      } else {
        text = "Пожалуйста, введите действительный номер.";
      }
    };

    // listen to "keyup", but also "change" to update when the user selects a country
    input.addEventListener("change", handleChange);
    input.addEventListener("keyup", handleChange);
  }
});

$(".input_phone").each(function (index) {
  let $this = $(this);
  let $width = $this.outerWidth();

  $this.find(".iti__country-list").css({
    "min-width": $width,
    "max-width": $width,
  });
});
