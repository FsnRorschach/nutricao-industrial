import { openDevModal, closeDevModal } from './modal.js';

window.closeDevModal = closeDevModal;

window.onload = function() {
    setTimeout(openDevModal, 3000);
};