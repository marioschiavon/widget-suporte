// Widget Loader para Panda42
(function() {
  // Configurações
  const config = {
    buttonPosition: 'right',
    buttonColor: '#4285F4',
    widgetWidth: '380px',
    mobileBreakpoint: 768
  };
  // 🔥 Lê o appId do atributo do script
  const scriptTag = Array.from(document.getElementsByTagName('script'))
  .find(s => s.src && s.src.includes('widget-loader.js'));

const appId = scriptTag?.getAttribute('data-app-id') || 'default_app_id';

  
  // Cria elementos
  const container = document.createElement('div');
  container.id = 'panda-widget-container';
  
  const iframe = document.createElement('iframe');
  iframe.src = `https://widget.panda42.com.br/widget-content.html?app_id=${encodeURIComponent(appId)}`;
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
    width: 50px;
    height: 50px;
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
  
  container.style.cssText = `
    position: fixed;
    bottom: 120px;
    ${config.buttonPosition}: 30px;
    width: ${config.widgetWidth};
    height: 600px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    z-index: 9998;
    overflow: hidden;
  `;
  
  // Event listeners
  widgetBtn.addEventListener('click', function() {
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
  });
  
  // Responsividade
  function handleResize() {
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
  
  // Monta a estrutura
  container.appendChild(iframe);
  document.body.appendChild(container);
  document.body.appendChild(widgetBtn);
  
  // Inicialização
  window.addEventListener('resize', handleResize);
  handleResize();
})();