
const keyboardItems = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace",
"Tab", 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, "Del",
"CapsLock", 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, "Enter",
"Shift", 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, "▲", "Shift",
"Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];
     
 
let section = document.createElement('section');
let outputWindow = document.createElement('div');
let textarea = document.createElement('textarea');
let keyboard = document.createElement('div');

document.body.prepend(section);
section.prepend(outputWindow);
outputWindow.prepend(textarea);
section.append(keyboard);

keyboard.classList.add("keyboard");
section.classList.add("main");
outputWindow.classList.add("window");

const keyboardItemsWords = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,
113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92,
97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39,
122, 120, 99, 118, 98, 110, 109, 44, 46, 47, "1", "2", "3", "4",
'Tab', 'CapsLock', 'ShiftLeft', 'ControlLeft', 'MetaLeft', 'AltLeft',
'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'ShiftRight', 'Enter', 'Backspace', 'Delete'];



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
      out += '<div class="item" data="' + keyboardItems[i] + '">' + '<span class="symbol">' + String.fromCharCode(keyboardItems[i]) + '</span>' + '</div>';
    }
  }
  document.querySelector(".keyboard").innerHTML = out;
}
getItem();



document.addEventListener("keydown", (event) => {
  keyboardItemsWords.forEach(element => {
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

document.addEventListener("keyup", (event) => {
  keyboardItemsWords.forEach(element => {
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



    
//document.addEventListener("keydown", (event) => {
  //keyboardWords.push(event.code)
 // console.log(keyboardWords)
//})
