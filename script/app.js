const handlePasswordSwitcher = function () {
    console.log("handlePasswordSwitcher executed");
    const jsPassword = document.querySelector('.js-password-input')
    const jsToggle = document.querySelector('.js-password-toggle-checkbox');
    jsToggle.addEventListener('click',function () { 
        if(jsPassword.type == 'text'){
            jsPassword.type = 'password';
        }
        else if(jsPassword.type == 'password'){
            jsPassword.type = 'text';
        }
    })
}

const init = function () {
    console.log('Script loaded!');

    // init password switcher
    handlePasswordSwitcher();

    // Other init functions here
}

init();