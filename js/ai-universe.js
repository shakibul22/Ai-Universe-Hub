
let allData;
const loadAllData = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            allData = data;
            showData(data.data.tools.slice(0, 6));
        });
};
const showData = data => {
    console.log(data)
    const toolsContainer = document.getElementById('cardContainer');

    toolsContainer.innerText = '';
    data.forEach(tool => {

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
                       <div>
                       
                       <i type="button" onclick="loadModalData('${tool.id}')" class=" bi bi-arrow-right-circle bg-danger-subtle p-2 rounded text-danger" data-bs-toggle="modal" data-bs-target="#detailsModalLabel"></i>
                       </div>
                  </div>
                  </div>
        `;
        toolsContainer.appendChild(toolDiv);
    })
}

const seeAllData = (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showModalData(data));
};



const showModalData = (data) => {
    console.log(data)


}



loadAllData();

