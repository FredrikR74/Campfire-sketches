// Campfire – Laddar delade navbar och footer-komponenter.
// Lägg till i varje sida före </body>:
//   <div id="navbar-slot" data-variant="dark"></div>   (eller "white")
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
        var variant = navSlot.getAttribute('data-variant') || 'dark';
        var navFile = variant === 'white' ? 'navbar-white.html' : 'navbar.html';
        fetch(base + navFile)
            .then(function (r) { return r.text(); })
            .then(function (html) {
                navSlot.innerHTML = html;
                // Aktivera scroll-effekt för mörk navbar
                if (variant === 'dark') {
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
                }
            });
    }

    if (footerSlot) {
        fetch(base + 'footer.html')
            .then(function (r) { return r.text(); })
            .then(function (html) { footerSlot.innerHTML = html; });
    }
})();
