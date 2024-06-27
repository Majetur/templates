import log from 'loglevel';

const logLevel = import.meta.env.VITE_LOG_LEVEL || 'silent'

export function configLogger() {
  
  switch (logLevel) {
    case 'trace':
      log.setLevel(log.levels.TRACE);
      break;
    case 'debug':
      log.setLevel(log.levels.DEBUG);
      break;
    case 'info':
      log.setLevel(log.levels.INFO);
      break;
    case 'warn':
      log.setLevel(log.levels.WARN);
      break;
    case 'error':
      log.setLevel(log.levels.ERROR);
      break;
    case 'silent':
      log.setLevel(log.levels.SILENT);
      break;
    default:
      log.setLevel(log.levels.SILENT);
  }
}

