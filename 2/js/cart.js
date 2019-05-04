//全局代码，没有写在函数中，在cart.js文件被加载的时候执行
const chks = document.querySelectorAll('.checkclass');
chks.forEach(function (item) {
    item.addEventListener('click', getallmoney);

})

function chk() {
var all = document.getElementById("all");
//这句代码是多余的，可以直接使用chks常量。
var mychk = document.getElementsByName("mychk");
if (all.checked == true) {
        if (mychk.length) {
            for (var i = 0; i < mychk.length; i++) {
                mychk[i].checked = true;
            }

        }
        mychk.chcked = true;
    } else {
        if (mychk.length) {
            for (var i = 0; i < mychk.length; i++) {
                mychk[i].checked = false;
            }
        }
    }
    getallmoney();
}

function getallmoney() {
var allmoney = 0;
//全局代码中已经获取了所有的类名为.checkclass的网页元素
//全局代码中定义的chks常量全局有效，在函数中可以直接调用。
    chks.forEach(function (item) {
        if (item.checked) {
            allmoney += parseFloat(item.getAttribute('count')) * parseFloat(item.getAttribute('price'));
        }
    });
    var allprice = document.querySelector('#allprice');
    allprice.innerHTML = "¥" + allmoney.toFixed(2);
}
