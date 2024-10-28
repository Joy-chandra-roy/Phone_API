const loadPhns=async(phnData)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${phnData}`);
    const data=await res.json()
    const phns=data.data;
    displayPhns(phns)
}

const displayPhns=(data)=>{
    const div=document.getElementById('phn-container');
      div.textContent='';
      data=data.slice(0,6)
    data.forEach(e=>{
        if(data.length>6){
            
        }
        const newDiv=document.createElement('div');
        newDiv.classList=`card bg-gray-100 shadow-xl p-10`
        newDiv.innerHTML=`
                    <figure>
                      <img src="${e.image}" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">${e.brand}</h2>
                      <h2 class="card-title">${e.phone_name}</h2>
                      <p>${e.slug}</p>
                      <div class="card-actions ">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                    
                `;

        div.appendChild(newDiv);
    })
}

const searchButton=()=>{
    const input=document.getElementById('searchInput');
    const value=input.value;
    loadPhns(value)
}


// loadPhns();