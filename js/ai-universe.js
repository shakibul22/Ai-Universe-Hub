
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
    });
    isLoading(false)
}

const isLoading = (load) => {
    const loader = document.getElementById('spinner');
    if (load) {
        return loader.classList.remove('d-none')
    } else {
        return loader.classList.add('d-none')
    }
}
document.getElementById('showAllCard').addEventListener('click', function () {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data.data.tools)
        )
})

const loadModalData = (id) => {
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(URL)
        .then(res => res.json())
        .then(data => showModalData(data.data))
}

const seeAllData = (id) => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => showModalData(data));
};



const showModalData = (data) => {
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
    <div class="mw-50 border border-danger-subtle p-3 bg-danger-subtle">
    <h4 class=" fs-5" id="detailsModalLabel">${data.description ? data.description : 'No Data Found'}</h4>
    <div class="d-lg-flex gy:sm:2 gap-5 mt-3">
    <div class="border border-secondary-subtle rounded p-2 bg-light text-success text-center">
    <h6>${data.pricing ? data.pricing[0].price:"Free of cost" }</h6>
    <h6>${data.pricing ? data.pricing[0].plan : "Free of cost"}</h6>
    </div>

    <div class="border border-secondary-subtle rounded p-2 bg-light text-danger text-center">
    <h6>${data.pricing ? data.pricing[1].price:"Free of cost" }</h6>
    <h6>${data.pricing ? data.pricing[1].plan : "Free of cost"}</h6>
    </div>
    
    <div class="border border-secondary-subtle rounded p-2 bg-light text-danger-emphasis text-center">
    <h6>${data.pricing ? data.pricing[2].price:"Free of cost" }</h6>
    <h6>${data.pricing ? data.pricing[2].plan : "Free of cost"}</h6>
    </div>

    </div>

    <div class="d-lg-flex gap-5">
    <div class="mt-4">
    <h4>Features</h4>
    <ul>
    <li>${data.features['1'].feature_name ? data.features[1].feature_name : 'No Data Found'}</li>
    <li>${data.features['2'].feature_name ? data.features[2].feature_name : 'No Data Found'}</li>
    <li>${data.features['3'].feature_name ? data.features[3].feature_name : 'No Data Found'}</li>
   
    </ul>
    </div>
    <div class="mt-4">
    <h4>Integrations</h4>
    <ul>
    <li>${data.integrations ? data.integrations[0] : 'No Data Found'}</li>
    <li>${data.integrations ? data.integrations[1] : 'No Data Found'}</li>
    <li>${data.integrations ? data.integrations[2] : 'No Data Found'}</li>
    
    </ul>
    </div>
    </div>
    </div>

    <div class="mw-50 border border-danger-subtle p-3">
    <img class="img-fluid" src="${data.image_link ? data.image_link[0] : 'No Image Found'}">

    </div>
    <div class="position-relative">
    <h6 style="position:absolute; bottom:220px; right:30px;background-color:#fb5200; padding:8px 15px;color:white;border-radius:10px">${data.accuracy.score ? data.accuracy.score : 'No'} Accuracy</h6>
    </div>
    `
}
isLoading(true)
loadAllData();

