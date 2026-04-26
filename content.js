const hideReels = () => {
  // Find all headings on the page
  const headings = document.querySelectorAll('h3, span, div');
  
  headings.forEach(element => {
    // Check if the element contains the word "Reels"
    if (element.textContent === 'Reels') {
      // Find the big container that holds the whole Reels section
      const container = element.closest('.x1lliihq'); // This is a common FB container class
      if (container) {
        container.style.display = 'none';
      }
    }
  });
};

// Run it once when the page loads
hideReels();

// Keep watching for new items as you scroll
const observer = new MutationObserver(hideReels);
observer.observe(document.body, { childList: true, subtree: true });