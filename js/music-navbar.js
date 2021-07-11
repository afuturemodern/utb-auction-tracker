function loadNavbar() {
    toggle = document.querySelectorAll(".toggle")[0];
nav = document.querySelectorAll("nav")[0];

toggle_open_text = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="116px" height="116px" viewBox="0 0 226 226" enable-background="new 0 0 226 226" xml:space="preserve">
<g id="record">
<circle fill="#2C3E50" cx="112.11" cy="121.222" r="88.333"/>
<circle fill="#E74C3C" cx="112.109" cy="121.223" r="35.333"/>
<path fill="#4F5E6D" d="M89.414,168.208c-18.393-9.132-29.818-27.552-29.816-48.073c-0.001-10.566,3.068-20.789,8.875-29.563
   l4.17,2.76c-5.264,7.953-8.046,17.222-8.045,26.803c-0.001,18.609,10.36,35.313,27.04,43.594L89.414,168.208z"/>
<circle fill="#FFFFFF" cx="111.664" cy="121.333" r="12.333"/>
<path fill="#4F5E6D" d="M84.985,177.39c-21.99-10.919-35.651-32.943-35.65-57.478c0-12.675,3.692-24.932,10.68-35.448l4.164,2.768
   c-6.44,9.692-9.845,20.993-9.844,32.68c0,22.623,12.596,42.931,32.874,53L84.985,177.39z"/>
<path fill="#4F5E6D" d="M79.668,188.412c-26.311-13.062-42.655-39.413-42.654-68.768c-0.001-15.61,4.659-30.633,13.477-43.446
   l4.119,2.835c-8.241,11.975-12.597,26.018-12.596,40.611c-0.001,27.444,15.279,52.078,39.877,64.29L79.668,188.412z"/>
<path fill="#4F5E6D" d="M153.016,155.227l-3.962-3.051c11.361-14.755,13.352-34.311,5.193-51.035
   c-4.2-8.613-10.764-15.724-18.981-20.564l2.538-4.308c9.065,5.34,16.305,13.183,20.937,22.68
   C167.737,117.392,165.543,138.956,153.016,155.227z"/>
<path fill="#4F5E6D" d="M161.021,161.537l-3.962-3.051c13.812-17.939,16.23-41.714,6.313-62.046
   c-5.123-10.504-13.136-19.169-23.174-25.058l2.53-4.312c10.89,6.389,19.583,15.787,25.138,27.179
   C178.623,116.299,175.999,142.083,161.021,161.537z"/>
<path fill="#4F5E6D" d="M170.632,169.113l-3.962-3.051c16.755-21.76,19.69-50.599,7.659-75.263
   c-6.396-13.118-16.467-23.83-29.124-30.98l2.459-4.354c13.542,7.65,24.317,19.11,31.159,33.142
   C191.692,114.99,188.554,145.838,170.632,169.113z"/>
</g>
<g id="needle">
<circle fill="#9B8010" cx="191.664" cy="26.333" r="18.333"/>
<path fill="#FFFFFF" d="M195.152,38.158c5.111-1.505,8.845-6.226,8.845-11.825c0-6.811-5.521-12.333-12.333-12.333
   c-6.811,0-12.333,5.521-12.333,12.333c0,3.628,1.576,6.88,4.07,9.137l-11.944,91.183c-1.618-0.176-3.246,0.638-4.014,2.18
   l-12.033,24.169c-0.985,1.979-0.18,4.379,1.797,5.364l9.847,4.901c1.977,0.986,4.379,0.181,5.363-1.797l5.317-10.681l4.804,2.73
   l1.482-2.607l-4.948-2.812l5.378-10.801c0.962-1.932,0.207-4.261-1.675-5.285c0.083-0.244,0.145-0.499,0.179-0.764L195.152,38.158z
   "/>
</g>
</svg>`;

toggle_close_text = `<img src="./img/utb.png" width="110px" height="110px">`;

toggle.addEventListener('click', function() {
	nav.classList.toggle('open');
	
  if (nav.classList.contains('open')) {
    toggle.innerHTML = toggle_close_text;
  } else {
    toggle.innerHTML = toggle_open_text;
  }
}, false);

setTimeout(function(){
	nav.classList.toggle('open');	
}, 800);
}