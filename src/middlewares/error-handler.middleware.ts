import * as AppHttpStatus from '../common/app-http-status';

const logger = require('logger').createLogger();

export default class ErrorHandlerMiddleware {
  private appHttpStatus = new AppHttpStatus.AppHttpStatus();

  public errorLogger(err: any, req: any, res: any, next: any) {
    logger.error(err);
    next(err);
  }

  public errorHandler(err: any, req: any, res: any, next: any) {
    res.status(this.appHttpStatus.getStatus('INTERNAL_SERVER_ERROR'));
    res.send(this.appHttpStatus.getSend('INTERNAL_SERVER_ERROR'));
  }
}
