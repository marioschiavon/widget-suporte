// Widget Loader para Panda42
(function() {
<<<<<<< HEAD
  // Configurações
  const config = {
    buttonPosition: 'right',
    buttonColor: '#4285F4',
    widgetWidth: '380px',
    mobileBreakpoint: 768
  };
  
  // Cria elementos
  const container = document.createElement('div');
  container.id = 'panda-widget-container';
  
  const iframe = document.createElement('iframe');
  iframe.src = 'https://widget.panda42.com.br/widget-content';
  iframe.style.cssText = 'border:none;width:100%;height:100%;display:none;';
  iframe.title = 'Chat de Suporte Panda42';
  iframe.allow = 'microphone';
  iframe.id = 'pandaSupportIframe';
  
  const widgetBtn = document.createElement('button');
  widgetBtn.id = 'pandaWidgetBtn';
  widgetBtn.innerHTML = `
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" 
            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  
  // Aplica estilos
  widgetBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    ${config.buttonPosition}: 30px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: ${config.buttonColor};
    border: none;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;
  
=======
  const config = {
    buttonPosition: 'right',      // Pode ser 'left' ou 'right'
    buttonColorStart: '#4285F4',  // Cor inicial do botão (gradiente)
    buttonColorEnd: '#34A853',    // Cor final do botão (gradiente)
    widgetWidth: '380px',
    mobileBreakpoint: 768
  };

  const container = document.createElement('div');
  container.id = 'panda-widget-container';
>>>>>>> 36c3c12ac0c4871db4a393a640cae884f1547e28
  container.style.cssText = `
    position: fixed;
    bottom: 120px;
    ${config.buttonPosition}: 30px;
    width: ${config.widgetWidth};
    height: 600px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
<<<<<<< HEAD
    z-index: 9998;
    overflow: hidden;
  `;
  
  // Event listeners
  widgetBtn.addEventListener('click', function() {
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
  });
  
  // Responsividade
  function handleResize() {
=======
    background: white;
    z-index: 9998;
    overflow: hidden;
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease;
  `;

  const iframe = document.createElement('iframe');
  iframe.src = 'https://widget.panda42.com.br/widget-content';
  iframe.style.cssText = 'border:none;width:100%;height:100%;';
  iframe.title = 'Chat de Suporte Panda42';
  iframe.allow = 'microphone';
  iframe.id = 'pandaSupportIframe';

  iframe.addEventListener('load', function() {
    container.style.opacity = '1'; // Fade-in depois do conteúdo carregar
  }, { once: true });

  container.appendChild(iframe);

  const widgetBtn = document.createElement('button');
  widgetBtn.id = 'pandaWidgetBtn';
  widgetBtn.innerHTML = `
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 11.5C21 16.1944 16.9706 20 12 20C10.0032 20 8.1503 19.4091 6.6513 18.3846L3 19.5L4.26889 16.0101C3.46592 14.7415 3 13.1739 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z" 
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  widgetBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    ${config.buttonPosition}: 30px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${config.buttonColorStart}, ${config.buttonColorEnd});
    border: none;
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: all 0.3s ease;
  `;

  // EFEITO HOVER bonito
  widgetBtn.addEventListener('mouseenter', () => {
    widgetBtn.style.transform = 'scale(1.1)';
    widgetBtn.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.4)';
  });
  widgetBtn.addEventListener('mouseleave', () => {
    widgetBtn.style.transform = 'scale(1)';
    widgetBtn.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
  });

  widgetBtn.addEventListener('click', function() {
    if (container.style.display === 'none') {
      container.style.display = 'block';
      setTimeout(() => {
        container.style.opacity = '1';
      }, 10);
    } else {
      container.style.opacity = '0';
      setTimeout(() => {
        container.style.display = 'none';
      }, 500);
    }
  });

  function handleResize() {
    if (!container) return;
>>>>>>> 36c3c12ac0c4871db4a393a640cae884f1547e28
    if (window.innerWidth < config.mobileBreakpoint) {
      container.style.width = '95%';
      container.style[config.buttonPosition] = '2.5%';
      container.style.bottom = '100px';
      container.style.height = '70vh';
    } else {
      container.style.width = config.widgetWidth;
      container.style[config.buttonPosition] = '30px';
      container.style.bottom = '120px';
      container.style.height = '600px';
    }
  }
<<<<<<< HEAD
  
  // Monta a estrutura
  container.appendChild(iframe);
  document.body.appendChild(container);
  document.body.appendChild(widgetBtn);
  
  // Inicialização
  window.addEventListener('resize', handleResize);
  handleResize();
})();
=======

  document.body.appendChild(container);
  document.body.appendChild(widgetBtn);

  window.addEventListener('resize', handleResize);
  handleResize();
})();

>>>>>>> 36c3c12ac0c4871db4a393a640cae884f1547e28
