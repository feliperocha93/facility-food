const contentHome = document.querySelector('div .content-home');
const customControls = document.querySelector('div .custom-controls');
const windowHeight = screen.height;
const nonBlankScreen = customControls.offsetTop + customControls.getBoundingClientRect().height;
const blankScreen = windowHeight - nonBlankScreen;

contentHome.style.height = `${blankScreen}px`;


