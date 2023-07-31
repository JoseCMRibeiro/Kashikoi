export function RenderStaffCard(img, name)
{
    const supportDiv = document.createElement('div');
    supportDiv.classList.add('support');
    supportDiv.style.marginTop = '60px'


    const image = document.createElement('img');
    image.id = 'support1';
    image.classList.add('pictures');
    image.src = img;
    image.style.marginTop = '30px'
    image.style.padding = '10px'

    const nameHeading = document.createElement('h3');
    nameHeading.textContent = name;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae massa placerat, cursus velit nec, volutpat tellus. Sed aliquam leo vel facilisis interdum.';

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('grey_back', 'centerText');

    const innerHeading = document.createElement('h3');
    innerHeading.textContent = "Don't mind if I do!";

    innerDiv.appendChild(innerHeading);
    supportDiv.appendChild(image);
    supportDiv.appendChild(nameHeading);
    supportDiv.appendChild(descriptionParagraph);
    supportDiv.appendChild(innerDiv);
    supportDiv.style.marginBottom = '50px'

    return supportDiv;
}

