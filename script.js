'use strict';

function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(function() {
    }, function() {
        alert("False");
    });
}

const snackbar = document.querySelector('#snackbar');
const discordbutton = document.querySelector('#discord');
const emailbutton = document.querySelector('#email');


const discordhandler = function(event) {
    updateClipboard("Whiskey#8832");
};

discordbutton.addEventListener('click', function() {
  'use strict';
  var data = {
    message: 'Whiskey#8832',
    timeout: 2000,
    actionHandler: discordhandler,
    actionText: 'Copy'
  };
  snackbar.MaterialSnackbar.showSnackbar(data);
});


const emailhandler = function(event) {
    updateClipboard("whiskeydev@protonmail.com");
};

emailbutton.addEventListener('click', function() {
  'use strict';
  var data = {
    message: 'whiskeydev@protonmail.com',
    timeout: 2000,
    actionHandler: emailhandler,
    actionText: 'Copy'
  };
  snackbar.MaterialSnackbar.showSnackbar(data);
});
