import log, { getLogger } from 'loglevel';
import prefix from 'loglevel-plugin-prefix';

const logLevel = import.meta.env.VITE_LOG_LEVEL || 'silent'

prefix.reg(log);

prefix.apply(log, {
  format(level, name, timestamp) {
    const nombre = name == 'root' ? '' : `[${name}]`
    return `${timestamp} [${level}] ${nombre}:`;
  }
});

function getComponentName(Component) {
  const componentName = Component.displayName || Component.name || 'Unknown';
  return componentName
}
export function getLoggerComponent(Component) {
  return getLogger(getComponentName(Component));
}

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

