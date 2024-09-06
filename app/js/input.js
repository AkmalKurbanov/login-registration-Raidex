$(".input__pass-icon.open").on("click", function () {
  $(this).hide();
  $(this).parent().find(".input__pass-icon.close").show();
  $(this).parent().find("input").attr('type','text');
  
});
$(".input__pass-icon.close").on("click", function () {
  $(this).hide();
  $(this).parent().find(".input__pass-icon.open").show();
  $(this).parent().find("input").attr('type','password');
});
