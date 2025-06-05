
# jest-eval-lab

LLM × Jest によるプログラミング学習支援システム  
このプロジェクトは、学習者の習熟度に応じた演習問題の生成・評価を自動化し、個別最適な学習体験を提供することを目的としています。

## 📚 構成概要

```

jest-eval-lab/
├── plan/               # 研究・学習設計関連ファイル
├── exercises/          # 各問題とそのテストコード
├── scripts/            # 問題生成や評価支援スクリプト
└── README.md

````

---

## 🧭 使い方

### 1. プロジェクトのクローン

```bash
git clone https://github.com/itojum/jest-eval-lab.git
cd jest-eval-lab
````

### 2. 依存のインストール

```bash
npm install
```

### 3. テストの実行

```bash
npm test
```

---

## ✍️ plan/ ディレクトリの説明

* `goals.md`：習熟度チェック・目標設定
* `learning-plan.md`：学習項目・ステップの計画
* `prompt-design.md`：LLMへのプロンプト設計やテンプレート

---

## 🧪 exercises/ ディレクトリの構成

演習は以下のように構成されます：

```
exercises/
└── 01_intro/
    ├── problem.md         # 問題説明
    ├── solution.js        # 解答テンプレート
    └── solution.test.js   # 自動評価用Jestファイル
```
