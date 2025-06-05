// 自動評価用Jestファイル
import solution from './solution';

describe('演習問題1のテスト', () => {
  test('期待される動作をテスト', () => {
    // ここにテストを実装
    expect(solution()).toBeDefined();
  });
});