// Select the target node and attribute
const targetNode = document.querySelector('.ytp-progress-bar');
const targetAttr = 'aria-valuenow';

if (!targetNode) {
    console.error('Target element not found');
  } else if (targetNode.nodeType !== Node.ELEMENT_NODE) {
    console.error('Target element is not a valid DOM node');
  } else {
    // Create a new observer instance
    const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === targetAttr) {
            // Check if the attribute value is equal to a certain value
            if (mutation.target.getAttribute(targetAttr) >= '5') {
                document.querySelector('.ytp-ad-skip-button.ytp-button').click();
            }
        }
    }
    });

    // Start observing the target node for attribute changes
    observer.observe(targetNode, { attributes: true });
  }