
export function openDevModal() {
    const modal = document.getElementById('devModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

export function closeDevModal() {
    const modal = document.getElementById('devModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Alternativa: Abrir ao clicar em algum link ou botão
// Exemplo:
// <a href="#" onclick="openDevModal(); return false;">Ver Cases Completos</a>