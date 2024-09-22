const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let myLeads = []

saveBtn.addEventListener ("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.textContent.value = ""
})


function renderLeads() {
    let listItems = ""
    myLeads.forEach(lead => {
        listItems += "<li>" + lead + "</li>"
        console.log(lead)
    })

    ulEl.innerHTML = listItems
}