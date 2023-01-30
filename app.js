const popUp = document.getElementById('popUp')
let Task = [];

window.addEventListener('load', () => {
    Task = JSON.parse(localStorage.getItem("Task") || "[]");
    console.log(Task)

    render();
})


document.getElementById('jaunsTasks').addEventListener('click', () => {
    popUp.style.display = 'block'
})

document.getElementById('pievienot').addEventListener('click', () => {
    popUp.style.display = 'none'
    
    let gramata = {Uzdevums: Uzdevums.value, Termins: Termins.value}
    
    Uzdevums.value = "";
    Termins.value = "";

    Task.push(gramata);

    render();
})

function render(){
    let biblioteka = document.getElementById('biblioteka')
    biblioteka.innerHTML = "";
    for(let i = 0; i < Task.length; i++) {
        let id = `       
        <div class="id"> 
            <h3>Uzdevums: ${Task[i].Uzdevums}</h3>
            <h4>Autors: ${Task[i].Termins}</h4>
            <input type = "checkbox" id="delete">
        </div>`;
        biblioteka.innerHTML += id;
    }
    localStorage.setItem("Task", JSON.stringify(Task))

}

