function goToPage(url) {
    window.open(url, '_blank');
}
function openExternal(url) {
    window.open(url, '_blank');
}

function nextSection() {
    if (currentSection < sections.length - 1) {
        currentSection++;
        showTab(sections[currentSection]);
    }
}

function previousSection() {
    if (currentSection > 0) {
        currentSection--;
        showTab(sections[currentSection]);
    }
}

// Função original das abas
function showTab(tabName) {
    // Esconder todas as abas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remover classe active de todos os botões
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Mostrar aba selecionada
    document.getElementById(tabName).classList.add('active');

    // Adicionar classe active ao botão clicado
    if (event && event.target) {
        event.target.classList.add('active');
    } else {
        // Para navegação programática
        const tabIndex = sections.indexOf(tabName);
        if (tabIndex !== -1) {
            document.querySelectorAll('.tab')[tabIndex].classList.add('active');
        }
    }

    // Atualizar seção atual
    currentSection = sections.indexOf(tabName);
}

// Inicializar quando a página carregar
window.addEventListener('load', function () {
    checkBackButton();

});


