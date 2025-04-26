class StatsTracker {
  constructor() {
    this.counters = {
      views: 'sparrows_views',
      practice: 'sparrows_practice',
      exam: 'sparrows_exam'
    };
    this.sessionId = this.generateSessionId();
    this.init();
  }

  generateSessionId() {
    return 'session_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  }

  init() {
    // Инициализация счетчиков, если их нет
    Object.values(this.counters).forEach(counter => {
      if (!localStorage.getItem(counter)) {
        localStorage.setItem(counter, 0);
      }
    });
    this.updateDisplays();
    this.trackView();
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Отслеживаем переходы между режимами
    document.getElementById('learn-mode')?.addEventListener('click', () => this.trackView());
	document.getElementById('practice-mode')?.addEventListener('click', () => this.trackPractice());
    document.getElementById('test-mode')?.addEventListener('click', () => this.trackExam());
    
    // Отслеживаем переходы между страницами
    window.addEventListener('beforeunload', () => {
      this.syncAllWithServer();
    });
  }

  increment(counterName) {
    if (!this.counters[counterName]) return;
    
    // Проверка времени последнего обновления (защита от накрутки)
    const lastUpdateKey = `${counterName}_last_update`;
    const now = Date.now();
    const lastUpdate = localStorage.getItem(lastUpdateKey) || 0;
    const minInterval = counterName === 'views' ? 5000 : 10000; // 5s для просмотров, 10s для остального
    
    if (now - lastUpdate < minInterval) return;

    // Увеличиваем счетчик
    let count = parseInt(localStorage.getItem(this.counters[counterName])) || 0;
    count++;
    localStorage.setItem(this.counters[counterName], count);
    localStorage.setItem(lastUpdateKey, now);
    
    this.updateDisplay(counterName);
    this.syncWithServer(counterName, count);
  }

  trackView() {
    this.increment('views');
  }

  trackPractice() {
    this.increment('practice');
  }

  trackExam() {
    this.increment('exam');
  }

  updateDisplay(counterName) {
    const count = localStorage.getItem(this.counters[counterName]) || 0;
    const element = document.getElementById(`${counterName}-count`);
    if (element) {
      element.textContent = count;
      // Анимация
      element.classList.add('animate-up');
      setTimeout(() => element.classList.remove('animate-up'), 500);
    }
  }

  updateDisplays() {
    Object.keys(this.counters).forEach(counter => {
      this.updateDisplay(counter);
    });
  }

  async syncWithServer(counterName, count) {
    // Здесь может быть код для отправки данных на сервер
    try {
      // Пример: отправка данных на сервер
      // const response = await fetch('/api/track', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     type: counterName,
      //     count: count,
      //     sessionId: this.sessionId,
      //     timestamp: Date.now()
      //   })
      // });
      // if (!response.ok) throw new Error('Sync failed');
      console.log(`Synced ${counterName}: ${count}`);
    } catch (error) {
      console.error('Ошибка синхронизации:', error);
    }
  }

  async syncAllWithServer() {
    const stats = this.getStats();
    try {
      // const response = await fetch('/api/sync-all', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...stats,
      //     sessionId: this.sessionId,
      //     timestamp: Date.now()
      //   })
      // });
      // if (!response.ok) throw new Error('Sync failed');
      console.log('Synced all stats:', stats);
    } catch (error) {
      console.error('Ошибка синхронизации:', error);
    }
  }

  getStats() {
    return {
      views: parseInt(localStorage.getItem(this.counters.views)) || 0,
      practice: parseInt(localStorage.getItem(this.counters.practice)) || 0,
      exam: parseInt(localStorage.getItem(this.counters.exam)) || 0
    };
  }

  resetStats() {
    Object.values(this.counters).forEach(counter => {
      localStorage.setItem(counter, 0);
    });
    this.updateDisplays();
    console.log('Statistics reset');
  }
}

// Создаем глобальный экземпляр трекера
const statsTracker = new StatsTracker();

// Экспортируем для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
  module.exports = statsTracker;
}

// Добавляем в глобальную область видимости для доступа из консоли
window.statsTracker = statsTracker;