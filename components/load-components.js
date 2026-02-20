// Campfire – Laddar delade navbar och footer-komponenter.
// Lägg till i varje sida före </body>:
//   <div id="navbar-slot"></div>
//   <div id="footer-slot"></div>
//   <script src="components/load-components.js"></script>
//   (eller src="../components/load-components.js" från pages/)

(function () {
    // Bestäm bas-sökväg relativt till detta script
    var scripts = document.getElementsByTagName('script');
    var src = scripts[scripts.length - 1].src;
    var base = src.substring(0, src.lastIndexOf('/') + 1);

    var navSlot = document.getElementById('navbar-slot');
    var footerSlot = document.getElementById('footer-slot');

    if (navSlot) {
        fetch(base + 'navbar.html')
            .then(function (r) { return r.text(); })
            .then(function (html) {
                navSlot.innerHTML = html;
                // Exekvera <script>-taggar som injicerats via innerHTML
                // (webbläsare kör dem inte automatiskt)
                navSlot.querySelectorAll('script').forEach(function (oldScript) {
                    var newScript = document.createElement('script');
                    oldScript.getAttributeNames().forEach(function (attr) {
                        newScript.setAttribute(attr, oldScript.getAttribute(attr));
                    });
                    newScript.textContent = oldScript.textContent;
                    document.head.appendChild(newScript);
                    oldScript.parentNode.removeChild(oldScript);
                });
                // Aktivera scroll-effekt för navbar
                var nb = document.getElementById('navbar');
                if (nb) {
                    window.addEventListener('scroll', function () {
                        if (window.scrollY > 80) {
                            nb.classList.add('scrolled');
                        } else {
                            nb.classList.remove('scrolled');
                        }
                    });
                }
            });
    }

    if (footerSlot) {
        fetch(base + 'footer.html')
            .then(function (r) { return r.text(); })
            .then(function (html) { footerSlot.innerHTML = html; });
    }
})();
