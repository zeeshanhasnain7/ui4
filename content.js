(function() {
  'use strict';


    //=== TICKET ESCALATIONS






(function() {
    'use strict';

    // Function to update the value as a link
    function updateDataCyValue() {
        const element = document.querySelector('[data-cy="cs-email-box_subject-header-title"]');
        if (element) {
            const link = document.createElement('a');
            const text = element.textContent.trim();
            const startIndex = text.indexOf('Escalate from HeroCare TicketID:    ') + 'Escalate from HeroCare TicketID:    '.length;
            const ticketId = text.substring(startIndex);
            link.href = 'https://foodpanda-asia.deliveryherocare.com/cases/' + ticketId;
            link.target = '_blank'; // Open link in a new tab
            link.textContent = ticketId;
            element.textContent = '';
            element.appendChild(link);
        }
    }

    // Create a Mutation Observer
    const observer = new MutationObserver(function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Check if the added node contains the specified data-cy element
                const addedNodes = Array.from(mutation.addedNodes);
                if (addedNodes.some(node => node.querySelector && node.querySelector('[data-cy="cs-email-box_subject-header-title"]'))) {
                    // Wait for 2 seconds before updating the data-cy value
                    setTimeout(updateDataCyValue, 2000);
                    break;
                }
            }
        }
    });

    // Start observing mutations
    observer.observe(document.documentElement, { childList: true, subtree: true });
})();



    //====== OPEN UI AND OLD AND NEW UI BUTTONS

  // Function to add the UI toggle button
  function addUIButton() {
    var headerTag = document.getElementsByTagName('header')[0];
    if (headerTag) {
      var button = document.createElement('button');
      button.innerHTML = 'Toggle UI';
      button.style.marginRight = '10px';
      button.style.background = '#1890ff';
      button.style.color = '#fff';
      button.style.height = '40px';
              button.style.marginRight = '200px';

      button.style.borderRadius = '10px';
      button.style.width = '100px';
      button.style.textAlign = 'center';
      button.style.verticalAlign = 'middle';
      button.style.outline = 'none';
      button.style.lineHeight = '40px';

      // Add event listener to the button
      button.addEventListener('click', toggleUI);

      headerTag.appendChild(button);
    }
  }

  // Function to toggle the UI version
  function toggleUI() {
    var iframe = document.getElementsByTagName('iframe')[0];
    if (iframe) {
      // Get the current URL of the iframe
      var currentUrl = iframe.src;

      // Toggle between the old and new UI versions
      var newUrl = currentUrl.includes('uiVersion=v1') ? currentUrl.replace('uiVersion=v1', 'uiVersion=v2') : currentUrl.replace('uiVersion=v2', 'uiVersion=v1');

      // Load the new URL in the iframe
      iframe.src = newUrl;
    }
  }

  // Function to handle the shortcut key
  function handleShortcut(event) {
    // Check if Ctrl key and Spacebar are pressed
    if (event.ctrlKey && event.code === 'Space') {
      event.preventDefault(); // Prevent any default browser behavior
      toggleUI(); // Execute the toggleUI function
    }
  }

  // Add event listener to handle the shortcut key
  document.addEventListener('keydown', handleShortcut);

  // Delay execution by 3 seconds using setTimeout
  setTimeout(addUIButton, 6000);







    (function() {
    'use strict';

    // Function to open the iframe link in a new tab
    function openUILink() {
        var iframe = document.querySelector('iframe');  // Replace with the appropriate iframe selector
        if (iframe) {
            var link = iframe.src;
            window.open(link, '_blank');
        }
    }

    // MutationObserver to wait for the header tag with a timeout of 5 seconds
    var timeout = 5000;
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var header = document.querySelector('header');  // Replace with the appropriate header selector
            if (header && header.getElementsByClassName('open-ui-button').length === 0) {
                // Create the button element
                var button = document.createElement('button');

      button.style.marginRight = '10px';
      button.style.background = 'white';
      button.style.color = '#1890ff';
      button.style.height = '40px';
              button.style.marginRight = '20px';
                button.style.outlineColor = '#1890ff';

      button.style.borderRadius = '10px';
      button.style.width = '100px';
      button.style.textAlign = 'center';
      button.style.verticalAlign = 'middle';
      button.style.outline = 'none';
      button.style.lineHeight = '40px';


                button.innerText = 'Open UI';
                button.className = 'open-ui-button';
                button.addEventListener('click', openUILink);
                header.appendChild(button);

                observer.disconnect();  // Stop observing once the header tag is found
            }
        });
    });

    // Start observing the document with the specified configuration
    var config = { childList: true, subtree: true };
    observer.observe(document, config);

    // Timeout function to stop observing after the specified time
    setTimeout(function() {
        observer.disconnect();
    }, timeout);
})();







})();
