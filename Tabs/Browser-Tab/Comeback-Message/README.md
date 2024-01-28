# "Go back + name of site" message when adding or switching TAB.

## This project implements a feature that displays a dynamic message in the browser tab when the user switches to another tab or adds a new one. The primary goal is to create a personalized user experience and encourage users to return to the site.

### Code Overview

<div class="code-container" id="code-container">
  <!-- Your code block goes here -->
  <pre><code class="language-javascript" id="code-block">
function updateTitle() {
  const title = document.querySelector('title');
  const currentUrl = window.location.href;
  const siteName = 'My Site'; // replace 'My Site' with your site name
  const newTitle = `Go back to ${siteName}.`;
  title.innerHTML = newTitle; // update the title element with the new title text
  window.history.pushState({}, '', currentUrl); // save the current URL and state to the history stack
}

function displayMessage() {
  const originalSiteName = 'My Site'; // replace 'My Site' with your site name
  const message = 'Your back!'; // replace 'Come back soon!' with the message you want to display
  const title = document.querySelector('title');

  // Update the title element with the message
  title.innerHTML = message;

  // Set a timeout to restore the original site name after 3 seconds
  setTimeout(function() {
    title.innerHTML = `Go back to ${originalSiteName}.`;
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

  </code></pre>

  <!-- Add a copy button -->
  <button onclick="copyCodeToClipboard()">Copy</button>
</div>

<script>
function copyCodeToClipboard() {
  var codeBlock = document.getElementById('code-block');
  var range = document.createRange();
  range.selectNode(codeBlock);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();

  // Change button text temporarily to indicate success
  var copyButton = document.querySelector('.code-container button');
  copyButton.innerText = 'Copied!';
  setTimeout(function() {
    copyButton.innerText = 'Copy';
  }, 1500);
}
</script>

### Usage

#### Simply include this code in your project to enhance user engagement. Customize the siteName variable to reflect your actual site name, and modify the message variable in the displayMessage function to convey the desired greeting when users return.
