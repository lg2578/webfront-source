function chk() {
    var txt = document.getElementById("txt").value;
    var pwd = document.getElementById("pwd").value;
    console.log('txt:'+txt);
    console.log('pwd:'+pwd);
    if (txt == pwd) {
        alert("文本框和密码框的值一样");
    }
    if (txt != pwd) {
        alert("密码错误，请重新输入");
    }
}
