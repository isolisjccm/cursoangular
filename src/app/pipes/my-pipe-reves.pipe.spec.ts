import { MyPipeRevesPipe } from './my-pipe-reves.pipe';

describe('MyPipeRevesPipe', () => {
  it('create an instance', () => {
    const pipe = new MyPipeRevesPipe();
    expect(pipe).toBeTruthy();
  });
});
