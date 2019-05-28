import * as AppHttpStatus from './app-http-status';

export class Controller {
  protected appHttpStatus: any;
  private model: any;

  constructor(model: any) {
    this.model = model;
    this.appHttpStatus = new AppHttpStatus.AppHttpStatus();
  }

  public async save(req: any, res: any, next: any) {
    try {
      const item = await this.model.save(req.body);
      res.status(this.appHttpStatus.getStatus('OK'));
      res.send(item);
    } catch (error) {
      next(error);
    }
  }

  public async update(req: any, res: any, next: any) {
    try {
      await this.model.update(req.params.id, req.body);
      req.body._id = req.params.id;
      res.status(this.appHttpStatus.getStatus('OK'));
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: any, res: any, next: any) {
    try {
      const response = await this.model.delete(req.params.id);
      res.status(this.appHttpStatus.getStatus('OK'));
      res.send(response);
    } catch (error) {
      next(error);
    }
  }

  public async findById(req: any, res: any, next: any) {
    try {
      const item = await this.model.findById(req.params.id);
      res.status(this.appHttpStatus.getStatus('OK'));
      res.send(item);
    } catch (error) {
      next(error);
    }
  }

  public async find(req: any, res: any, next: any) {
    try {
      const items = await this.model.find();
      res.status(this.appHttpStatus.getStatus('OK'));
      res.send(items);
    } catch (error) {
      next(error);
    }
  }
}
