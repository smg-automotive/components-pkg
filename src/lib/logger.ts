class Logger {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onMissingTranslation: (error: Error) => void = () => {};
}

const logger = new Logger();

export default logger;
