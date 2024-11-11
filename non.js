var xhr = new XMLHttpRequest();
xhr.open("POST", "your-url-here", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// Sending data
var data = "key1=value1&key2=value2";
xhr.send(data);

// Handling response
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
