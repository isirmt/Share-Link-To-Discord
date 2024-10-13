document.getElementById('save').addEventListener('click', function () {
  const webhookUrl = document.getElementById('webhook-url').value;
  chrome.storage.sync.set({ webhookUrl: webhookUrl }, () => {
    alert('Webhook URL Saved!');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.sync.get('webhookUrl', (data) => {
    if (data.webhookUrl) {
      document.getElementById('webhook-url').value = data.webhookUrl;
    }
  });
});
