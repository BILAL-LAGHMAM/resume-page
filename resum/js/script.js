const btn = document.getElementById("btn");
const show = document.getElementById("showdiv");
const show_section = document.getElementById("show_section")
const leftside = document.getElementById("leftside")
const rightside = document.getElementById("rightside")
const hidd_icon = document.getElementById("hidd_icon")

hidd_icon.addEventListener("click", ()=>{
    show.classList.add("is-hidd");
    rightside.classList.add("not-flow");
    leftside.classList.add("not-flow");
})
btn.addEventListener("click", ()=>{
    rightside.classList.add("is-flow");
    leftside.classList.add("is-flow");
    show.classList.add("is-active");
    show_section.classList.add("is-section")
});