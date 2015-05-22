$("#form").on("submit", function(){
  $.ajax(
    type: "POST"
    url: "https://docs.google.com/forms/d/FORM-ID/formResponse"
    data: {
      'entry.name': $("#name").val()
      'entry.skype': $("#skype").val()
      'entry.plugin': $("#plugin-name").val()
      'entry.description': $("#plugin-description").val()
    }
  );
});
