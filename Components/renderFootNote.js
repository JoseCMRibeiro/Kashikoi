export function renderFootNote()
{
    const footNote = document.createElement('div')
    footNote.id = "footNote"
    const footNoteText = '\u00A9 2023 KOSHIKAI || All Rights Reserved';

    footNote.style.backgroundColor = '#f0f0f0';
    footNote.style.textAlign = 'center';
    footNote.style.padding = '10px';

    const footNoteContent = document.createTextNode(footNoteText);
    footNote.appendChild(footNoteContent);

    //EVENTS
    footNote.addEventListener('mouseover', () => {
        footNote.style.backgroundColor = 'black';
        footNote.style.color = 'white';
        footNote.style.cursor = 'pointer';
    });
    footNote.addEventListener('mouseout', () => {
        footNote.style.backgroundColor = 'lightgrey';
        footNote.style.color = 'black'; 
        footNote.style.cursor = 'default';
      });

    footNote.addEventListener('click', () => 
    {
        window.scrollTo
        ({
            top: 0,
            behavior: 'smooth'
         });
    });
    return footNote;
}