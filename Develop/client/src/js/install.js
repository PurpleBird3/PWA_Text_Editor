// REFERENCE EXAMPLES FROM FOLDER 19 (28 mini project) etc...
//  MY COMMENTS IN ALL CAPS
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {});

// I COMMENTED OUT STARTER CODE ABOVE, PASTED IT ON LINE 10 AND STARTED THERE
window.addEventListener('beforeinstallprompt', (event) => {
    // CONSOLE LOG THE EVENT
    console.log('beforeinstallprompt started!!!' + event);

    // *** PREVENTDEFAULT???
    // event.preventDefault();

    // STORE THE EVENT SO IT CAN BE TRIGGERED LATER
    window.deferredPrompt = event;
    // REMOVE THE HIDDEN CLASS FROM THE INSTALL BUTTON
    butInstall.classList.toggle('hidden', false);
    // **** PROMPT THE USER WHEN IT HAS ENED????
    // console.log('beforeinstallprompt ended.');
});

// TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => { });

// I COMMENTED OUT STARTER CODE ABOVE, PASTED IT ON LINE 23 AND STARTED THERE
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    //  LOG SUCCESSFUL promptEvent TO THE CONSOLE
    // console.log('Clicked!' + promptEvent);

    // IF NOT promptEvent THEN RETURN WITH ERROR MESSAGE
    if (!promptEvent) {
        // SHOW THE USER THE ERROR MESSAAGE IF THE PROMPT EVENT IS NOT SUCCESSFUL
        error.log('Install HAS NOT been triggered');
        return;
    }
    // SHOW THE INSTALL PROMPT TO THE USER (IS THIS NEEDED IF I CONSOLE LOGGED IT ABOVE???)
    promptEvent.prompt();

    // RESET THE deferredPrompt VARIABLE (Can only be used once I think?)
    window.deferredPrompt = null;

    // HIDE THE INSTALL BUTTON
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => { });

// I COMMENTED OUT STARTER CODE ABOVE, PASTED IT ON LINE 29 AND STARTED THERE
// ADDED AN UNDERSCORE TO THE EVENT (_event) TO AVOID CONFLICT WITH THE EVENT ABOVE
window.addEventListener('appinstalled', (_event) => {
    // CLEAR THE PROMPT
    window.deferredPrompt = null;
});