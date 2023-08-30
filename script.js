let textbox=document.getElementById("dev");
textbox.addEventListener('input', function() {
    let text=this.value;
    let char=text.length;
    document.getElementById("char").innerHTML=char;
    let word=text.split(" ");
    document.getElementById("word").innerHTML=word.length;


});
