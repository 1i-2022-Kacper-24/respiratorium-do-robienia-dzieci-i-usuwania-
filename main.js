document.getElementById("dodaj").onclick = function () {
    const imie = document.getElementById("imie").value.trim();
    const nazwisko = document.getElementById("nazwisko").value.trim();
    const pelnoletni = document.getElementById("pelnoletnosc").checked;
    const kolor = document.getElementById("kolor").value;
    const blad = document.getElementById("blad");

    if (imie.length < 2 || nazwisko.length < 2) {
        blad.textContent = "Błędne dane";
        return;
    }

    blad.textContent = "";

    const tekst = `${imie.toUpperCase()} ${nazwisko.toUpperCase()}, jesteś ${pelnoletni ? "pełnoletni/a" : "niepełnoletni/a"}`;

    const div = document.createElement("div");
    div.className = "entry";
    div.style.color = kolor;
    div.textContent = tekst + " ";

    const button = document.createElement("button");
    button.textContent = "usuń";
    button.onclick = function () {
        div.remove();
    };

    div.appendChild(button);
    document.getElementById("lista").appendChild(div);
};
