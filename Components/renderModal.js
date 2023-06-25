import Modal from './modal';
export function RenderModal(t,c)
{
    const modal = new Modal
    ({
    isOpen: false,
    onClose: closeModal,
    title: t,
    content: c,
    });

    
    function closeModal() 
    {
    modal.style.display = 'none';
    }    
    modal.style.display = 'block';  
    
    document.body.appendChild(modal)
    //return modal    
}