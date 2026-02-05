
var a, btn, jbody;
function loadobject() {
    jbody = document.querySelector("body");
    btn = document.querySelectorAll('input');
    a = document.getElementById('one');
    a.addEventListener("click", () => {
        alert("welcome");
    });


}

loadobject();


function watch() {
    var b = new Date();
    var h, m, s;
    h = b.getHours();
    m = b.getMinutes();
    s = b.getSeconds();
    var mytime = h + ":" + m + ":" + s;
    a.innerHTML = mytime;

    if (h >= 12 && m == 15 && s >= 0) {
        btn[0].removeAttribute("disabled");
    }
    else {
        btn[0].setAttribute("disabled", "disabled");
    }

    if (s >= 30) {
        jbody.classList.add("first");
    }
    else {
        jbody.classList.remove("first");
    }



}
watch();
setInterval("watch()", 1000);
var name="kumar";
var age=50;
var course="web desing";

var page = `sjkh fjksdhdfj khsdjk ${name}fhjks dhfjksh ddjkfhsjkdfh
 jksd fhjksdhfjksh dk fhsjk fh jk sdhfjkshdfkj hsdjkdfhjksddfhjk
  sdhfjkhsdjkfhjksddhfjkshdfjk ${age}
hsjk fhskjfh jks dfhjkshfjk ${course}shjk hsdjkdfhsd`;
console.log(page);