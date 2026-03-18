var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}

const header = document.getElementById("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header.classList.remove("py-1", "xl:pt-4");
        header.classList.add("xl:py-1", "shadow-xl");
    } else {
        header.classList.remove("xl:py-1", "shadow-xl");
        header.classList.add("py-1", "xl:pt-4");
    }
});
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const id = tab.dataset.tab;

        // ẩn content
        contents.forEach(content => {
            content.classList.add("hidden");
        });

        document
            .querySelector(`[data-content="${id}"]`)
            .classList.remove("hidden");

        // tắt gạch xanh
        tabs.forEach(t => {
            t.classList.remove("after:opacity-100");
            t.classList.add("after:opacity-0");
        });

        // bật gạch xanh
        tab.classList.remove("after:opacity-0");
        tab.classList.add("after:opacity-100");

    });

});
const tabs_2 = document.querySelectorAll(".tab-btn");
const contents_2 = document.querySelectorAll(".btn-content");

tabs_2.forEach(tab => {
    tab.addEventListener("click", () => {

        const id = tab.dataset.tab;

        // reset active
        tabs_2.forEach(t => t.dataset.active = "false");

        // set active
        tab.dataset.active = "true";

        // ẩn tất cả content
        contents_2.forEach(c => c.classList.add("hidden"));

        // hiện content đúng
        document
            .querySelector(`[data-content="${id}"]`)
            .classList.remove("hidden");

    });
});
const btn = document.querySelector("[data-collapse-toggle]");
const menu = document.getElementById("navbar-sticky");

btn.onclick = () => {
    menu.classList.toggle("hidden");
};