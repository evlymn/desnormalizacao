import { RealtimeModule } from './realtime.module';

describe('RealtimeModule', () => {
  let realtimeModule: RealtimeModule;

  beforeEach(() => {
    realtimeModule = new RealtimeModule();
  });

  it('should create an instance', () => {
    expect(realtimeModule).toBeTruthy();
  });
});
