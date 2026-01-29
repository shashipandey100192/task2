function allobject()
{
    var allhtml = document.querySelectorAll("textarea,input,select");
    var joutput = document.getElementById('output');
    console.log(allhtml);

    allhtml[0].addEventListener("input",()=>{
        joutput.innerHTML=allhtml[0].value;
    });

       allhtml[1].addEventListener("input",()=>{
        joutput.style.color=allhtml[1].value;
    });

    
}

allobject();
