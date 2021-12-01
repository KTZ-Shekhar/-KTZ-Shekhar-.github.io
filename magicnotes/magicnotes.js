console.log("This is magic notes website")
let notes = localStorage.getItem("notes");
//MAKING TITLES AND NEWNOTE VARIABLE GLOBAL 
let Title = "Untitled", Newnote = "Missing";
//index of notes
let i = 0;
let alertmsg = ` <div style="background:#edff14;
            color :black;">Please Enter Notes Details for Notes Submission with Title****(click to close this alert bar)****
            </div>`;
//1.show notes
shownotes();
function shownotes() {
    if (notes == null) {
        notesobj = [];
        document.getElementById("none").innerHTML = `<p style="font-size:x-large;
        color:#edff14;"><b>No notes has been saved yet</b></p><br>`;
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let btn = "";
    notesobj.forEach((element, index) => {
        let newnote = notesobj[index];
        if (element.includes("[Title] = ")) {
            Title = newnote.substring(newnote.indexOf("[Title] = ") + 10, newnote.indexOf(";"));
        }
        else if ((element.includes("[Note] = "))) {
            Newnote = newnote.substring(newnote.lastIndexOf("[Note] = ") + 8, newnote.lastIndexOf(";"));
        }
        else {
            Title = newnote.substring(newnote.indexOf("[Title] = ") + 10, newnote.indexOf(";"));
            Newnote = newnote.substring(newnote.lastIndexOf("[Note] = ") + 9, newnote.lastIndexOf(";"));
        }
        if (newnote.length > 80) {
            btn = btn + `<div id="${index}" class ="card">
       <p >Title = ${Title}</p>
    </div><button title="Click here to delete note" id="${index}" onclick="deletenote(this.id)" class="button">delete</button>
    <button title="Click here to view in new tab" id="${index}" onclick="viewnote(this.id)" class="button">View Note</button>`;
            document.getElementById("none").innerHTML = btn;
            i++;
            Title = "Untitled";
            Newnote = "Missing";
        }
        else {
            btn = btn + `<div id="${index}" class ="card">
            <p  >Title = ${Title}  Notes = ${newnote.substring(newnote.lastIndexOf("[Note] = ") + 9, newnote.lastIndexOf(";"))}</p>
        </div><button title="Click here to delete note" id="${index}" onclick="deletenote(this.id)" class="button">delete</button>
        <button title="Click here to view in new tab" id="${index}" onclick="viewnote(this.id)" class="button" >View Note</button>`;
            document.getElementById("none").innerHTML = btn;
            i++;
            Title = "Untitled";
            Newnote = "Missing";
        }
    });
}
//2.save notes
let addbtn = document.getElementById("addNote");
addbtn.addEventListener("click", (e) => {
    // e.preventDefault();
    let title = document.getElementById("title");
    let note = document.getElementById("textarea");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let str = null;
    if (title.value == "" && note.value == "") {
        let msg = document.getElementById("alert");
        msg.innerHTML = alertmsg;
    } else if (title.value != "" && note.value == "") {
        let msg = document.getElementById("alert");
        msg.innerHTML = alertmsg;
    } else if (title.value == "" && note.value != "") {
        str = "[Note] = " + note.value + "; ";
        notesobj.push(str);
        localStorage.setItem("notes", JSON.stringify(notesobj));
        note.value = "";
        title.value = "";
        // console.log(notesobj);
        shownotes();
        location.reload();
    }
    else if (note.value == "" && title.value != "") {
        str = "[Title] = " + title.value + "; ";
        notesobj.push(str);
        localStorage.setItem("notes", JSON.stringify(notesobj));
        note.value = "";
        title.value = "";
        // console.log(notesobj);
        shownotes();
        location.reload();
    } else {
        str = "[Title] = " + title.value + ";  " + "[Note] = " + note.value + ";";
        notesobj.push(str);
        localStorage.setItem("notes", JSON.stringify(notesobj));
        note.value = "";
        title.value = "";
        // console.log(notesobj);
        shownotes();
        location.reload();
    }
})
//delete notes
function deletenote(index) {
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    console.log("deleting note ", index);
    shownotes();
    location.reload();
    if (localStorage.getItem("notes") == "[]") {
        localStorage.clear();
    }
}
//hiding alert msg on click
document.getElementById("alert").addEventListener("click", () => {
    document.getElementById("alert").innerHTML = "";
})
//open document in new tab
function viewnote(index) {
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let newnote = notesobj[index];
    //extracting title and notes details
    //string of only title
    if (newnote.includes("[Title] = ")) {
        Title = newnote.substring(newnote.indexOf("[Title] = ") + 10, newnote.indexOf(";"));
    }
    //string of only note
    if (!(newnote.includes("[Title] = "))) {
        Newnote = newnote.substring(newnote.indexOf("[Note] = ") + 9, newnote.lastIndexOf(";"));
        Title = "Untitled"
    }
    if (newnote.includes("[Title] = ") && newnote.includes("[Note] = ")) {
        Title = newnote.substring(newnote.indexOf("[Title] = ") + 10, newnote.indexOf(";"));
        Newnote = newnote.substring(newnote.lastIndexOf("[Note] = ") + 9, newnote.lastIndexOf(";"));
    }
    html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> ${Title}</title>
    <style>body{
        background:black;
        border:5px solid #ff148f;
        border-style:double;
        height:150vh;
        width:99vw;
        overflow-x: hidden;
        overflow-y: auto;
        text-overflow:wrap;
    }
    body img{
        background-image: url(1.jpg);
        z-index: -1;
        position: absolute;
        height: 150vh;
        width:100vw;
        background-repeat: no-repeat;
    }
    body h1{
        color:#65ff00;
        text-overflow:wrap;
    }
    body h5{
        color:#edff14;
        text-overflow:wrap;
    }
     </style>
    </head>
    <body>
    <img src="1.jpg" alt="sorry">
    <h1>${Title}</h1><br><hr>
    <h5>${Newnote}</h5>
    </body>
    </html>`;
    var wnd = window.open("about:blank", "", "_blank");
    wnd.document.write(html);
}
// search the notes(Filtering)
// let sbtn =document.querySelector("#search");
let sbtn = document.getElementById("search");
sbtn.addEventListener("blur", (e) => {
    document.getElementById("last").innerHTML = "";
    document.getElementById("none").innerHTML = "";
    let found = `<p style="font-size:x-large; color:#edff14;"><b>Found</b></p><br>`;
    let notfound = `<p style="font-size:x-large;color:#edff14;"><b>Not Found</b></p><br>`;
    let searchVal = sbtn.value.toLowerCase();
    if (notes == null) {
        notesobj = [];
        document.getElementById("none").innerHTML = `<p style="font-size:x-large;
        color:#edff14;"><b>No notes has been saved yet</b></p><br>`;
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.forEach((element, index) => {
        element = element.toLowerCase();
        if (element.includes(searchVal)) {
            let btn = "";
            document.getElementById("last").innerHTML = found;

            Title = element.substring(element.indexOf("[Title] = ") + 10, element.indexOf(";"));

            btn = btn + `<div id="${index}" class ="card">
        <p >Title = ${Title}</p>
        </div><button title="Click here to delete note" id="${index}" onclick="deletenote(this.id)" class="button">delete</button>
        <button title="Click here to view in new tab" id="${index}" onclick="viewnote(this.id)" class="button">View Note</button>`;
            document.getElementById("none").innerHTML += btn;
        }
    })
    if (document.getElementById("last").innerHTML == "" && !(document.getElementById("last").innerHTML == found)) {
        document.getElementById("last").innerHTML = notfound;
    }
    sbtn.value = "";
})
