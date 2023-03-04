
let allData;
const loadAllData= () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data =>{
            allData=data;
            displayAllTools(data.data.tools.slice(0,6));
        });
};
const displayAllTools = tools => {

    const toolsContainer = document.getElementById('tools-container');

    toolsContainer.innerText='';
    tools.forEach(tool => {
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
                       <i class="bi bi-arrow-right-circle"></i>
                       </div>
                  </div>
                  </div>
        `;
        toolsContainer.appendChild(toolDiv);
    })
}




const showModalData = (data)=>{
    const modalBody=document.getElementById('modal-Body');
    modalBody.innerHTML =`
    <div class="w-50 border border-danger-subtle p-3 bg-danger-subtle">
    <h3 class ="fs-4" id="detailsModalLabel">${data.description}</h3>
    <div class="d-flex gap-3 mt-3">
    <div class="border border-secondary-subtle rounded p-2 bg-light text-success">
    <ul style="list-style:none">
    <li class="text-center"><h6>${data.pricing[0].price}</h6></li>
    <li><h5>${data.pricing[0].plan}</h5></li>
    </ul>
    </div>
    
    <div class="border border-secondary-subtle rounded p-2 bg-light text-danger">
    <ul style="list-style:none">
    <li class="text-center"><h6>${data.pricing[1].price}</h6></li>
    <li><h5>${data.pricing[1].plan}</h5></li>
    </ul>
    </div> 
    
    <div class="border border-secondary-subtle rounded p-2 bg-light text-danger">
    <ul style="list-style:none">
    <li class="text-center"><h6>${data.pricing[2].price}</h6></li>
    <li><h5>${data.pricing[2].plan}</h5></li>
    </ul>
    </div>
    
    
    </div>
    
    </div>
    `;
    modalBody.appendChild(modalBody);
}
loadAllData();

const seeAllData = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllTools(data.data.tools));
  };