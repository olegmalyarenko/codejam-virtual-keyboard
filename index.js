let div = document.createElement('div');
div.className = "text-area";
div.innerHTML = "<textarea></textarea>";


document.body.append(div);



let keyboard = document.createElement('div');
keyboard.className= "keyboard";
keyboard.id= "keyboard";


document.body.append(keyboard);

   

const keyboardKeys = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,8, ,9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93,92, ,20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, ,16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47,38,16, ,17,18,32,37,40,39,17];

const keyboardKeysUp = [126, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43,8,9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124,20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34, 13,16, 90, 88, 67, 86, 66, 78, 77, 60, 62, 63,38,16,17,18,32,37,40,39,17];

const keyboardKeysCaps =[96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,8,9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 92,20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 13,16, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47,38,16,17,18,32,37,40,39,17];

const keyboardKeysRus = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,8,9, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, 1092,20, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101,13,16, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46,38,16,17,18,32,37,40,39,17];

const keyboardKeysRusUp = [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43, 1049,8,9, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 1060, 1067,20, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, 1071,13,16, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44,38,16,17,18,32,37,40,39,17];

const keyboardKeysRusCaps = [1025, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,8,9, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 92, 1060, 1067,20, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, 1071,13,16, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 46,38,16,17,18,32,37,40,39,17];


function init ( ){
    let out ="";
    for (let i =0; i<keyboardKeys.length; i++){
        if (i == 14 || i == 29 || i == 43 || i == 57) {
            out += '<div class=row></div>'
        } else if (i == 13){
            out+= '<div class="key" data="'+keyboardKeys[i]+'">Backspace</div>'
        } else if (i == 15){
            out+= '<div class="key" data="'+keyboardKeys[i]+'">Tab</div>' 
        } else if (i == 28){
            out+= '<div class="key" data="'+keyboardKeys[i]+'"> \\</div>' 
        } else if (i == 30){
            out+= '<div class="key" data="'+keyboardKeys[i]+'">Caps Lock</div>' 
        } else if (i == 41){
            out+= '<div class="key" data="'+keyboardKeys[i]+'">' + "'" + '</div>'
        } else if (i == 42){
            out+= '<div class="key" data="'+keyboardKeys[i]+'">Enter</div>' 
        } else if (i == 44 || i == 56){
            out+= '<div class="key" data="'+keyboardKeys[i]+'">Shift</div>' 
        } else if (i == 44 || i == 55){
            out+= '<div class="key" data="'+keyboardKeys[i]+'">↑</div>' 
         } else if (i == 58 || i == 64){
            out+= '<div class="key" data="'+keyboardKeys[i]+'">Ctrl</div>' 
        } else if (i == 59){
            out+= '<div class="key" data="'+keyboardKeys[i]+'">Alt</div>' 
        } else if (i == 63){
            out+= '<div class="key" data="'+keyboardKeys[i]+'">→</div>' 
        } else if (i == 62){
            out+= '<div class="key" data="'+keyboardKeys[i]+'">↓</div>' 
        } else if (i == 61){
            out+= '<div class="key" data="'+keyboardKeys[i]+'">←</div>' 
        } else {
         
    out+= '<div class="key" data="'+keyboardKeys[i]+'">'+String.fromCharCode(keyboardKeys[i])+'</div>';
        }  
    }
   document.querySelector("#keyboard").innerHTML = out;
}

init();


document.onkeypress = function (event) { 
    
    
    document.querySelectorAll('#keyboard .key').forEach(function (element){
        element.classList.remove('active');
    });   
    document.querySelector('#keyboard .key[data="'+event.keyCode+'"]').classList.add('active');
    
    
}

document.onkeydown = function (event) { 
    
    document.querySelectorAll('#keyboard .key').forEach(function (element){
        element.classList.remove('active');
    }); 
    if (event.code == 'ShiftRight') { 
        document.querySelector('#keyboard').childNodes[56].classList.add('active');
    } else if  (event.code == 'ShiftLeft') {
        document.querySelector('#keyboard').childNodes[44].classList.add('active');
    } else if  (event.code == 'ControlLeft') {
        document.querySelector('#keyboard').childNodes[58].classList.add('active');
    } else if  (event.code == 'ControlRight') {
        document.querySelector('#keyboard').childNodes[64].classList.add('active');
    }  else if  (event.code == 'Backslash') {
        document.querySelector('#keyboard').childNodes[28].classList.add('active');
    } else if  (event.code == 'ArrowRight') {
        document.querySelector('#keyboard').childNodes[63].classList.add('active');
    }else {     
        document.querySelector('#keyboard .key[data="' +event.keyCode+ '"]').classList.add('active');
    }
    
}


    

document.querySelectorAll('#keyboard .key').forEach(function (element){ 

  element.onclick= function (event){
    document.querySelectorAll('#keyboard .key').forEach(function (element){
        element.classList.remove('active');
    });  
    let mouseClick = this.getAttribute('data');
     this.classList.add('active');
     document.querySelector('.text-area').value+= mouseClick.dataset.currentLetter;
    
  }
})

document.querySelector('#keyboard').childNodes[13].classList.add('backspace');

document.querySelector('#keyboard').childNodes[15].classList.add('tab');

document.querySelector('#keyboard').childNodes[28].classList.add('slash');

document.querySelector('#keyboard').childNodes[30].classList.add('capslock');

document.querySelector('#keyboard').childNodes[42].classList.add('enter');
document.getElementsByClassName('.enter').innerHTML = '<p>Shift</p>';

document.querySelector('#keyboard').childNodes[44].classList.add('shift');
document.querySelector('#keyboard').childNodes[56].classList.add('shift');

document.querySelector('#keyboard').childNodes[60].classList.add('space');

