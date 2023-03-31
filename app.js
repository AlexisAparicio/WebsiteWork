const menuEmail=document.querySelector('.navbar-email');
const desktopmenu=document.querySelector('.desktop-menu');
const menuburger=document.querySelector('.menu');
const menumobile=document.querySelector('.mobile-menu');
const closeproductdetail=document.querySelector('.product-detail-close');
const menucarrito=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('#ShoppingCartContainer');
const CardsContainer=document.querySelector('.cards-container-main');
const ProductDetails=document.querySelector('#ProductDetail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuburger.addEventListener('click',toggleMobileMenu);
menucarrito.addEventListener('click',toggleCarritoAside);
closeproductdetail.addEventListener('click',close);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    
    desktopmenu.classList.toggle('inactive');
    }
    function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive'); 
    }
    
    close();
    menumobile.classList.toggle('inactive');
    }

    function toggleCarritoAside() {
    const isMobileMenuClosed = menumobile.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        menumobile.classList.add('inactive'); 
    }

    const isProductDetailsClosed = ProductDetails.classList.contains('inactive');
    
    if (!isProductDetailsClosed) {
        ProductDetails.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive');
    }

    function open(){
    aside.classList.add('inactive');
    ProductDetails.classList.remove('inactive');
    }
    function close(){
        ProductDetails.classList.add('inactive');
    }

    const productList =[];
    productList.push({
        name: 'VirusT',
        price:'450',
        image: 'project1/imgs/icon/virusT.jpeg',
    });

    productList.push({
        name: 'VirusG',
        price:'350',
        image: 'project1/imgs/icon/VirusG.avif',
    });

    productList.push({
        name: 'Virus Progenitor',
        price:'1000',
        image: 'project1/imgs/icon/virusT.jpeg',
    });

    productList.push({
        name: 'Virus Plagas',
        price:'1000',
        image: 'project1/imgs/icon/virusT.jpeg',
    });

    productList.push({
        name: 'Virus Progenitor',
        price:'1000',
        image: 'project1/imgs/icon/virusT.jpeg',
    });

    productList.push({
        name: 'Virus Progenitor',
        price:'1000',
        image: 'project1/imgs/icon/virusT.jpeg',
    });

    productList.push({
        name: 'Virus Progenitor',
        price:'1000',
        image: 'project1/imgs/icon/virusT.jpeg',
    });

    productList.push({
        name: 'Virus Progenitor',
        price:'1000',
        image: 'project1/imgs/icon/virusT.jpeg',
    });

    function RenderProducts(arr){
    //Recorrido de array y obtener el elemento
    for(product of arr){
    const productCard= document.createElement('div');
    productCard.classList.add('product-card-main');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener('click',open);

    const productInfo= document.createElement('div');
    productInfo.classList.add('product-info-main');

    const productInfoDiv= document.createElement('div');

    const productPrice= document.createElement('p');
        productPrice.innerHTML='$'+product.price;

    const productName= document.createElement('p');
    productName.innerHTML=product.name;

    productInfoDiv.append(productPrice,productName);

    const productinfoFigure= document.createElement('figure');
    const productIMGCart = document.createElement('p');
    productIMGCart.classList.add("material-icons");
    const imgcart = document.createTextNode("add_shopping_cart");
    productIMGCart.appendChild(imgcart);

    productinfoFigure.appendChild(productIMGCart);

    productInfo.append(productInfoDiv,productinfoFigure);

    productCard.append(productImg,productInfo);

    CardsContainer.appendChild(productCard);
}
}

RenderProducts(productList);