const saveBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = []


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


function render(array) {
    let listItems = ""
    array.forEach(item => {
        listItems += `
                    <li>
                        <a href="${item}" target="_blank">${item}</a>
                    </li>`
    })
    ulEl.innerHTML = listItems
}

saveBtn.addEventListener ("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function() {
    myLeads = []
    localStorage.clear()
    render(myLeads)
})
