/Load Data From Api---->
const loadData = () => {
    const url = https://openapi.programming-hero.com/api/ai/tools
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data.data.tools.slice(0, 6))
        )
}

const showData = (data) => {
    // console.log(data)
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 w-100">
            <img src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h3 class="card-title">Features</h3>
            <ul style="list-style:number">
            <li class="fw-bold">${element.features[0] ? element.features[0] : 'No Found Data'}</li>
            <li class="fw-bold">${element.features[1] ? element.features[1] : 'No Found Data'}</li>
            <li class="fw-bold">${element.features[2] ? element.features[2] : 'No Found Data'}</li>
            </ul>
            <hr>
            <h5 class="card-title fw-bold">${element.name}</h5>
            <div class="d-flex justify-content-between mt-2">
            <div class="d-flex gap-2">
            <p><i class="fa-solid fa-calendar-days"></i></p>
            <p class="card-title">${element.published_in}</p>
            </div>
            <div>
            <i type="button" onclick="loadModalData('${element.id}')" class="fa-solid fa-arrow-right bg-danger-subtle p-2 rounded text-danger" data-bs-toggle="modal" data-bs-target="#detailsModalLabel"></i>
            </div>
            </div>
            </div>
        </div>
        `
        cardContainer.appendChild(div);
    });
    isLoading(false)
}

const isLoading = (load) => {
    const loader = document.getElementById('spinner');
    if (load) {
        loader.classList.remove('d-none')
    } else {
        loader.classList.add('d-none')
    }
}


document.getElementById('showAllBtn').addEventListener('click', function () {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data.data.tools)
        )
})


//For modal---->
const loadModalData = (id) => {
    const URL = https://openapi.programming-hero.com/api/ai/tool/${id}
    fetch(URL)
        .then(res => res.json())
        .then(data => showModalData(data.data))
}



const showModalData = (data) => {
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
    <div class="mw-50 border border-danger-subtle p-3 bg-danger-subtle">
    <h4 class=" fs-5" id="detailsModalLabel">${data.description ? data.description : 'No Data Found'}</h4>
    <div class="d-lg-flex gy:sm:2 gap-5 mt-3">
    <div class="border border-secondary-subtle rounded p-2 bg-light text-success text-center">
    <h6>${data.pricing[0].price}</h6>
    <h6>${data.pricing[0].plan}</h6>
    </div>

    <div class="border border-secondary-subtle rounded p-2 bg-light text-danger text-center">
    <h6>${data.pricing[1].price}</h6>
    <h6>${data.pricing[1].plan}</h6>
    </div>
    
    <div class="border border-secondary-subtle rounded p-2 bg-light text-danger-emphasis text-center">
    <h6>${data.pricing[2].price}</h6>
    <h6>${data.pricing[2].plan}</h6>
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
    <img class="img-fluid" src="${data.image_link ? data.image_link[0] : 'No Image'}">

    <div class="position-relative">
    <h6 style="position:absolute; bottom:220px; right:30px;background-color:#fb5200; padding:8px 15px;color:white;border-radius:10px">${data.accuracy.score ? data.accuracy.score : 'No'} Accuracy</h6>
    </div>
    
    <h5 class="text-center  mt-2 fw-bold">${data.input_output_examples ? data.input_output_examples[0].input : 'No Data found'}</h5>
    <p class="text-center mt-2">${data.input_output_examples ? data.input_output_examples[1].output : 'No Data Found'}</p>
    </div>
    `
}



isLoading(true)
loadData();