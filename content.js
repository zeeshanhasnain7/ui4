(function() {
  'use strict';

  /* this the start of the chat ticket escalation option */


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

/* this the end of the chat ticket escalation option */

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
  setTimeout(addUIButton, 10000);
})();
