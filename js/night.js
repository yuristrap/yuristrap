var checkbox = document.querySelector('input[name=mode]');
	
if (localStorage.toggled === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    checkbox.checked = true;
}

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.toggled = 'dark';
    } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.toggled = '';
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 100)
}