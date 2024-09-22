const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let myLeads = []
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}


saveBtn.addEventListener ("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})


function renderLeads() {
    let listItems = ""
    myLeads.forEach(lead => {
        listItems += `
                    <li>
                        <a href="${lead}" target="_blank">${lead}</a>
                    </li>`
    })

    ulEl.innerHTML = listItems
}