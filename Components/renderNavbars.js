export function NavbarTop() 
{
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    navbar.id = 'myNavBar';
  
    const navbarLeft = document.createElement('div');
    navbarLeft.className = 'navbarLeft';
    navbarLeft.id = 'left';
    navbar.style.fontSize = '18px'
    navbarLeft.innerHTML = `
      <a href="/pages/shop.html"><i class="fa fa-cart-plus"></i> Store</a> 
      <a href="/pages/about.html"><i class="fa fa-info"></i> About Us</a> 
      <a href="/pages/contact.html"><i class="fa fa-phone"></i> Contacts</a> 
    `;
  
    const navbarCenter = document.createElement('div');
    navbarCenter.className = 'navbarCenter';
    navbarCenter.innerHTML = '<h1>Kashikoi</h1>';
  
    const navbarRight = document.createElement('div');
    navbarRight.className = 'navbarRigth';
    navbarRight.id = 'rigth';
    navbarRight.innerHTML = `
      <a href="/pages/cart.html"><i class="fa fa-shopping-cart"></i></a>
      <a href="https://twitter.com/"><i class="fa fa-twitter"></i></a>
      <a href="https://www.facebook.com/"><i class="fa fa-facebook-f"></i></a>
      <a href="#"><i class="fa fa-rss" ></i></a>
    `;
  
    navbar.appendChild(navbarLeft);
    navbar.appendChild(navbarCenter);
    navbar.appendChild(navbarRight);
  
    document.body.appendChild(navbar);

    navbarCenter.addEventListener('click',()=>
    {
      window.location.href = "../index.html";
    });
    return navbar
  }
  
  export function NavBarBottom() 
{
    const links = document.createElement('div');
    const linkContainer = document.createElement('linkContainer');    
    links.appendChild(linkContainer)
    linkContainer.className = 'linkContainer';
    links.className = 'links';
    linkContainer.id = 'links';
    linkContainer.innerHTML = `
    <a href="/pages/shop.html"><i class="fa fa-cart-plus"></i></a> 
    <a href="/pages/cart.html"><i class="fa fa-shopping-cart"></i></a>
    <a href="/pages/about.html"><i class="fa fa-info"></i></a> 
    <a href="/pages/contact.html"><i class="fa fa-phone"></i></a> 
    `;    
    return links
}

  