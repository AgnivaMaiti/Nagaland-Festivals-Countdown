let language = 'english';
let currentYear = new Date().getFullYear(); 

let festivalData = {
    "Angami": { festival: "Sekrenyi", date: new Date(currentYear, 1, 25).getTime() },
    "Rengma": { festival: "Ngada", date: new Date(currentYear, 10, 27).getTime() },
    "Zeliang": { festival: "Mileinyi", date: new Date(currentYear, 2, 11).getTime() },
    "Kuki": { festival: "Mimkut", date: new Date(currentYear, 0, 17).getTime() },
    "Kachari": { festival: "Bushu", date: new Date(currentYear, 0, 31).getTime() },
    "Chakhesang": { festival: "Thsukhenyie/Sukrenvu", date: new Date(currentYear, 4, 6).getTime() },
    "Pochury": { festival: "Yemshe", date: new Date(currentYear, 9, 5).getTime() },
    "Chang": { festival: "Naknyulüm", date: new Date(currentYear, 6, 13).getTime() },
    "Ao": { festival: "Moatsü", date: new Date(currentYear, 4, 2).getTime() },
    "Konyak": { festival: "Aoleang", date: new Date(currentYear, 3, 13).getTime() },
    "Phom": { festival: "Monyü", date: new Date(currentYear, 3, 1).getTime() },
    "Khiamniungam": { festival: "Miu", date: new Date(currentYear, 4, 5).getTime() },
    "Yimkhiunger": { festival: "Metemneo", date: new Date(currentYear, 7, 8).getTime() },
    "Sangtam": { festival: "Mongmong", date: new Date(currentYear, 8, 3).getTime() },
    "Lotha": { festival: "Tokhu Emong", date: new Date(currentYear, 10, 7).getTime() },
    "Sumi": { festival: "Tuluni", date: new Date(currentYear, 6, 8).getTime() },
    "AllTribes": { festival: "Hornbill-festival", date: new Date(currentYear, 11, 1).getTime() }
};

function updateTimer() {
    const selectedTribe = document.getElementById('tribeSelect').value;
    const now = new Date().getTime();

    const timerElement = document.getElementById('timer');
    const countdownTitle = document.getElementById('countdownTitle');

    if (!selectedTribe) {
        countdownTitle.innerHTML = (language === 'english') ? "Nagaland Festivals Countdown" : "Nagaland laga festival khan huwole kiman time baki";
        timerElement.innerHTML = (language === 'english') ? "Please select a tribe" : "Tribe select kuribi";
        return;
    }

    const currentFestivalData = festivalData[selectedTribe];
    const currentFestivalDate = new Date(currentFestivalData.date);

    if (now >= currentFestivalData.date) {
        const nextFestivalDate = new Date(currentFestivalData.date);
        nextFestivalDate.setFullYear(currentYear + 1);

        countdownTitle.innerHTML = (language === 'english') ? currentFestivalData.festival + " Countdown" : currentFestivalData.festival + " huwole kiman time baki";
        let distance = nextFestivalDate.getTime() - now;
        var d = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((distance % (1000 * 60)) / 1000);

        if (language === 'nagamese') {
            if (d > 0) {
                timerElement.innerHTML = d + " din " + hrs + " ghanta " + min + " minute " + sec + " second baki ase";
            } else if (hrs > 0) {
                timerElement.innerHTML = hrs + " ghanta " + min + " minute " + sec + " second baki ase";
            } else if (min > 0) {
                timerElement.innerHTML = min + " minute " + sec + " second baki ase";
            } else {
                timerElement.innerHTML = sec + " second baki ase";
            }
        } else {
            timerElement.innerHTML = d + " days " + hrs + " hours " + min + " minutes " + sec + " seconds";
        }
    } else {
        countdownTitle.innerHTML = (language === 'english') ? currentFestivalData.festival + " Countdown" : currentFestivalData.festival + " huwole kiman time baki";
        let distance = currentFestivalData.date - now;
        var d = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((distance % (1000 * 60)) / 1000);

        if (language === 'nagamese') {
            if (d > 0) {
                timerElement.innerHTML = d + " din " + hrs + " ghanta " + min + " minute " + sec + " second baki ase";
            } else if (hrs > 0) {
                timerElement.innerHTML = hrs + " ghanta " + min + " minute " + sec + " second baki ase";
            } else if (min > 0) {
                timerElement.innerHTML = min + " minute " + sec + " second baki ase";
            } else {
                timerElement.innerHTML = sec + " second baki ase";
            }
        } else {
            timerElement.innerHTML = d + " days " + hrs + " hours " + min + " minutes " + sec + " seconds";
        }
    }
}

function setLanguage(lang) {
    language = lang;
    updateTimer();
}

function updateFestival(selectedTribe) {
    if (selectedTribe) {
        const timerElement = document.getElementById('timer');
        timerElement.innerHTML = "";
        updateTimer();
    } else {
        updateTimer();
    }
}

updateTimer();
var x = setInterval(updateTimer, 1000);
