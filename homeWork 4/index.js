let yearOfBirthInput = prompt("Введіть рік свого народження:");

if (yearOfBirthInput === null) {
    alert("Шкода, що Ви не захотіли ввести свою дату народження.");
} else {
    let yearOfBirth = parseInt(yearOfBirthInput, 10);

    if (isNaN(yearOfBirth)) {
        alert("Введений рік народження некоректний.");
    } else {

        let city = prompt("Введіть місто, в якому ви живете:");

        if (city === null) {
            alert("Шкода, що Ви не захотіли ввести своє місто проживання.");
        } else {

            let favoriteSport = prompt("Введіть свій улюблений вид спорту:");


            if (favoriteSport === null) {
                alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
            } else {

                const currentYear = new Date().getFullYear();
                let age = currentYear - yearOfBirth;


                if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {

                    alert(`Ти живеш у столиці ${getCountryCapital(city)}`);
                } else {

                    alert(`Ти живеш у місті ${city}`);
                }

                alert(`Твій вік: ${age}`);

                switch (favoriteSport) {
                    case "Футбол":
                        alert("Круто! Хочеш стати чемпіоном у футболі? Подивися на Ліонеля Мессі!");
                        break;
                    case "Теніс":
                        alert("Круто! Хочеш стати чемпіоном у тенісі? Подивися на Новака Джоковіча!");
                        break;
                    case "Баскетбол":
                        alert("Круто! Хочеш стати чемпіоном у баскетболі? Подивися на Леброна Джеймса!");
                        break;
                    case "Бокс":
                        alert("Круто! Хочеш стати чемпіоном у боксі? Подивися на Олександра Усика!");
                        break;
                    case null:
                        alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
                        break;
                    default:
                        alert("Можливо, ви хочете стати чемпіоном у своєму улюбленому виді спорту!");
                        break;
                }
            }
        }
    }
}

function getCountryCapital(city) {
    switch (city) {
        case "Київ":
            return "України";
        case "Вашингтон":
            return "США";
        case "Лондон":
            return "Великої Британії";
        default:
            return "невідомої країни";
    }
}
