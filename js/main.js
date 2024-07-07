     let elDropdownHead = document.querySelector (".dropdown__heading")
     let elDropdownHideContent = document.querySelector (".dropdown__hide-content")
     let elLine2 = document.querySelector (".line2")

     
     elDropdownHead. addEventListener("click", function(){
        elDropdownHideContent.classList.toggle("show")
        elLine2.classList.toggle("rotate")
    })