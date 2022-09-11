//lesson directory code
let lessonButtonClicked = false;
document.getElementById('lessons-button').onclick = function(){
    if(lessonButtonClicked === false) {
        document.getElementById('lessons-button').style.borderBottomLeftRadius = '0';
        document.getElementById('lessons-button').style.borderBottomRightRadius = '0';
        document.getElementById('startup-directory').style.height = '425px';
        document.getElementById('lcb').style.opacity = '100%';
        document.getElementById('lcb').style.scale = '1';
        document.getElementById('lcb').style.marginTop = '-10px';
        document.getElementById('lcb').style.borderTopLeftRadius = '0';
        document.getElementById('lcb').style.borderTopRightRadius = '0';
        document.getElementById('credit-button').style.marginTop = '-10px';
        lessonButtonClicked = true;
    } else if(lessonButtonClicked === true) {
        document.getElementById('lessons-button').style.borderBottomLeftRadius = '20px';
        document.getElementById('lessons-button').style.borderBottomRightRadius = '20px';
        document.getElementById('startup-directory').style.height = '140px';
        document.getElementById('lcb').style.opacity = '0';
        document.getElementById('lcb').style.scale = '0';
        document.getElementById('lcb').style.marginTop = '0';
        document.getElementById('lcb').style.borderTopLeftRadius = '0';
        document.getElementById('lcb').style.borderTopRightRadius = '0';
        document.getElementById('credit-button').style.marginTop = '-300px';
        lessonButtonClicked = false;
    }
}
//  UNIVERSAL CODE

let previousSlide = document.getElementById('startup-screen');

//Credits button/code section
document.getElementById('credit-button').onclick = function(){
    document.getElementById('startup-screen').classList.replace('active', 'inactive');
    document.getElementById('cred-sec').classList.replace('inactive', 'active');
}

let credTopToggled = false;
document.getElementById('cred-top-bar-toggle').onclick = function(){
    if(credTopToggled === false) {
        document.getElementById('cred-top-bar').style.marginTop = '-70px';
        document.getElementById('cred-top-bar-text').style.rotate = '180deg';
        credTopToggled = true;
    } else if(credTopToggled === true){
        document.getElementById('cred-top-bar').style.marginTop = '0';
        document.getElementById('cred-top-bar-text').style.rotate = '360deg';
        credTopToggled = false;
    }
}
document.getElementById('cred-return-button').onclick = function(){
    previousSlide.classList.replace('inactive', 'active');
    document.getElementById('cred-sec').classList.replace('active', 'inactive');
}