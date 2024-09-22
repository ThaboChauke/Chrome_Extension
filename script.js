const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let myLeads = []

saveBtn.addEventListener ("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
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