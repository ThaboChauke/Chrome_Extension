const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let myLeads = [1,2,3,4]

saveBtn.addEventListener ("click", function() {
    myLeads.push(inputEl.value)
})

myLeads.forEach(lead => {
    ulEl.textContent += lead
    console.log(lead)
})