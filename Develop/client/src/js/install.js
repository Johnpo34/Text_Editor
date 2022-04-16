const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.firstPrompt = event;

    butInstall.todoList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.firstPrompt;

    if(!promptEvent) {
        return;
    }

    promptEvent.Promp();
    window.firstPrompt =null;

    butInstall.todoList('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.firstPrompt = null;
});
