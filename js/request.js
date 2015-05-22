$("#form").on("submit", function(){
  $.ajax(
    type: "POST"
    url: "https://docs.google.com/forms/d/1M6W7IdCbIgEGn8xQ3ROfiklOG0J6B105NbgPB89qvl4/formResponse"
    data: {
      'entry.3': $("#name").val()
      'entry.4': $("#skype").val()
      'entry.1': $("#plugin-name").val()
      'entry.2': $("#plugin-description").val()
    }
  );
  alert("Your request has been submitted!");
});
