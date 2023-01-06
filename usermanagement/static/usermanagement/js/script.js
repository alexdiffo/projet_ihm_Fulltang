// selected-option
var option=document.querySelectorAll('.content tr')

option.forEach(i=>{i.addEventListener("click", ()=>{
    i.lastElementChild.lastElementChild.classList.toggle("visible")
})
})

//confirmer la suppression
var form=document.querySelectorAll(".selected-option form")

form.forEach(i=>{i.addEventListener("submit",(e)=>{
    let d=confirm("voulez vous vraiment supprimer cet utilisateur?")
    if(d==false){
        e.preventDefault();
    }
    else{
        window.onload(()=>{
            alert("suppression réussi")
        })
    }
    

})
})

//defiler la navigation
var item=document.querySelectorAll(".section")

item.forEach(i=>{i.addEventListener("click",()=>{
    i.lastElementChild.classList.toggle("height")
})
})

// defiler la left-bar
var i=document.querySelector(".logo i")
var c=document.querySelector(".left-container")
var bar=document.querySelector(".left-bar")
var icon=document.querySelector(".entete i")

const slide=()=>{
    bar.classList.remove("translate")
    window.setTimeout(()=>{
        c.classList.remove("visibles")
    },200)
}

i.addEventListener("click",()=>{
    c.classList.add("visibles")
    window.setTimeout(()=>{
        bar.classList.add("translate")
    },10)
})

icon.addEventListener("click",slide)
c.addEventListener("click",slide)
bar.addEventListener("click",(e)=>{
    e.stopPropagation()
})

