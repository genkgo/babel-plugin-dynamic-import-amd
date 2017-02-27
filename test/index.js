import { expect } from 'chai';
import { join } from 'path';
import { readdirSync, statSync, readFileSync } from 'fs';
import transform from './transform';

const FIXTURE_PATH = join(__dirname, 'fixtures');

const testFolders = readdirSync(FIXTURE_PATH).filter(file => (
  statSync(join(FIXTURE_PATH, file)).isDirectory()
));

describe('babel-plugin-dynamic-import-amd', () => {
  testFolders.forEach((folderName) => {
    const actual = readFileSync(join(FIXTURE_PATH, folderName, 'actual.js'), 'utf8');
    const expected = readFileSync(join(FIXTURE_PATH, folderName, 'expected.js'), 'utf8');
    it(`works with ${folderName}`, () => {
      const result = transform(actual);
      expect(result.trim()).to.equal(expected.trim());
    });
  });
});
