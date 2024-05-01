// const acceseKey='Bl80hODX2QFt-2DRetZ-V8g1GiQ4GDzZDHoTFBNZDMo';

// let showdiv=document.getElementById('show')
// let searchinp=document.getElementById('searchinput');
// let searcbtn=document.getElementById('searchbtn');
// let moreload=document.getElementById('loadmoreimg');
// let page=1;
// console.log(
//     moreload
// );
// const pr=async(serval)=>{

//     const fe=await fetch(`https://api.unsplash.com/search/photos?page=1&query=${serval}&client_id=Bl80hODX2QFt-2DRetZ-V8g1GiQ4GDzZDHoTFBNZDMo`);  // console.log(fe);
//     const data=await fe.json();
//     console.log(data.results);
    
//     showdiv.innerHTML="";

//     data.results.forEach((e)=>{
//         console.log(e.urls.small);
//         console.log(e);
//         let newdiv=document.createElement('div');
//         newdiv.classList.add('card');
//         showdiv.appendChild(newdiv);
       
//         newdiv.innerHTML=`
//         <img src=${e.urls.small} alt="">
// <a href=${e.links.html} target="_blank">${e.alt_description}</a>`

//         // console.log(e);
//     })
//     // console.log(data.results);
// }
// pr()
// searcbtn.addEventListener('click',()=>{
//     let serval=searchinp.value;
//     pr(serval)
//     console.log(serval);
// })
// moreload.addEventListener('click',()=>{
//     page++;
//     pr(searchinp.value)
// })
// showdiv.innerHTML='';
const accessKey = 'Bl80hODX2QFt-2DRetZ-V8g1GiQ4GDzZDHoTFBNZDMo';
let showdiv = document.getElementById('show');
let searchinp = document.getElementById('searchinput');
let searchbtn = document.getElementById('searchbtn');
let moreload = document.getElementById('loadmoreimg');
let page = 1;

const pr = async (serval, pageNum) => {
    const fe = await fetch(`https://api.unsplash.com/search/photos?page=${pageNum}&query=${serval}&client_id=${accessKey}`);
    const data = await fe.json();
    console.log(data.results);

    data.results.forEach((e) => {
        let newdiv = document.createElement('div');
        newdiv.classList.add('card');
        showdiv.appendChild(newdiv);

        newdiv.innerHTML = `
            <img src=${e.urls.small} alt="">
            <a href=${e.links.html} target="_blank">${e.alt_description}</a>
        `;
    });
}

searchbtn.addEventListener('click', () => {
    let serval = searchinp.value;
    showdiv.innerHTML = ""; // Clear the previous results
    page = 1; // Reset the page number
    pr(serval, page);
});

moreload.addEventListener('click', () => {
    let serval = searchinp.value;
    page++; // Increment the page number
    pr(serval, page);
});

// Function to create category buttons
const createCategoryButton = (category) => {
    const button = document.createElement('button');
    button.textContent = category;
    button.style.width = '100px';
    button.style.height = '2.5rem';
    button.style.padding = '0.5rem 1rem';
    button.style.margin = '0 0.5rem';
    button.style.border = 'none';
    button.style.borderRadius = '10px';
    button.style.backgroundColor = 'orange';
    button.style.color = 'white';
    button.style.fontSize = '1rem';
    button.style.cursor = 'pointer';
    button.addEventListener('click', () => {
        showdiv.innerHTML = ""; // Clear the previous results
        page = 1; // Reset the page number
        pr(category, page);
    });
    return button;
}

// Create and append category buttons
const categories = ['Nature', 'Cat', 'Dog'];
const buttonsContainer = document.createElement('div');
categories.forEach(category => {
    buttonsContainer.style.display='flex';
    buttonsContainer.style.justifyContent='center';
    buttonsContainer.style.position='absolute';


    buttonsContainer.style.left='200px';
    buttonsContainer.style.right='300px';
    buttonsContainer.style.top='180px';

    buttonsContainer.style.gap='10px';
    
    buttonsContainer.style.alignItems='center';
    // // buttonsContainer.style.flexDirection='row';
    // buttonsContainer.style.width='100px';
    // buttonsContainer.style.height='2.5rem';
    // buttonsContainer.style.padding='2.5rem 2rem';
    
    // // buttonsContainer.style.border='none';
    // buttonsContainer.style.borderRadius='15px';
    // buttonsContainer.style.backgroundColor='orange';
    // buttonsContainer.style.fontSize='1.2rem';
    // buttonsContainer.style.color='white';



    
    
    buttonsContainer.appendChild(createCategoryButton(category));
});
document.body.insertBefore(buttonsContainer, document.querySelector('.container'));

// Initially, do not load anything
showdiv.innerHTML = "";
