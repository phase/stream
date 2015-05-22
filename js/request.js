$("#form").on("submit", function(){
  $.ajax(
    type: "POST"
    url: "https://docs.google.com/forms/d/FORM-ID/formResponse"
    data: {
      'entry.1': $("#input").val()
    }
  );
});
