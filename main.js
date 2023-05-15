const API_URL = "https://jsonplaceholder.typicode.com/todos";

const refreshBtn = document.querySelector("#refreshBtn");
const saveBtn = document.querySelector("#saveBtn");
const loadBtn = document.querySelector("#loadBtn");

const container = document.querySelector(".container");

async function getData() {
    const response = await fetch (API_URL);
    const jsonData = await response.json();
    console.log(jsonData);
}

function recieveData(data) {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        
        const divTag = document.createElement("div");
        divTag.className = "list-item";
        const h3Tag = document.createElement("h3");
        h3Tag.innerHTML = element.title;
        const inputTag = document.createElement("input");
        inputTag.className = ".completed";
        inputTag.type = "checkbox";
        inputTag.checked = element.completed;

        divTag.append(h3Tag);
        divTag.append(inputTag);
        container.append(divTag);

    }
}

refreshBtn.addEventListener("click", () => {
    let data = getData();
    recieveData(data);
})

saveBtn.addEventListener("click", async () => {
    let data = await getData();
    localStorage.setItem("todos", JSON.stringify(data));
});

loadBtn.addEventListener("click", () => {
    let data = localStorage.getItem("todos");
    recieveData(data);
})

