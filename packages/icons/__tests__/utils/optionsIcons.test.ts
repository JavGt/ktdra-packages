import { FoldersIcon } from '../../src/types';
import { optionsIcons } from '../../src/utils/optionsIcons';

describe('optionsIcons', () => {
  test('should return all icons', () => {
    const folders = [];
    const result = optionsIcons(folders);
    expect(result).toMatchSnapshot();
  });

  test('should return icons with BT', () => {
    const folders = ['BT'] as FoldersIcon[];

    const result = optionsIcons(folders);
    expect(result).toMatchSnapshot();
  });

  test('should return icons with BT and DGB', () => {
    const folders = ['BT', 'DGB'] as FoldersIcon[];

    const result = optionsIcons(folders);
    expect(result).toMatchSnapshot();
  });
});
