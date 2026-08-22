/* Wii U Internet Browser: drop modern CSS and load a compatible sheet. */
(function () {
  if (!/Nintendo WiiU/i.test(navigator.userAgent)) return;
  document.documentElement.className += (document.documentElement.className ? ' ' : '') + 'wiiu';
  var vp = document.querySelector('meta[name="viewport"]');
  if (vp) vp.content = 'width=980';
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/wiiu.css';
  document.head.appendChild(link);
})();
