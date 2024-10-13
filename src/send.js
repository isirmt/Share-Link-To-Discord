(function () {
  chrome.storage.sync.get('webhookUrl', function (data) {
    const webhookUrl = data.webhookUrl;
    if (!webhookUrl) {
      console.error("No webhook URL set. Please set it in the options.");
      return;
    }

    const url = location.href;
    const request = new XMLHttpRequest();
    const params = {
      content: url
    };

    request.open("POST", webhookUrl, true);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(params));

    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 204) {
        console.log("URL successfully sent to Discord:", url);
      } else if (request.readyState === 4) {
        console.error("Failed to send URL to Discord:", request.status, request.statusText);
      }
    };
  });
})();
