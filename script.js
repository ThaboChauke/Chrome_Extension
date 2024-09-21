const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")

let myLeads = []

saveBtn.addEventListener ("click", function() {
    myLeads.push(inputEl.value)
})

