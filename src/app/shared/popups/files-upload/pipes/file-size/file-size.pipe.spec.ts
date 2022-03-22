import { FileSizePipe } from './file-size.pipe';

describe('FileFizePipe', () => {
  it('create an instance', () => {
    const pipe = new FileSizePipe();
    expect(pipe).toBeTruthy();
  });
});
