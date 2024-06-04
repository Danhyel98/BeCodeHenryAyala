//modal element
const modal =document.getElementById('simpleModal');

// open modal button
const modalBtn=document.getElementById('modalBtn');

//close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click

modalBtn.addEventListener('click', openModal);

//listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outside click
window.addEventListener('click', outsideClick);


//function openmodal

function openModal() {
    modal.style.display= 'block';
}

//function closemodal
function closeModal() {
    modal.style.display= 'none';
}


//function for outside click

function outsideClick(e){
    if( e.target == modal){
        modal.style.display ='none';
    }
}