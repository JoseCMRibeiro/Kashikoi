export function renderFootNote()
{
    const footNote = document.createElement('div')
    footNote.id = "footNote"
    const footNoteText = '\u00A9 2023 KOSHIKAI || All Rights Reserved';

    footNote.style.backgroundColor = '#f0f0f0';
    footNote.style.textAlign = 'center';
    footNote.style.padding = '10px';
    footNote.style.position = 'fixed'
    footNote.style.bottom = '0'
    footNote.style.width = '100%'

    const footNoteContent = document.createTextNode(footNoteText);
    footNote.appendChild(footNoteContent);

    //EVENTS
    footNote.addEventListener('mouseover', () => 
    {
        footNote.style.cursor = 'pointer';
        footNote.style.textShadow = '2px 2px 4px #000000';
    });//----------------------------------------------------
    
    footNote.addEventListener('mouseout', () => 
    {        
        footNote.style.textShadow = '';
        footNote.style.cursor = 'default';
    });//----------------------------------------------------

    footNote.addEventListener('click', () => 
    {
        window.scrollTo
        ({
            top: 0,
            behavior: 'smooth'
         });
    });//----------------------------------------------------

    return footNote;
}