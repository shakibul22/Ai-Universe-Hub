const loadCard = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTools(data.data))
}
const displayTools = data => {

    const toolsContainer = document.getElementById('tools-container');

    // // toolsContainer.innerText='';
    data.tools.forEach(tool => {
        const toolDiv = document.createElement('div');
        toolDiv.classList.add('col');
        toolDiv.innerHTML = `
        <div class="card h-100">
                  <img style="height-50px" src="${tool.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                  <h3 class="card-title font-work font-semibold">features</h3>
                  <p class="font-work text-darker">1. ${tool.features[0] ? tool.features[0] : "Not Found"}</p>
                  <p class="font-work text-darker">2. ${tool.features[1] ? tool.features[1] : "Not Found"}</p>
                  <p class="font-work text-darker">3. ${tool.features[2] ? tool.features[2] : "Not Found"}</p>
                  <div>
                   <hr>
                  </div>
                  </div>
                  <div class="d-flex  justify-content-between align-items-center mx-3 ">
                      <div class="d-flex flex-column">
                          <h3>${tool.name}</h3>
                          <div class="d-flex flex-row gap-1 ">
                           <i class="bi bi-calendar-week"></i>
                          <p>${tool.published_in}</p>
                          </div>
                       </div>
                       <div class=" fs-1">
                       <i class="bi bi-arrow-right-circle" onclick="cardModel('${data.id}')"></i>
                       </div>
                  </div>
                  </div>
        `
        toolsContainer.appendChild(toolDiv);
    })
}
const cardModel = id =>{
    const url=` https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data))
}

loadCard();