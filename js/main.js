// Definimos la función que se ejecutará cuando se dispare el evento
function simulador(){
    const campoN = document.getElementById("nombres").value
    const campoT = document.getElementById("telefono").value
    const campoE = document.getElementById("email").value
    const campoMi = parseInt(document.getElementById("inversion").value)
    const campoTi = document.getElementById("tiempo").value
    const campoPr = document.getElementById("pre")
    const campoPo = document.getElementById("post")
    const showTi = document.getElementById("tiempo-show")
    const showIn = document.getElementById("interes-show")
    const showN = document.getElementById("nombres-show")
    const showE = document.getElementById("email-show")
    let In=0;
    let To=0;
    const ShowTo = document.getElementById("total-show")
    const showGa = document.getElementById("ganancia-show")

    campoPo.classList.remove("disabled")
    campoPr.classList.add("disabled")

    showN.innerHTML=campoN
    showE.innerHTML=campoE

    switch (campoTi){
        case "1":
            showTi.innerText="12 meses"
            showIn.innerText="0.8%"
            interes = (campoMi * 0.008)*12
            total = campoMi + interes
            showGa.innerText = interes
            ShowTo.innerText = total
            break;
        case "2":
            showTi.innerText="24 meses"
            showIn.innerText="1.3%"
            interes = (campoMi * 0.013)*24
            total = campoMi + interes
            showGa.innerText = interes
            ShowTo.innerText = total
            break;
        case "3":
            showTi.innerText="36 meses"
            showIn.innerText="1.7%"
            interes = (campoMi * 0.017)*36
            total = campoMi + interes
            showGa.innerText = interes
            ShowTo.innerText = total
            break;
        default:
            break;
    }
}

const boton = document.getElementById('simulador-btn');

boton.addEventListener('click', simulador);
