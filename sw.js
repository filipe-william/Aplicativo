// Instalação do Service Worker
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Instalado');
    self.skipWaiting();
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Ativado');
});

// Intercepta as requisições (Necessário para o PWA funcionar)
self.addEventListener('fetch', (event) => {
    // Por enquanto não faremos cache offline avançado, apenas deixamos a requisição passar
    event.respondWith(fetch(event.request));
});
