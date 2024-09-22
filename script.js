const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let myLeads = []

// localStorage.setItem("myLeads", "www.leadexample.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()

saveBtn.addEventListener ("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))
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