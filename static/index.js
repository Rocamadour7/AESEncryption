function generateKey() {
    var key = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    $("#key").val(key);
}

function encrypt() {
    var message = $("#plain-text").val();
    var key = $("#key").val();

    $.ajax({
        url: '/encrypt',
        method: 'POST',
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        data: JSON.stringify({ message, key }),
        success: function(response) {
            $("#ciphertext").val(response.data);
        }
    });
}

function decrypt() {
    var ciphertext = $("#ciphertext").val();
    var key = $("#key").val();

    $.ajax({
        url: '/decrypt',
        method: 'POST',
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        data: JSON.stringify({ ciphertext, key }),
        success: function(response) {
            $("#plain-text").val(response.data);
        }
    });
}