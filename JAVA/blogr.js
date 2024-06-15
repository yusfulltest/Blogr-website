
// let Company = document.querySelector('#Companylist')
// let TopnavList2 = document.querySelector('#NavList2')

// Company.addEventListener('click', () => {
// TopnavList2.classList.toggle('Nested1')

// })

// document.addEventListener('click', e => {
//     if(!TopnavList2.contains(e.target) && e.target !==Company ){
// TopnavList2.classList.add('none')
//     }

// })



function NavMenus() {
    let Menus = document.getElementById('lineBar');
    if (Menus.style.display == 'block') {
        Menus.style.display = 'none'
    }

    else {
        Menus.style.display = 'block'
    }



}

function Topitems() {


 let TopnavList1 = document.getElementById('NavList');
let product = document.getElementById('productlist');

   if (TopnavList1.style.display == 'block') {
         TopnavList1.style.display = 'none';
        
     }

    else {
         TopnavList1.style.display = 'block';
     }

     document.addEventListener('click',e => {

       if(!TopnavList1.contains(e.target) && e.target !==product ) {
            TopnavList1.style.display = 'none';
          
        }
  })
    
}

 

function Topitems2() {
    let TopnavList2 = document.getElementById('NavList2');

    if (TopnavList2.style.display == 'block') {
        TopnavList2.style.display = 'none';
    }
    else {
        TopnavList2.style.display = 'block';
    }

}

function Topitems3() {
    let TopnavList3 = document.getElementById('NavList3');

    if (TopnavList3.style.display == 'block') {
        TopnavList3.style.display = 'none';
    }
    else {
        TopnavList3.style.display = 'block';
    }

}



