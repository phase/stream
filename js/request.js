$("#form").submit(function(event) {
    event.preventDefault();
    $.post("https://docs.google.com/forms/d/1M6W7IdCbIgEGn8xQ3ROfiklOG0J6B105NbgPB89qvl4/formResponse", {
        'entry.1048881380': $("#name").val(),
        'entry.1646269383': $("#skype").val(),
        'entry.1775568240': $("#plugin-name").val(),
        'entry.392196055': $("#plugin-description").val()
    }).always(function() {
        alert("Your request has been submitted!");
    });
});
