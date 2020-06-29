let isDark = false;

const switchMode = document.querySelector('.mode--js');
switchMode.addEventListener('click',() => {
    if (isDark) {
    document.documentElement.style.setProperty('--background-color','#fefefe');
    document.documentElement.style.setProperty('--text-color', '#333333');
    isDark = false;
    } else {
    document.documentElement.style.setProperty('--background-color','#333333');
    document.documentElement.style.setProperty('--text-color', '#fefefe');
    isDark = true;
    }
})