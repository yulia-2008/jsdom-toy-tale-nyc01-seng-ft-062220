let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
    
  BASE_URL = "http://localhost:3000/toys"
   const getToys = ()=>{
    fetch(BASE_URL)
    .then(response => response.json())
    // .then(toysCollection => console.log(toysCollection))
    .then(toys => {
      toys.forEach(toy =>{
        renderToy(toy)}
        )
      })
    }
 
    function renderToy(toy){
     
      const divContainer = document.querySelector("#toy-collection")
      const toyContainer = document.createElement('div')
      divContainer.appendChild(toyContainer)
      toyContainer.innerHTML = `
      <div class="card">
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p> ${toy.likes} Likes </p>
      <button class="like-btn">Like <3</button>
      </div>
      `
      // debugger
    }
  

  getToys()

  let form = document.querySelector(".add-toy-form")
  
  form.addEventListener("submit", function(e){
    e.preventDefault()
    let name = e.target.name.value
    let image = e.target.image.value
    let likes = 0
    let newToy = {
      name: name,
      image: image,
      likes: likes
    }

    renderToy(newToy) 
     
      

      fetch(`http://localhost:3000/toys`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: JSON.stringify({
          name: name, 
          image: image, 
          likes: likes
        })
      })




  })

})