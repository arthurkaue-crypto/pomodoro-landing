let currentLanguage = 'pt'; // Idioma atual

// Dicionário de traduções
const translations = {
    pt: {
        maximize: 'Maximize sua Produtividade',
        subtitle: 'Trabalhe com foco e disciplina usando a técnica Pomodoro',
        startNow: 'Comece Agora',
        why: 'Por que usar PomoDoro?',
        timeBlocks: 'Blocos de Tempo',
        timeBlocksDesc: 'Organize seu dia em intervalos de 25 minutos de foco intenso, seguidos de 5 minutos de descanso',
        focus: 'Foco Total',
        focusDesc: 'Elimine distrações e concentre-se completamente em uma tarefa por vez',
        productivity: 'Produtividade Comprovada',
        productivityDesc: 'Aumenta a produtividade em até 40% com períodos estruturados de trabalho e descanso',
        interface: 'Interface Intuitiva',
        interfaceDesc: 'Design limpo e moderno que funciona em qualquer dispositivo',
        darkMode: 'Modo Escuro',
        darkModeDesc: 'Proteja seus olhos com o modo escuro integrado e customize seus temas',
        multilingual: 'Multilíngue',
        multilingualDesc: 'Disponível em português e inglês para alcançar usuários em todo o mundo',
        how: 'Como Funciona',
        choose: 'Escolha sua Tarefa',
        chooseDesc: 'Selecione a tarefa que você deseja completar',
        work: 'Comece a Trabalhar',
        workDesc: 'Trabalhe focadamente por 25 minutos sem distrações',
        rest: 'Tire um Descanso',
        restDesc: 'Descanse por 5 minutos para recarregar as energias',
        repeat: 'Repita',
        repeatDesc: 'Continue o ciclo e acompanhe seu progresso',
        ready: 'Pronto para Aumentar sua Produtividade?',
        readyDesc: 'Inicie seu jornada Pomodoro agora mesmo',
        openApp: 'Abrir App',
        madeWith: 'Feito com',
        by: 'por'
    },
    en: {
        maximize: 'Maximize Your Productivity',
        subtitle: 'Work with focus and discipline using the Pomodoro technique',
        startNow: 'Start Now',
        why: 'Why use PomoDoro?',
        timeBlocks: 'Time Blocks',
        timeBlocksDesc: 'Organize your day into 25-minute intervals of intense focus, followed by 5-minute breaks',
        focus: 'Total Focus',
        focusDesc: 'Eliminate distractions and focus completely on one task at a time',
        productivity: 'Proven Productivity',
        productivityDesc: 'Increases productivity by up to 40% with structured work and rest periods',
        interface: 'Intuitive Interface',
        interfaceDesc: 'Clean and modern design that works on any device',
        darkMode: 'Dark Mode',
        darkModeDesc: 'Protect your eyes with integrated dark mode and customize your themes',
        multilingual: 'Multilingual',
        multilingualDesc: 'Available in Portuguese and English to reach users worldwide',
        how: 'How It Works',
        choose: 'Choose Your Task',
        chooseDesc: 'Select the task you want to complete',
        work: 'Start Working',
        workDesc: 'Work intensely for 25 minutes without distractions',
        rest: 'Take a Break',
        restDesc: 'Rest for 5 minutes to recharge',
        repeat: 'Repeat',
        repeatDesc: 'Continue the cycle and track your progress',
        ready: 'Ready to Boost Your Productivity?',
        readyDesc: 'Start your Pomodoro journey now',
        openApp: 'Open App',
        madeWith: 'Made with',
        by: 'by'
    }
};

// Elementos
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const languageToggle = document.getElementById('language-toggle');
const timerPreview = document.querySelector('.timer-preview');

// Valores do Pomodoro para animação
const pomodoroValues = ['25:00', '5:00', '25:00', '15:00'];
let currentValueIndex = 0;

// Animar mudança de valores no timer flutuante
function animateTimerValue() {
    if (!timerPreview) return;
    
    // Adiciona classe de animação
    timerPreview.classList.add('value-change');
    
    // Após a animação, muda o valor
    setTimeout(() => {
        currentValueIndex = (currentValueIndex + 1) % pomodoroValues.length;
        timerPreview.textContent = pomodoroValues[currentValueIndex];
        timerPreview.classList.remove('value-change');
    }, 500);
}

// Alternar Tema
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Trocar ícone de lua para sol
    if (isDarkMode) {
        themeIcon.src = 'https://img.icons8.com/ios-filled/50/f0f0f0/sun.png';
        themeIcon.alt = 'Light Mode';
    } else {
        themeIcon.src = 'https://img.icons8.com/ios-filled/50/6366f1/crescent-moon.png';
        themeIcon.alt = 'Dark Mode';
    }
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Alternar Idioma
function changeLanguage() {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    languageToggle.textContent = currentLanguage === 'pt' ? 'EN' : 'PT';
    
    // Atualizar todos os elementos com data-pt e data-en
    document.querySelectorAll('[data-pt]').forEach(element => {
        const ptText = element.getAttribute('data-pt');
        const enText = element.getAttribute('data-en');
        element.textContent = currentLanguage === 'pt' ? ptText : enText;
    });
    
    localStorage.setItem('language', currentLanguage);
}

// Carregar preferências salvas
window.addEventListener('DOMContentLoaded', () => {
    // Carregar idioma
    const savedLanguage = localStorage.getItem('language') || 'pt';
    currentLanguage = savedLanguage;
    languageToggle.textContent = currentLanguage === 'pt' ? 'EN' : 'PT';
    
    // Carregar tema
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.src = 'https://img.icons8.com/ios-filled/50/f0f0f0/sun.png';
        themeIcon.alt = 'Light Mode';
    } else {
        themeIcon.src = 'https://img.icons8.com/ios-filled/50/6366f1/crescent-moon.png';
        themeIcon.alt = 'Dark Mode';
    }

    // Atualizar textos com o idioma salvo
    if (currentLanguage === 'en') {
        document.querySelectorAll('[data-pt]').forEach(element => {
            const enText = element.getAttribute('data-en');
            element.textContent = enText;
        });
    }

    // Iniciar animação do timer a cada 4 segundos
    setInterval(animateTimerValue, 4000);
});

// Event Listeners
themeToggle.addEventListener('click', toggleTheme);
languageToggle.addEventListener('click', changeLanguage);
