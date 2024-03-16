window.onload=()=>{
    const input=document.getElementById("filter-input")
    input.oninput=()=>{
        const keyword=input.value.toLocaleLowerCase()
        const label=document.getElementsByTagName("label")
        for(let el of label){
            const text=el.innerHTML.toLowerCase()
            const matched=text.indexOf(keyword)
            if(matched!=-1){
                el.parentElement.style.display="flex"
            }
            else{
                el.parentElement.style.display="none"
            }
        }
    }
    // delete list
    const deleteicon=document.getElementsByTagName("i")
    for(let delicon of deleteicon){
        delicon.onclick=(e)=>{
            const currenticon=e.target
            currenticon.parentElement.remove()
        }
    }
}