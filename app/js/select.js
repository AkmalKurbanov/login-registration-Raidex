$(".select_parcel-size li").on("click", function (e) {
  e.preventDefault();
  let dataSizeId1 = $(this).attr("data-size-id");

  $(".select_parcel-size .size-js li").not(this).removeClass("active");
  $(this).addClass("active");
  $(this).parents(".select").addClass("open");

  $(".select_parcel-size .select__dropdown .select__dropdown-item").each(
    function (index) {
      $(this).hide();
      let dataSizeId2 = $(this).attr("data-size-id");
      if (dataSizeId2 == dataSizeId1) {
        $(this).show();
      }
    }
  );
});

$(".select__selected").on("click", function () {
  $(this).parents(".select").toggleClass("open");
  $(".select").not($(this).parents(".select")).removeClass("open");
  $(".footer").css("z-index", "inherit");

  let innerBlock =
    $(this).parent().find(".select__dropdown").offset().top +
    $(this).parent().find(".select__dropdown").outerHeight();
  let block = $(".wrapper").offset().top + $(".wrapper").outerHeight();

  if (innerBlock > block) {
    $(this).parent().css("border-radius", "6px");
    $(this)
      .parent()
      .find(".select__dropdown")
      .not($(".popup .select__wrap .select__dropdown"))
      .css({
        bottom: "calc(100% + 10px)",
        top: "auto",
        "border-radius": "6px",
      });
  }
});

$(".select .select__option").on("click", function () {
  $(this)
    .parents(".select")
    .not($(this).parents(".select_parcel-size"))
    .removeClass("open");
  let dataOption = $(this).attr("data-val");
  let imgSrc = $(this).find(".select-img-js img").attr("src");
  $(this).parents(".select").find("input").val(dataOption);
  $(this).parents(".select").find(".select__selected span").text(dataOption);
  $(this)
    .parents(".select")
    .find(".select__selected .select-country-js .select__selected-img")
    .remove();
  $(this)
    .parents(".select")
    .find(".select__selected .select-country-js")
    .prepend(
      `<div class="select__selected-img selected-img-js d-flex align-center justify-center mr-10"><img src="${imgSrc}" alt="country"></div>`
    );
  $(this).parents(".select").addClass("selected");
  let count = $(this).parent().find(".select__option").length;

  if (count >= 2) {
    $(".select .select__option").not($(this).hide()).show();
  }
});

$(".select.selected").each(function (index) {
  let selectedOption = $(this).find(".select__selected span").text();
  $(this)
    .find(".select__option")
    .each(function (index) {
      let option = $(this).attr("data-val");
      if (selectedOption == option) {
        $(this).hide();
      }
    });
});

$(".select-id .select__option").on("click", function () {
  let dataId = $(this).attr("data-id");
  let dataText = $(this).attr("data-text");
  $(this).parents(".select").find("input").attr("value", dataId);
  $(this).parents(".select").find(".select__selected span").text(dataText);
});

$(".select_parcel-size .select__option").on("click", function () {
  let dataId = $(this).attr("data-id");
  let dataText = $(this).attr("data-text");
  let dataSize = $(this).attr("data-size");
  let dataDesc = $(this).attr("data-desc");
  $(this).parents(".select").find("input").attr("value", dataId);
  if (dataSize) {
    $(this).parents(".select").find(".select__selected span").text(dataText);
    $(this)
      .parents(".select")
      .find(".select__selected span")
      .append(`<i class="fz-11 ml-5 text-green">${dataSize}</i>`);
    $(this)
      .parents(".select")
      .find(".select__selected")
      .attr("title", dataDesc);
  } else {
    $(this).parents(".select").find(".select__selected span").text(dataText);
  }
});

$(".input-wrap_documents").each(function (index) {
  let dataId = $(this).attr("data-id");
  let input = $("#documents.select.selected input").val();

  if (dataId == input) {
    $(this).css("display", "flex");
  } else {
    $(this).hide();
  }
});

$("#documents .select__option").on("click", function () {
  let dataId1 = $(this).attr("data-id");
  $(this).parents(".select").find("input").val(dataId1);

  $(".input-wrap_documents").each(function (index) {
    $(this).hide();
    let dataId2 = $(this).attr("data-id");
    if (dataId2 == dataId1) {
      $(this).show();
    }
  });
});

$(".select").each(function (index) {
  let dataOption = $(this).find(".select__selected span").text();

  $(".select__option").each(function (index) {
    if ($(this).attr("data-val") == dataOption) {
      $(this).hide();
    }
  });
});

$(".pagination-select-js").on("click", function () {
  $(this).toggleClass("open");
});

$(document).on("click", function (e) {
  if (!$(e.target).closest(".select__selected, .select__dropdown").length) {
    $(".select").removeClass("open");
    $(".footer").css("z-index", "12");
  }
  e.stopPropagation();
});

$(document).on("click", ".select-inn-js .select__option", function () {
  let dataIdOption = $(this).attr("data-id");
  let dataInnOption = $(this).attr("data-inn");
  let dataLabelOption = $(this).attr("data-label");
  $(".input-wrap-inn-input input").val("");
  $(".input-wrap-inn-input input").attr("maxlength", dataInnOption);
  $(".input-wrap-inn-input input").attr("placeholder", dataLabelOption);
  $(".input-wrap-inn-input .input label").html(
    dataLabelOption + "<span class='text-red'>*</span>"
  );
  if(dataInnOption ){
    $(".input-wrap-inn-input .input").show();
  }else{
    $(".input-wrap-inn-input .input").hide();

  }
});

