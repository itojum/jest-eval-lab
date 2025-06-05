import { readdir, statSync, mkdir, writeFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';

// fsの非同期関数をPromise化
const readdirAsync = promisify(readdir);
const mkdirAsync = promisify(mkdir);
const writeFileAsync = promisify(writeFile);

const fetchIntroCount = async () => {
  const exercisesDir = './exercises';

  try {
    const files = await readdirAsync(exercisesDir);
    
    // フォルダのみをフィルタリング
    const directories = files.filter(file => {
      const fullPath = join(exercisesDir, file);
      return statSync(fullPath).isDirectory() && file.endsWith('intro');
    });
    
    return directories.length;
  } catch (error) {
    console.error('Error fetching intro count:', error);
    return 0;
  }
}

// フォルダ構造を生成する関数
const generateFolderStructure = async (count) => {
  const folderName = `${String(count).padStart(2, '0')}_intro`;
  const folderPath = join('./exercises', folderName);
  
  try {
    // フォルダを作成
    await mkdirAsync(folderPath, { recursive: true });
    
    // 各ファイルのコンテンツ
    const problemContent = `# 問題説明\n\n演習問題${count}の説明をここに記述します。`;
    const solutionContent = `// 解答テンプレート\nfunction solution() {\n  // ここに解答を実装してください\n}\n\nexport default solution;`;
    const testContent = `// 自動評価用Jestファイル\nimport solution from './solution.js';\n\ndescribe('演習問題${count}のテスト', () => {\n  test('期待される動作をテスト', () => {\n    // ここにテストを実装\n    expect(solution()).toBeDefined();\n  });\n});`;
    
    // ファイルを作成
    await writeFileAsync(join(folderPath, 'problem.md'), problemContent);
    await writeFileAsync(join(folderPath, 'solution.js'), solutionContent);
    await writeFileAsync(join(folderPath, 'solution.test.js'), testContent);
    
    console.log(`フォルダ構造が作成されました: ${folderPath}`);
    console.log(`  ├── problem.md`);
    console.log(`  ├── solution.js`);
    console.log(`  └── solution.test.js`);
  } catch (error) {
    console.error('フォルダ構造の作成に失敗しました:', error);
  }
}

const main = async () => {
  try {
    const introCount = await fetchIntroCount();
    console.log(`既存の 'intro' ディレクトリ数: ${introCount}`);
    
    // フォルダ構造を生成（次の番号を使用）
    const nextCount = introCount + 1;
    await generateFolderStructure(nextCount);
  } catch (error) {
    console.error('エラーが発生しました:', error);
  }
}

// main関数を実行
main();