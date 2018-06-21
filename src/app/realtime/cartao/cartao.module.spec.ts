import { CartaoModule } from './cartao.module';

describe('CartaoModule', () => {
  let cartaoModule: CartaoModule;

  beforeEach(() => {
    cartaoModule = new CartaoModule();
  });

  it('should create an instance', () => {
    expect(cartaoModule).toBeTruthy();
  });
});
