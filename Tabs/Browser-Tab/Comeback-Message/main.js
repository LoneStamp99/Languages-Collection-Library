function updateTitle() {
  const title = document.querySelector('title');
  const currentUrl = window.location.href;
  const siteName = 'Elizabeth Vasilenko'; // replace 'My Site' with your site name
  const newTitle = `Go back to ${siteName}`;
  title.innerHTML = newTitle; // update the title element with the new title text
  window.history.pushState({}, '', currentUrl); // save the current URL and state to the history stack
}

function displayMessage() {
  const originalSiteName = 'Elizabeth Vasilenko'; // replace 'My Site' with your site name
  const message = 'Your back!'; // replace 'Come back soon!' with the message you want to display
  const title = document.querySelector('title');

  // Update the title element with the message
  title.innerHTML = message;

  // Set a timeout to restore the original site name after 3 seconds
  setTimeout(function() {
    title.innerHTML = `${originalSiteName}`;
  }, 3000);
}


window.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'hidden') {
    updateTitle();
  } else {
    displayMessage();
  }
});

window.addEventListener('beforeunload', function() {
  updateTitle();
});

window.addEventListener('unload', function() {
  displayMessage();
});
