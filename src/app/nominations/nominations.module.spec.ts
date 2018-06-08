import { NominationsModule } from './nominations.module';

describe('NominationsModule', () => {
  let nominationsModule: NominationsModule;

  beforeEach(() => {
    nominationsModule = new NominationsModule();
  });

  it('should create an instance', () => {
    expect(nominationsModule).toBeTruthy();
  });
});
