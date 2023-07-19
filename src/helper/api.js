// Zamiast:
// export const BASE_URL = window.location.origin;

// Użyj warunku, aby sprawdzić, czy uruchamiasz aplikację na GitHub Pages
// Jeśli tak, użyj nazwy repozytorium jako części BASE_URL
export const BASE_URL = window.location.hostname === 'github.io'
  ? `/${window.location.pathname.split('/')[1]}` // Użyj nazwy repozytorium jako części BASE_URL
  : ''; // W przeciwnym razie, użyj pustego ciągu (jeśli uruchamiasz lokalnie)

// Możesz również dodać logikę, aby obsłużyć różne środowiska deweloperskie, jeśli jest to potrzebne
// Na przykład, jeśli używasz GitHub Pages tylko w produkcji, a na lokalnym serwerze w innych środowiskach.
