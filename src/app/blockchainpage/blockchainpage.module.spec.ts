import { BlockchainpageModule } from './blockchainpage.module';

describe('BlockchainpageModule', () => {
  let blockchainpageModule: BlockchainpageModule;

  beforeEach(() => {
    blockchainpageModule = new BlockchainpageModule();
  });

  it('should create an instance', () => {
    expect(blockchainpageModule).toBeTruthy();
  });
});
