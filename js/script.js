// HTML för menyn
const menuHtml = `
    <ul class="menu">
        <li><a href="index.html">Hem</a></li>
        <li><a href="information.html">Information</a></li>
        <li><a href="mål.html">Mål</a></li>
        <li><a href="donera.html">Donera</a></li>
        <li><a href="kontakt.html">Kontakt</a></li>
        <li><a href="#" class="disabled">FAQ</a></li>
    </ul>
`;

// När dokumentet laddas, lägg till menyn i <nav>
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    if (nav) nav.innerHTML = menuHtml;
});
