
const keyboardItems = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace",
"Tab", 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, "Del",
"CapsLock", 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, "Enter",
"Shift", 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, "▲", "Shift",
"Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];
     

const keyboardItemsWords = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,
113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,
97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39,
122, 120, 99, 118, 98, 110, 109, 44, 46, 47,
'Tab', 'CapsLock', 'ShiftLeft', 'ControlLeft', 'MetaLeft', 'AltLeft',
'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'ShiftRight', 'Enter', 'Backspace', 'Delete'];


const keyboardItemsRu = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace",
"Tab", 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, "Del",
"CapsLock", 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, "Enter",
"Shift", 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46, "▲", "Shift",
"Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];

const keyboardItemsRuCaps = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace",
"Tab", 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 92, "Del",
"CapsLock", 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, "Enter",
"Shift", 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 46, "▲", "Shift",
"Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];

const keyboardItemsEngCaps = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace",
"Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 92, "Del",
"CapsLock",65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, "Enter",
"Shift", 90, 88, 67, 86, 66, 78, 77, 44, 46, 47, "▲", "Shift",
"Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];


const keyboardItemsRuBig = [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43, "Backspace",
"Tab", 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 47, "Del",
"CapsLock", 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, "Enter",
"Shift", 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44, "▲", "Shift",
"Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];


const keyboardItemsEngBig = [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43, "Backspace",
"Tab", 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124, "Del",
"CapsLock", 65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34, "Enter",
"Shift", 90, 88, 67, 86, 66, 78, 77, 60, 62, 63, "▲", "Shift",
"Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];


let section = document.createElement('section');
let outputWindow = document.createElement('div');
let textarea = document.createElement('textarea');
let keyboard = document.createElement('div');
let text = document.createElement('div');

document.body.prepend(section);
section.prepend(outputWindow);
outputWindow.prepend(textarea);
section.append(keyboard);
section.append(text);

keyboard.classList.add("keyboard");
section.classList.add("main");
outputWindow.classList.add("window");
textarea.classList.add("text");

text.textContent = "Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левыe ctrl + alt";


function getItem() {
  let out = "";
  for(let i = 0; i < keyboardItems.length; i++) {
    if(keyboardItems[i] === "Backspace") {
      out += '<div class="item backspace" data="Backspace">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
    } else if (keyboardItems[i] === "Tab") {
      out += '<div class="item tab" data="Tab">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
    } else if(keyboardItems[i] === "Del") {
      out += '<div class="item del" data="Delete">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
    } else if(keyboardItems[i] === "CapsLock") {
      out += '<div class="item caps" data="CapsLock">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
    } else if(keyboardItems[i] === "Enter") {
      out += '<div class="item enter" data="Enter">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
    } else if(keyboardItems[i] === "Shift") {
      if(i === 42) {
        out += '<div class="item shift1" data="ShiftLeft">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
      } else {
        out += '<div class="item shift2" data="ShiftRight">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
      }
    } else if(keyboardItems[i] === "Ctrl") {
      if(i === 55) {
        out += '<div class="item alt" data="ControlLeft">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
      } else {
        out += '<div class="item alt" data="ControlRight">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
      }
    } else if(keyboardItems[i] === "Alt") {
      if(i === 57) {
        out += '<div class="item alt" data="AltLeft">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
      } else {
        out += '<div class="item alt" data="AltRight">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
      }
    } else if(keyboardItems[i] === "Win") {
      out += '<div class="item alt" data="MetaLeft">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
    } else if(keyboardItems[i] === "") {
      out += '<div class="item space" data="Space">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
    } else if(keyboardItems[i] === "▲") {
      out += '<div class="item" data="ArrowUp">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
    } else if(keyboardItems[i] === "◄") {
      out += '<div class="item" data="ArrowLeft">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
    } else if(keyboardItems[i] === "▼") {
      out += '<div class="item" data="ArrowDown">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
    } else if(keyboardItems[i] === "►") {
      out += '<div class="item" data="ArrowRight">' + '<span class="symbol">' + keyboardItems[i] + '</span>' + '</div>';
    } else {
      out += '<div class="item" data="' + keyboardItems[i] + '">'
       + '<span class="eng-little">' + String.fromCharCode(keyboardItems[i]) + '</span>'
       + '<span class="ru-little hidden">' + String.fromCharCode(keyboardItemsRu[i]) + '</span>'
       + '<span class="ru-big hidden">' + String.fromCharCode(keyboardItemsRuBig[i]) + '</span>'
       + '<span class="eng-big hidden">' + String.fromCharCode(keyboardItemsEngBig[i]) + '</span>'
       + '<span class="eng-caps hidden">' + String.fromCharCode(keyboardItemsEngCaps[i]) + '</span>'
       + '<span class="ru-caps hidden">' + String.fromCharCode(keyboardItemsRuCaps[i]) + '</span>' + '</div>';
    }
  }
  document.querySelector(".keyboard").innerHTML = out;
}

getItem();



function keydownEng() {
  document.addEventListener("keydown", (event) => {
    if(event.code === "ShiftRight" || event.code === "ShiftLeft") {
      document.querySelectorAll(".eng-little").forEach(element => {
        element.classList.toggle("hidden");
      })
      document.querySelectorAll(".eng-big").forEach(element => {
        element.classList.toggle("hidden");
      }) 
    } else if(event.code === "CapsLock" && !document.querySelector(".caps").classList.contains("active")) {
      document.querySelector(".caps").classList.add("active");
      document.querySelectorAll(".eng-caps").forEach(element => {
        element.classList.toggle("hidden");
      })
      document.querySelectorAll(".eng-little").forEach(element => {
        element.classList.toggle("hidden");
      }) 
    } else if(event.code === "CapsLock" && document.querySelector(".caps").classList.contains("active")) {
      document.querySelector(".caps").classList.remove("active");
      document.querySelectorAll(".eng-caps").forEach(element => {
        element.classList.toggle("hidden");
      })
      document.querySelectorAll(".eng-little").forEach(element => {
        element.classList.toggle("hidden");
      }) 
    }
    keyboardItemsWords.forEach(element => {
      if(typeof element === "number") {
        if(String.fromCharCode(element) === event.key) {
          document.querySelector('.item[data="' + element + '"]').classList.add("active");
        }
      } else {
        if(element === event.code && element != "CapsLock") {
          document.querySelector('.item[data="' + element + '"]').classList.add("active");
        }
      }
    })
  })
}

keydownEng();

function keyupEng() {
  document.addEventListener("keyup", (event) => { 
    if(event.code === "ShiftRight" || event.code === "ShiftLeft") {
      document.querySelectorAll(".eng-little").forEach(element => {
        element.classList.toggle("hidden");
      })
      document.querySelectorAll(".eng-big").forEach(element => {
        element.classList.toggle("hidden");
      })
    }  
    keyboardItemsWords.forEach(element => {
      if(typeof element === "number") {
        if(String.fromCharCode(element) === event.key) {
          document.querySelector('.item[data="' + element + '"]').classList.remove("active");
        }
      } else {
        if(element === event.code && element != "CapsLock") {
          document.querySelector('.item[data="' + element + '"]').classList.remove("active");
        }
      }
    })
  })
}

keyupEng();



function keydownRu() {
  document.addEventListener("keydown", (event) => {
    keyboardItemsRu.forEach(element => {
      if(typeof element === "number") {
        if(String.fromCharCode(element) === event.key) {
          document.querySelector('.item[data="' + element + '"]').classList.add("active");
        }
      } else {
        if(element === event.code) {
          document.querySelector('.item[data="' + element + '"]').classList.add("active");
        }
      }
    })
  })
}


function keyupRu() {
  document.addEventListener("keyup", (event) => {
    if(event.code === "ShiftRight" || event.code === "ShiftLeft") {
      document.querySelectorAll(".ru-little").forEach(element => {
        element.classList.toggle("hidden");
      })
      document.querySelectorAll(".ru-big").forEach(element => {
        element.classList.toggle("hidden");
      })
    }
    keyboardItemsRu.forEach(element => {
      if(typeof element === "number") {
        if(String.fromCharCode(element) === event.key) {
          document.querySelector('.item[data="' + element + '"]').classList.remove("active");
        }
      } else {
        if(element === event.code) {
          document.querySelector('.item[data="' + element + '"]').classList.remove("active");
        }
      }
    })
  })
}



function changeLang(func1, func2, func3, ...keys) {
  let pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    for(let key of keys) {
      if(!pressed.has(key)) {
        return;
      }
    }
    pressed.clear();
    func1();
    func2();
    func3();
  })
  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

changeLang(
() => {document.querySelectorAll(".eng-little").forEach(element => {
  element.classList.toggle("hidden");
})},
() => {document.querySelectorAll(".ru-little").forEach(element => {
  element.classList.toggle("hidden");
})},
() => {document.querySelector(".keyboard").classList.toggle("change");
},
"AltLeft",
"ControlLeft");


keyboard.onclick = function(event) {
  let target = event.target.closest('div');
  if(target.classList.contains("caps") && !target.classList.contains("active")) {
    document.querySelector(".caps").classList.add("active");
    document.querySelectorAll(".eng-little").forEach(element => {
      element.classList.toggle("hidden");
    }),
    document.querySelectorAll(".eng-big").forEach(element => {
      element.classList.toggle("hidden");
    })
  } else if(target.classList.contains("caps") && target.classList.contains("active")) {
    document.querySelector(".caps").classList.remove("active");
    document.querySelectorAll(".eng-little").forEach(element => {
      element.classList.toggle("hidden");
    }),
    document.querySelectorAll(".eng-big").forEach(element => {
      element.classList.toggle("hidden");
    })
  } else {
    this.classList.add("active");
    this.classList.remove("active");
  }
};

//let arr =[]
//document.addEventListener("keypress", (event) => {
  //arr.push(event.charCode)
  //console.log(arr)
//})

//document.addEventListener("keydown", (event) => {
  //console.log(event.shiftKey)
//})
