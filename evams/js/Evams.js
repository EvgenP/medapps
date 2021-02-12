function summa() {
    var val1 = parseFloat(document.querySelector('input[name = "cd"]:checked').value),
        val2 = parseFloat(document.querySelector('input[name = "insul_resis"]:checked').value),
        val3 = parseFloat(document.getElementById("Vozr").value),
        val4 = parseFloat(document.getElementById("MKM").value),
        val5 = parseFloat(document.getElementById("hoir").value),
        imag = document.getElementById("img"),
        ansD = document.getElementById("ans2");
    ansD.value = Math.round(val3 - 2.39467032488911 + 0.0234532551892975 * val4 + 1.28150512608882 *
        val5 + 3.1558193667076 * val1 + 5.18963505842041 * val2);
    ans2.innerHTML = ansD.value;

    function calc(ansD) {
        if (ansD.value < 1) {
            imag.removeAttribute("src")
        } else if (ansD.value > 20 && ansD.value < 39) {
            imag.setAttribute("src", "https://apps.medhub.pro/evams/img/1.png")
        } else if (ansD.value > 40 && ansD.value < 49) {
            imag.setAttribute("src", "https://apps.medhub.pro/evams/img/2.png")
        } else if (ansD.value > 50 && ansD.value < 59) {
            imag.setAttribute("src", "https://apps.medhub.pro/evams/img/3.png")
        } else if (ansD.value > 60 && ansD.value < 69) {
            imag.setAttribute("src", "https://apps.medhub.pro/evams/img/4.png")
        } else if (ansD.value > 70) {
            imag.setAttribute("src", "https://apps.medhub.pro/evams/img/5.png")
        };
    };

    function calc2(ansD, val3) {
        if (ansD.value > val3 + 10) {
            trec.innerHTML = ' Ваш сосудистый возраст превышает паспортный более, чем на 10 лет. Вероятно, у Вас имеется синдром раннего сосудистого старения. Обратитесь к врачу, чтобы узнать, как Вам контролировать Ваши факторы риска для того, чтобы предотвратить дальнейшее изменение структуры и функции сосудов и не допустить развития сердечно – сосудистых осложнений. '

        } else {
            trec.innerHTML = 'Ваш сосудистый возраст находится в пределах нормы. Дальнейший контроль состояния здоровья позволит сохранить сосуды здоровыми.'
        };
    };
    calc(ansD);
    calc2(ansD, val3);
};

function resetjs() {
    imag = document.getElementById("img");
    img.removeAttribute("src");
    document.getElementById("trec").innerHTML = "";
    document.getElementById("ans2").innerHTML = "";
};

function risk() {
    document.getElementById("risk").setAttribute("src", "https://apps.medhub.pro/evams/img/8.png")
    document.getElementById('risk').setAttribute("src", "https://apps.medhub.pro/evams/img/9.png")
};