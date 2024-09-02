// ==UserScript==
// @name         CoolerSmartschool
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Maak Smartschool cooler.
// @author       VictorDL
// @match        https://sjs.smartschool.be/*  
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    console.log("shit is working");
    // Function to insert the new elements and change background color
    function insertElementsAndChangeBackground() {
        // Create the new elements
        var schoolAgendaElement = document.createElement('a');
        schoolAgendaElement.href = "/planner/main/user/";
        schoolAgendaElement.className = "js-btn-home topnav__btn";
        schoolAgendaElement.style.backgroundImage = "url('https://github.com/Victorinox13/CoolerSmartschool/blob/main/imresizer-1725274840155.jpg?raw=true')"
        schoolAgendaElement.style.minWidth = "50px"; // Updated minWidth to "50px"
        schoolAgendaElement.style.backgroundPosition = "50%";
        schoolAgendaElement.style.backgroundRepeat = "no-repeat";

        var berichtenElement = document.querySelector('a.js-btn-messages.topnav__btn'); // Change to anchor
        if (berichtenElement) {
            berichtenElement.textContent = "";
            berichtenElement.setAttribute('style', 'background-image: url("/smsc/svg/schoolbord/schoolbord_24x24.sv"); min-width: 50px; background-position: 50% center; background-repeat: no-repeat;');
            berichtenElement.setAttribute('href', '/?module=Messages&file=index&function=main')
        } else {
            console.error('messages is not demure');
        }

        var startElement = document.querySelector('a.js-btn-home.topnav__btn.topnav__btn--push-right'); // Change to anchor
        if (startElement) {
            startElement.textContent = "";
            startElement.setAttribute('style', 'background-image: url("https://github.com/Victorinox13/CoolerSmartschool/blob/main/imresizer-1725276013894.jpg?raw=true"); min-width: 50px; background-position: 50% center; background-repeat: no-repeat;');
            startElement.setAttribute('href', '/')
        } else {
            console.error('starrt is not demure');
        }
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
        topnav.setAttribute('style', 'background-color: rgb( 255, 255, 255); background-image: url("https://github.com/Victorinox13/CoolerSmartschool/blob/main/imresizer-1725276947111.jpg?raw=true"); min-width: 50px; background-position: 50% center; background-size: initial;');
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
                shortcutsDiv.parentNode.insertAfter(berichtenElement, shortcutsDiv);

                // Find the element to replace (Vakken button)
                var vakkenButton = document.querySelector('button.js-btn-courses.topnav__btn');
                if (vakkenButton) {
                    // Replace the Vakken button element
                    vakkenButton.parentNode.replaceChild(vakkenElement, vakkenButton);
                } else {
                    console.error('Unable to find the Vakken button element to replace.');
                }
                var startButton = document.querySelector('a.js-btn-home topnav__btn.topnav__btn--push-right');
                if (startButton) {
                    // Replace the Vakken button element
                    startButton.parentNode.replaceChild(startElement, startButton);
                } else {
                    console.error('Unable to find the agenda button element to replace.');
                }

                // Change the background color of the <nav> element
                topnav.style.background = '#808080'; // Change to the desired color
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

