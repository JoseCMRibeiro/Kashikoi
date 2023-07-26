

export function renderSearch()
{    
    // Create container div
    const containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    // Create image element
    const image = document.createElement('img');
    image.src = "../images/searching.png";
    image.alt = 'search';
    image.width = '500';

   
    containerDiv.appendChild(image);

    return containerDiv;
}////////////////////////////////////////////////////////////////////////////
