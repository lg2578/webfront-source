
function validatePWD() {
    var txt=document.getElementById("pwd").value;
    //默认级别是0
    var lvl = 0;
    //判断这个字符串中有没有数字
    if (/[0-9]/.test(txt)) {
        lvl++;
    }
    //判断字符串中有没有字母
    if (/[a-zA-Z]/.test(txt)) {
        lvl++;
    }
    //判断字符串中有没有特殊符号
    if (/[^0-9a-zA-Z_]/.test(txt)) {
        lvl++;
    }
    alert(lvl);
    return lvl;
}
function validateTel(){
    
    var TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    var tel = document.getElementById("txtMobile").value;
    if (TEL_REGEXP.test(tel)) {
        return true;
    }
    alert("手机号格式不正确");
    return false;
}


