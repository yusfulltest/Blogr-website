

function NavMenus() {
    let Menus = document.getElementById('lineBar');
     let open = document.getElementById('opentoggle');
    let close = document.getElementById('closetoggle');
    
   
    if (Menus.style.display == 'block' && close.style.display == 'block' ||open.style.display =='none') {
        Menus.style.display = 'none'
        close.style.display = 'none'
        open.style.display = 'block'
      
      
    }

    else {
        Menus.style.display = 'block'
        close.style.display = 'block'
        open.style.display ='none'
    
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

    document.addEventListener('click', e => {

        if (!TopnavList1.contains(e.target) && e.target !== product) {
            TopnavList1.style.display = 'none';

        }
    })

}



function Topitems2() {
    let TopnavList2 = document.getElementById('NavList2');
    let Company = document.getElementById('Companylist');

    if (TopnavList2.style.display == 'block') {
        TopnavList2.style.display = 'none';
    }
    else {
        TopnavList2.style.display = 'block';
    }

    document.addEventListener('click', e => {

        if (!TopnavList2.contains(e.target) && e.target !== Company) {
            TopnavList2.style.display = 'none';
        }

    })


}




function Topitems3() {
    let TopnavList3 = document.getElementById('NavList3');
   let Connect = document.getElementById('ConnectList');
   
   if(TopnavList3.style.display =='block' ){
    TopnavList3.style.display = 'none';
   }

   else{
    TopnavList3.style.display = 'block';
   }

   document.addEventListener('click', e =>{
    if(!TopnavList3.contains(e.target) && e.target !== Connect ){
        TopnavList3.style.display = 'none';}
   })

}