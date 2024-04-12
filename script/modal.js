'use strict';

export const openModal = (popupElement) => {
    popupElement.classList.add('active');
};

export const closeModal = (popupElement) => {
    popupElement.classList.remove('active');
};

export const handleOverlayClose = (evt) => { 
    if (evt.target === evt.currentTarget) { 
        const popupOpened = document.querySelector('.active'); 
        closeModal(popupOpened); 
    } 
} ;