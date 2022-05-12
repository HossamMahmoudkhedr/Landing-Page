let featuresList = document.getElementById('fl');
let companyList = document.getElementById('cl');
let features = document.getElementById('features')
let company = document.getElementById('company')
let featuresList1 = document.getElementById('fl1');
let companyList1 = document.getElementById('cl1');
let features1 = document.getElementById('features1')
let company1 = document.getElementById('company1')
let container = document.querySelector('.container')
let fArrow = document.getElementById('fArrow')
let cArrow = document.getElementById('cArrow')
let menu = document.querySelector('.menu')
let sideLinks = document.querySelector('.sideLinks')
let cont = document.querySelector('.cont')
let closeMenu = document.querySelector('.closeMenu')
menu.onclick =()=>{
    sideLinks.classList.remove('close')
    cont.classList.add('dark')
    
}
cont.onclick = () => {
    cont.classList.remove('dark')
    sideLinks.classList.add('close')
}
closeMenu.onclick = ()=>{
    sideLinks.classList.add('close')
    cont.classList.remove('dark')
}
features.onclick = ()=>{
    featuresList.classList.toggle('active')
    if(featuresList.classList.contains('active')){
        features.classList.add('black')
        fArrow.style.transform = 'rotateX(180deg)'
    }else{
        features.classList.remove('black') 
        fArrow.style.transform = 'rotateX(0deg)'
    }
}
company.onclick = ()=>{
    companyList.classList.toggle('active')
    if(companyList.classList.contains('active')){
        company.classList.add('black')
        cArrow.style.transform = 'rotateX(180deg)'
    }else{
        company.classList.remove('black')
        cArrow.style.transform = 'rotateX(0deg)'
    }
}
features1.onclick = ()=>{
    featuresList1.classList.toggle('active')
    if(featuresList1.classList.contains('active')){
        features1.classList.add('black')
        fArrow1.style.transform = 'rotateX(180deg)'
    }else{
        features1.classList.remove('black') 
        fArrow1.style.transform = 'rotateX(0deg)'
    }
}
company1.onclick = ()=>{
    companyList1.classList.toggle('active')
    if(companyList1.classList.contains('active')){
        company1.classList.add('black')
        cArrow1.style.transform = 'rotateX(180deg)'
    }else{
        company1.classList.remove('black')
        cArrow1.style.transform = 'rotateX(0deg)'
    }
}
container.onclick =()=>{
    featuresList.classList.remove('active')
    companyList.classList.remove('active')
    featuresList1.classList.remove('active')
    companyList1.classList.remove('active')
    cArrow1.style.transform = 'rotateX(0deg)'
    if(!featuresList.classList.contains('active') || companyList1.classList.contains('active') ){
        features.classList.remove('black')
        company.classList.remove('black')
        features1.classList.remove('black')
        company1.classList.remove('black')
        cArrow1.style.transform = 'rotateX(0deg)'
    }
}
