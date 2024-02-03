const mainContainer = document.querySelector('#mainContainer')
const container = document.querySelector('#container')
const homeBuild = document.querySelector('#homeBuild')
const messageBuild = document.querySelector('#messageBuild')
const settingsBuild = document.querySelector('#settingsBuild')
const profileBuild = document.querySelector('#profileBuild')
const homeBtn = document.querySelector("#homeBtn")
const messageBtn = document.querySelector("#messageBtn")
const plusBtn = document.querySelector("#plusBtn")
const settingsBtn = document.querySelector("#settingsBtn")
const profileBtn = document.querySelector("#profileBtn")
const plusBtnPopUp = document.querySelector('#plusBtnPopUp')
const infoContainer = document.querySelector('#infoContainer')
const loginContainer = document.querySelector('#loginContainer')
const choiceContainer = document.querySelector('#choiceContainer')
const firstProject = document.querySelector("#firstProject")
const secondProject = document.querySelector("#secondProject")

const loginBtn = document.querySelector('#loginBtn')
const exitBtn = document.querySelector('#exitBtn')
// !! ******************************************************* !! \\

firstProject.addEventListener("click",()=>{
    infoContainer.classList.remove('hidden')
    infoContainer.classList.add('flex')
    loginContainer.classList.remove('hidden')
    loginContainer.classList.add('flex')
    choiceContainer.classList.remove('flex')
    choiceContainer.classList.add('hidden')
})
secondProject.addEventListener("click",()=>{
    
    choiceContainer.classList.remove('flex')
    choiceContainer.classList.add('hidden')
})



exitBtn.addEventListener('click',(event) => {
    container.classList.remove('flex')
    container.classList.add('hidden')
    loginContainer.classList.remove('hidden');
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    infoContainer.classList.remove('hidden');
    infoContainer.classList.add('flex');
})

homeBtn.addEventListener("click", () => {
    messageBuild.classList.remove('flex')
    messageBuild.classList.add('hidden')
    //
    settingsBuild.classList.remove('grid')
    settingsBuild.classList.add('hidden')
    //
    profileBuild.classList.remove('grid')
    profileBuild.classList.add('hidden')
    //TODO Home Btn Sonuç : 
    homeBuild.classList.add('grid')
    homeBuild.classList.remove('hidden')
})

messageBtn.addEventListener("click", () => {
    homeBuild.classList.remove('grid')
    homeBuild.classList.add('hidden')
    //
    settingsBuild.classList.remove('grid')
    settingsBuild.classList.add('hidden')
    //
    profileBuild.classList.remove('grid')
    profileBuild.classList.add('hidden')
    //TODO Message Btn Sonuç:
    messageBuild.classList.add('flex')
    messageBuild.classList.remove('hidden')
})


settingsBtn.addEventListener("click", () => {
    messageBuild.classList.remove('flex')
    messageBuild.classList.add('hidden')
    //
    homeBuild.classList.remove('grid')
    homeBuild.classList.add('hidden')
    //
    profileBuild.classList.remove('grid')
    profileBuild.classList.add('hidden')
    //TODO Home Btn Sonuç : 
    settingsBuild.classList.add('grid')
    settingsBuild.classList.remove('hidden')
})

profileBtn.addEventListener("click", () => {
    messageBuild.classList.remove('flex')
    messageBuild.classList.add('hidden')
    //
    homeBuild.classList.remove('grid')
    homeBuild.classList.add('hidden')
    //
    settingsBuild.classList.add('hidden')
    settingsBuild.classList.remove('grid')
    //TODO Home Btn Sonuç : 
    profileBuild.classList.remove('hidden')
    profileBuild.classList.add('grid')
})


let popUp = true;
plusBtn.addEventListener("click", () => {
    popUp = !popUp
    if(!popUp){
        plusBtnPopUp.classList.remove('hidden')
        plusBtnPopUp.classList.add('flex');
    }else{
        plusBtnPopUp.classList.remove('flex')
        plusBtnPopUp.classList.add('hidden');

    }
})


function inputKontrol(event, nextInput) {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;
    //
    let dogruSifreBir = "5";
    let dogruSifreIki = "8";
    //

    if (input1 === dogruSifreBir && input2 === dogruSifreIki && input3 === dogruSifreBir && input4 === dogruSifreIki) {
        container.classList.remove('hidden')
        container.classList.add('flex')
        loginContainer.classList.add('hidden')
        infoContainer.classList.add('hidden');
    } 
    else {
        container.classList.add('hidden');
        infoContainer.classList.remove('hidden');
        infoContainer.classList.add('flex');
    }
}

function otoGecis(event, nextInputId) {
    var input = event.target;
    var inputValue = input.value;

    if (inputValue && inputValue.length === parseInt(input.getAttribute('maxlength'))) {
        document.getElementById(nextInputId).focus();
    }
}



