class Logger {
  onMissingTranslation: (error: Error) => void = () => null;
}

const logger = new Logger();

export default logger;
