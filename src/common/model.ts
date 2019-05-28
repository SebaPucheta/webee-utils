import mongoose from 'mongoose';

export class Model {
  private model: any;

  constructor(modelName: string, schema: any) {
    this.model = mongoose.model(modelName, schema);
  }

  public async save(disconnectionEvent: any) {
    let newItem = new this.model(disconnectionEvent);
    newItem = await newItem.save(disconnectionEvent);
    return newItem;
  }

  public async findById(id: string) {
    const item = await this.model.findOne({ _id: id });
    return item;
  }

  public async find() {
    const item = await this.model.find();
    return item;
  }

  public async delete(id: string) {
    const item = await this.model.deleteOne({ _id: id });
    return item;
  }

  public async update(id: string, disconnectionEvent: any) {
    const updatedItem = await this.model.updateOne(
      { _id: id },
      disconnectionEvent,
    );
    return updatedItem;
  }
}
