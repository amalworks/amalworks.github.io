let lessonButtonClicked = false;
document.getElementById('lessons-button').onclick = function(){
    if(lessonButtonClicked === false) {
        document.getElementById('lessons-button').style.borderBottomLeftRadius = '0';
        document.getElementById('lessons-button').style.borderBottomRightRadius = '0';
        document.getElementById('startup-directory').style.height = '370px';
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
        document.getElementById('startup-directory').style.height = '85px';
        document.getElementById('lcb').style.opacity = '0';
        document.getElementById('lcb').style.scale = '0';
        document.getElementById('lcb').style.marginTop = '0';
        document.getElementById('lcb').style.borderTopLeftRadius = '0';
        document.getElementById('lcb').style.borderTopRightRadius = '0';
        document.getElementById('credit-button').style.marginTop = '-300px';
        lessonButtonClicked = false;
    }
}
document.getElementById('credit-button').onclick = function(){
    document.getElementById('startup-screen').classList.replace('active', 'inactive');
    document.getElementById('cred-sec').classList.replace('inactive', 'active');
}