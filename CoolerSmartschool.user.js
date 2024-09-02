// ==UserScript==
// @name         CoolerSmartschool
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Maak Smartschool cooler.
// @author       Victor Deleeck
// @match        https://sjs.smartschool.be/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    console.log("working");
    ///

     //hier boven niet naar kijken



    ///
    
     var bannerFoto = 'https://github.com/Victorinox13/CoolerSmartschool/blob/main/Ontwerp%20zonder%20titel%20(1).png?raw=true' //  < laat leeg als niet wilt 
     var bannerKleur = 'orange'














    // Function die alle elementen er in zal zetten
    function insertElementsAndChangeBackground() {


        //
        //      planner
        //
        var schoolAgendaElement = document.createElement('a');



        schoolAgendaElement.href = "/planner/main/user/";
        schoolAgendaElement.className = "js-btn-home topnav__btn";

        schoolAgendaElement.style.backgroundImage = "url('/smsc/svg/planner/planner_24x24.svg')";
        schoolAgendaElement.style.width = "40px"; // Further increase the width
        schoolAgendaElement.style.height = "40px"; // Further increase the height
        schoolAgendaElement.style.backgroundSize = "18px 18px"; // Keep the icon size smaller within the larger background
        schoolAgendaElement.style.backgroundPosition = "center"; // Center the background image
        schoolAgendaElement.style.backgroundRepeat = "no-repeat";
        schoolAgendaElement.style.backgroundColor = "white"; // Add white background
        schoolAgendaElement.style.borderRadius = "8px"; // Adjust the rounded corners
        schoolAgendaElement.style.padding = "10px"; // Increase padding for more spacing around the icon
        schoolAgendaElement.style.boxShadow = "0px 0px 4px rgba(0, 0, 0, 0.1)"; // Slightly more pronounced shadow







        //
        //      berichten
        //
        var berichtenElement = document.querySelector('a.js-btn-messages.topnav__btn');



        if (berichtenElement) {
            berichtenElement.textContent = "";
            berichtenElement.setAttribute('style', 'background-image: url("https://github.com/Victorinox13/CoolerSmartschool/blob/main/MessagesIcon.jpg?raw=true"); min-width: 50px; background-position: 50% center; background-repeat: no-repeat;');
            berichtenElement.setAttribute('href', '/?module=Messages&file=index&function=main')
        } else {
            console.error('messages is not demure');
        }










        //
        //      terug naar start
        //
        var startElement = document.querySelector('a.js-btn-home.topnav__btn.topnav__btn--push-right'); // Change to anchor
        if (startElement) {
            startElement.textContent = "";
            startElement.classList.remove('topnav__btn--push-right');
            startElement.setAttribute('style', 'flex: 1');
            startElement.setAttribute('href', '/')
        } else {
            console.error('starrt is not demure');
        }






        //
        //      clock
        //
        var clockDiv = document.createElement('div');
        clockDiv.id = 'customClock';
        clockDiv.style.position = 'middle';
        clockDiv.style.top = '10px'; // Adjust the position as needed
        clockDiv.style.right = '10px'; // Adjust the position as needed
        clockDiv.style.fontSize = '20px'; // Adjust the size as needed
        clockDiv.style.color = 'purple'; // Adjust the color as needed
        clockDiv.style.backgroundColor = 'rgba(255, 255, 255)'; // Optional background for better visibility
        clockDiv.style.padding = '50px 10px'; // Optional padding
        clockDiv.style.borderRadius = '5px'; // Optional rounded corners












        //
        //      meldingen
        //
        var meldingenElement = document.querySelector('button.js-btn-notifs.topnav__btn');
        var textNode = meldingenElement.childNodes[0];
        if (textNode.nodeType === Node.TEXT_NODE) {
            textNode.textContent = '';
        }






        //
        //      vakken
        //
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








        //
        //      ga naar
        //
        var gaNaarElement = document.querySelector('button.js-btn-shortcuts.topnav__btn');
        if (gaNaarElement) {
            // Remove the title text from Vakken button
            gaNaarElement.textContent = ''; // This removes the text content
            gaNaarElement.setAttribute('style', 'background-image: url("/smsc/svg/earth_location/earth_location_24x24.svg"); min-width: 50px; background-position: 50% center; background-repeat: no-repeat;');
            gaNaarElement.setAttribute('aria-haspopup', 'true');
            gaNaarElement.setAttribute('aria-expanded', 'false');
        } else {
            console.error('Unable to find the Vakken button element to style.');
        }










       //
        //      link
        //
        var linkElement = document.querySelector('button.js-btn-links.topnav__btn');
        if (linkElement) {
            // Remove the title text from Vakken button
            linkElement.textContent = ''; // This removes the text content
            linkElement.setAttribute('style', 'background-image: url("https://github.com/Victorinox13/CoolerSmartschool/blob/main/LINK.png?raw=true"); min-width: 50px; background-position: 50% center; background-repeat: no-repeat;');
            linkElement.setAttribute('aria-haspopup', 'true');
            linkElement.setAttribute('aria-expanded', 'false');
        } else {
            console.error('Unable to find the Vakken button element to style.');
        }











        //
        //      naam+profiel
        //
        var NaamElement = document.querySelector('button.js-btn-profile.topnav__btn.topnav__btn--profile');
        if (NaamElement) {
            NaamElement.textContent = "";
        }else{
            console.error('naam niet gevonden.');

        }










        //
        //      banner
        //
        var topnav = document.querySelector('nav.topnav');
        topnav.setAttribute('style', 'background-color: ' + bannerKleur + '; background-image: url("' + bannerFoto + '"); min-width: 50px; background-position: 50% center; background-size: initial;');





        if (topnav) {

            var childElements = topnav.children;


            var startLink, shortcutsDiv;
            for (var i = 0; i < childElements.length; i++) {
                var element = childElements[i];
                if (element.tagName === 'A' && element.getAttribute('href') === '/') {
                    startLink = element;
                } else if (element.tagName === 'DIV' && element.getAttribute('data-shortcuts') !== null) {
                    shortcutsDiv = element;
                }
            }
            topnav.prepend(clockDiv);

            // Function to update the clock
            function updateClock() {
                var now = new Date();
                var hours = now.getHours().toString().padStart(2, '0');
                var minutes = now.getMinutes().toString().padStart(2, '0');
                var seconds = now.getSeconds().toString().padStart(2, '0');
                clockDiv.textContent = hours + ':' + minutes + ':' + seconds;
            }

            // Update the clock every second
            setInterval(updateClock, 1000);

            // Initialize the clock immediately
            updateClock();

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
            berichtenElement.setAttribute('style', 'background-image: url("/smsc/svg/schoolbord/schoolbord_24x24.svg"); min-width: 50px; background-position: 50% center; background-repeat: no-repeat;');
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

