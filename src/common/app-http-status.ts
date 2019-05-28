const HttpStatus = require('http-status-codes');

export class AppHttpStatus {
  public getSend(code: string) {
    return {
      code: HttpStatus[code],
      message: HttpStatus.getStatusText(HttpStatus[code]),
    };
  }

  public getStatus(code: string) {
    return HttpStatus[code];
  }
}
