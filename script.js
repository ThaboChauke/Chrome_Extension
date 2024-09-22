const saveBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = []


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}


saveBtn.addEventListener ("dblclick", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})


deleteBtn.addEventListener("click", function() {
    myLeads = []
    localStorage.clear()
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