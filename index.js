shownotes()
let addbtn=document.getElementById('addbtn')
addbtn.addEventListener('click',function(){
    let addtxt=document.getElementById('addtxt')
    let addtitle=document.getElementById('addtitle')
    let notes=localStorage.getItem('notes')
    let notesobj;
    if(notes==null){
        notesobj=[]
    }
    else{
        notesobj=JSON.parse(notes)

    }
    let myobj={
        title:addtitle.value,
        text:addtxt.value
    }
    notesobj.push(myobj)
    localStorage.setItem('notes',JSON.stringify(notesobj))
    addtxt.value=''
    addtitle.value=''
    shownotes()
})
function shownotes(){
    let notes=localStorage.getItem('notes')
    let notesobj;
    if(notes==null){
        notesobj=[]
    }
    else{
        notesobj=JSON.parse(notes)

    }
     
    let html=''
    notesobj.forEach(function(element,index){
         html +=`
         <div class=" notecard card mx-3 my-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title"> ${element.title}</h5>
              <p class="card-text">${element.text}</p>
              <button id='${index}' onclick='deletenote(${index})' class="btn btn-primary">Delete note</button>
            </div>
          </div>
         `
    })
    let noteselm=document.getElementById('notes')
    if(notesobj.length != 0){
        noteselm.innerHTML=html
    } else{
        noteselm.innerHTML=`Nothing in notes.click add note to add a note`
    }
  
}
function deletenote(index){
    let notes=localStorage.getItem('notes')
    let notesobj;
    if(notes==null){
        notesobj=[]
    }
    else{
        notesobj=JSON.parse(notes)

    }
    notesobj.splice(index,1)
    localStorage.setItem('notes',JSON.stringify(notesobj))
    shownotes()

}

let search = document.getElementById('searchtxt');
search.addEventListener("input", function(){
    let inputval=search.value.toLowerCase()
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText

        if(cardtxt.includes(inputval)){
            element.style.display = "block"
        }
        else{
            element.style.display ="none"
        }
    })
})