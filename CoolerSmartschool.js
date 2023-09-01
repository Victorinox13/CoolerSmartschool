// ==UserScript==
// @name         CoolerSmartschool
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Maak Smartschool cooler.
// @author       VictorDL
// @match        https://???.smartschool.be/* <- jouw smartschool adress
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // Function to insert the new elements and change background color
    function insertElementsAndChangeBackground() {
        // Create the new elements
        var schoolAgendaElement = document.createElement('a');
        schoolAgendaElement.href = "/index.php?module=Agenda";
        schoolAgendaElement.className = "js-btn-home topnav__btn";
        schoolAgendaElement.style.backgroundImage = "url('/smsc/svg/address_book2/address_book2_24x24.svg')";
        schoolAgendaElement.style.minWidth = "50px"; // Updated minWidth to "50px"
        schoolAgendaElement.style.backgroundPosition = "50%";
        schoolAgendaElement.style.backgroundRepeat = "no-repeat";

        var berichtenElement = document.createElement('a'); // Change to anchor
        berichtenElement.href = "/index.php?module=Messages&file=index&function=main";
        berichtenElement.className = "js-btn-messages topnav__btn";
        berichtenElement.style.backgroundImage = 'url("/smsc/svg/mail/mail_24x24.svg")';
        berichtenElement.style.minWidth = "50px"; // Set minWidth to "50px" for "Berichten"
        berichtenElement.style.backgroundPosition = "50% center";
        berichtenElement.style.backgroundRepeat = "no-repeat";

        var vakkenElement = document.querySelector('button.js-btn-courses.topnav__btn');
        if (vakkenElement) {
            // Remove the title text from Vakken button
            vakkenElement.textContent = ''; // This removes the text content
            vakkenElement.setAttribute('style', 'background-image: url("/smsc/svg/schoolbord/schoolbord_24x24.svg"); min-width: 50px; background-position: 50% center; background-repeat: no-repeat;');
            vakkenElement.setAttribute('aria-haspopup', 'true');
            vakkenElement.setAttribute('aria-expanded', 'false');
        } else {
            console.error('Unable to find the Vakken button element to style.');
        }

        // Find the parent <nav> element
        var topnav = document.querySelector('nav.topnav');

        if (topnav) {
            // Find all child elements within the <nav> element
            var childElements = topnav.children;

            // Locate elements based on data attributes
            var startLink, shortcutsDiv;
            for (var i = 0; i < childElements.length; i++) {
                var element = childElements[i];
                if (element.tagName === 'A' && element.getAttribute('href') === '/') {
                    startLink = element;
                } else if (element.tagName === 'DIV' && element.getAttribute('data-shortcuts') !== null) {
                    shortcutsDiv = element;
                }
            }

            if (startLink && shortcutsDiv) {
                // Insert the new Agenda element between the "Start" link and the shortcutsDiv
                topnav.insertBefore(schoolAgendaElement, shortcutsDiv);

                // Insert the "Berichten" anchor before the shortcutsDiv
                shortcutsDiv.parentNode.insertBefore(berichtenElement, shortcutsDiv);

                // Find the element to replace (Vakken button)
                var vakkenButton = document.querySelector('button.js-btn-courses.topnav__btn');
                if (vakkenButton) {
                    // Replace the Vakken button element
                    vakkenButton.parentNode.replaceChild(vakkenElement, vakkenButton);
                } else {
                    console.error('Unable to find the Vakken button element to replace.');
                }

                // Change the background color of the <nav> element
                topnav.style.background = '#8b00a2'; // Change to the desired color
            } else {
                console.error('Unable to locate the "Start" link and/or shortcutsDiv.');
            }
        } else {
            console.error('Unable to find the <nav> element on the page.');
        }
    }

    // Insert the elements and change background color initially
    insertElementsAndChangeBackground();

    // Observe mutations to the <nav> element
    var targetNode = document.querySelector('nav.topnav');
    var observerOptions = {
        childList: true, // Watch for changes in child elements
    };

    var observer = new MutationObserver(function(mutationsList) {
        // When mutations occur, re-insert the elements and change background color
        insertElementsAndChangeBackground();
    });

    // Start observing
    observer.observe(targetNode, observerOptions);
})();

