const themeButton = document.getElementById('toggle-theme');
let theme = localStorage.getItem('data-theme');
if (theme == 'dark') changeThemeToDark();


if(localStorage.getItem('data-theme') == 'dark'){
    themeButton.checked = true;  
}

themeButton.addEventListener('change',  () => {
    let theme = localStorage.getItem('data-theme');
    if (!themeButton.checked){
        const changeThemeToLight = () => {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("data-theme", 'light');
            };
    }else{
        const changeThemeToDark = () => { 
            document.documentElement.setAttribute("data-theme");
            localStorage.setItem("data-theme", "dark")
            };
        }

    }
);
