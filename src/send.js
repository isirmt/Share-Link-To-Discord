(function () {
  const url = location.href
  const request = new XMLHttpRequest();
  const params = {
    content: url
  };

  request.open("POST", "your hook", true);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.send(JSON.stringify(params));

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 204) {
      console.log("URL successfully sent to Discord:", url);
    } else if (request.readyState === 4) {
      console.error("Failed to send URL to Discord:", request.status, request.statusText);
    }
  };
})();