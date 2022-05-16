// Найдем все клавиши
let keys = document.querySelectorAll(".key");
let isOnOff = false;
let onOffBtn = document.getElementById("on-off");
let volumePlusBtn = document.getElementById("volume-plus");
let volumeMinusBtn = document.getElementById("volume-minus");
let octavaDefaultBtn = document.getElementById("octava-default");
let octavaElectroBtn = document.getElementById("octava-electro");
let soundElem;
let volume = 1;
// Повешаем слушатели на каждую клафишу
keys.forEach((key) => {
    key.addEventListener("click", playSound);
});

function setVolume() {
    let res;
    if (volume === 1) {
        return res = 0.3;
    } else if (volume === 2) {
        return res = 0.6;
    } else if (volume === 3) {
        return res = 1;
    }
}

function playSound(e) {
    if (isOnOff === true) {
        //   Возмем нажатую клавишу
        let key = e.target;
        // Найдем все звуки клавиш
        let sound = document.getElementById(key.dataset.note);
        soundElem = sound;
        // добавим выбраной клавише класс с картинкой нажатой кнопки
        //   let classKey = key.getAttribute("class");
        let arr = key.className.split(" ");

        if (arr[1] === "key-white") {
            key.classList.add("active-white");
        } else {
            key.classList.add("active-black");
        }

        //
        sound.currentTime = 0;
        // Громкость звука
        let vol = setVolume();
        sound.volume=vol;
        // Проиграем звук
        sound.play();
        // удалим картинку с нажатой клавишей
        sound.addEventListener("ended", () => {
            if (arr[1] === "key-white") {
                key.classList.remove("active-white");
            } else {
                key.classList.remove("active-black");
            }
        });
    }
}
// Функция проверки вкл или выкл пианино 
function checkOn(){
  if(isOnOff===true){
    // установить картинку вкл кнопки
  }else{
    // установить картинку выкл кнопки
  }
}

// Функция переключения октавы
function changeOktava(value){
    if(value===1102){
        
    }else if(value===1073){}
}

onOffBtn.addEventListener("click", () => {
    if (isOnOff === true) {
        isOnOff = false;
        // логика по смене картинки
    } else {
        isOnOff = true;
        // логика по смене картинки
    }
});

addEventListener('keypress', (e) => {
    console.log()
    changeOktava(e.which);
});

//
volumePlusBtn.addEventListener("click", () => {
    if (volume <= 3) {
        volume += 1;
        // плюс логика по смене картинки
    }
});

//
volumeMinusBtn.addEventListener("click", () => {
    if (volume >= 1) {
        volume -= 1;
        // плюс логика по смене картинки
    }
});

