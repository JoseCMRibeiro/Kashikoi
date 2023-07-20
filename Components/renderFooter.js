export function Footer() {
    const footer = document.createElement('footer');
    footer.className='footer';
    footer.id='myFooter';

    const footerContent = document.createElement('div');
    footerContent.className='footer-content';

    const footerLeft = document.createElement('div');
    footerLeft.className='footerLeft';
    footerLeft.id='left';
    footerLeft.innerHTML= '<h1>Kashikoi</h1>';

    const footerRight = document.createElement('div');
    footerRight.className='footerRight';
    footerRight.id='right';
    footerRight.innerHTML=`
        <a href="https://twitter.com/"><i class="fa fa-twitter"></i></a>
        <a href="https://www.facebook.com/"><i class="fa fa-facebook-f"></i></a>
        <a href="#"><i class="fa fa-rss"></i></a>
    `;

    const footerBottom = document.createElement('div');
    footerBottom.className='footer-bottom';
    footerBottom.id='bottom';
    footerBottom.innerHTML='<h3>Copyright @ 2023</h3>';

    document.body.appendChild(footer);
    footer.appendChild(footerContent);
    footer.appendChild(footerBottom);
    footerContent.appendChild(footerLeft);
    footerContent.appendChild(footerRight);
    
    return footer;
}
