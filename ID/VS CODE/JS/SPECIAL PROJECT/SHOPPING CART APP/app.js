function cartHOver() {
    let cartImg = document.querySelectorAll('.cart-image');
    let topSide = document.querySelectorAll('.top-side');
   
    // ---- OPACITY1 ---- //
    function opacity1(e,a){
        let blackOpacity1 = e.target.previousElementSibling.previousElementSibling.children[0];
            
        blackOpacity1.style.display = a;
    }

    for(let i of cartImg){
        i.addEventListener('mouseenter',function(e){     
            opacity1(e,'block')          
        });
        i.addEventListener('mouseleave',function(e){          
            opacity1(e,'none');
       });
    } 
    
   // --- OPACITY2 ---- //
    function opacity2(e,a){
        let blackOpacity2 = e.target.children[0];
        blackOpacity2.style.display = a;
    }

    for(let i of topSide){
           i.addEventListener('mouseenter',function (e){
               opacity2(e,'block')
           });
    }

    for(let i of topSide){
        i.addEventListener('mouseleave',function (e){
            opacity2(e,'none');
        });
 }

}
cartHOver();


//  ****************************    JAVASCRIPT    *************************** //
{
    let cart = document.querySelectorAll('.cart');
    let ul = document.querySelector('.ul-product');


    for(let i of cart){
        i.addEventListener('click',cartFun);
        
        function cartFun(e){
              // get product img
              let img = e.target.parentElement.parentElement.children[0].children[1].children[0].getAttribute('src');
              let pName = e.target.parentElement.previousElementSibling.children[0].innerHTML;
              let pPrice = e.target.parentElement.previousElementSibling.children[1].innerHTML;


              // CREATE ELEMENT
              let li = document.createElement('li');
              li.className = 'li-product';
              
              li.innerHTML =  `  
                <button class="close">x</button>
                  <div class="img-container"><img src= "${img}" alt="."></div>
                 <p class="product-name">
                    <span class="text">${pName}</span>
                    <span class="product-price">${pPrice}</span>
                 </p>
                 <p class="total-product-price">$100</p>
                 `;
              

              // APPEND LI IN UL
              ul.appendChild(li);

             // REMOVE CHILD
              ul.addEventListener('click',function(e){
                if(e.target.classList.contains('close')){
                    let a = e.target.parentElement;
                    console.log(a);
                    ul.removeChild(a);

                    itemLength();
                    total();
                }
            });
             
            /* *************** */
            function itemArelt(){
                   alert('item added to cart');
              
            }
            itemArelt();


           /* ****************** */
           function itemLength(){
               let itemLeng = document.querySelector('.num');
               let list = document.querySelectorAll('.li-product');
               itemLeng.innerHTML = list.length;
           }
           itemLength();



        /* ************************* */
        function total(){

            let totalOne = document.querySelector('.money');
            let totalTwo = document.querySelector('.total');
            let productPrice = document.querySelectorAll('.total-product-price'); 
                
            let arry = [];
            for(let i of productPrice){
                 arry.push(Number(i.innerHTML.substr(1,i.innerHTML.length-1)));
            }
            
            let answ = arry.reduce(function(accumulator,currentValue){
                return accumulator + currentValue;
            },0);
            
            totalOne.innerHTML = answ;
            totalTwo.innerHTML = '$'+answ;
        }
        total();




        }
        

    }

}




