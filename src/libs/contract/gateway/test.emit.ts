export namespace TestEmitGateway {
  export const topic = 'test.emit.query';

  export class Request {}

  export class Response {
    data: string[] = [];
  }
}
