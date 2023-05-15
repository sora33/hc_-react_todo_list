# ToDo List

Vanilla JSで作ったToDo ListをReactで作ります。

## 仕様
### Create
- 入力フィールドと保存のボタンがある
- 入力フィールドに「掃除」のような文字を入力して保存ボタンを押すとToDo一覧に表示される

### Read
- ToDo一覧が表示されている
- [x] 掃除　（編集） (削除)のように表示される
- 編集と削除はボタン
- チェックボックスでタスクの完了と未完了がわかる
- 全てのタスク：3 完了済み：2 未完了：1のようにタスクの数を表示する
- チェックボックスにチェックをいれる、つまりタスクを完了させることによりタスクの数はリアルタイムで変わる
- 削除するとタスクの数は減り、新規作成するとタスクの数は増える

### Update
- 編集ボタンを押すと文字がフォームに変わってその場で編集できる
- \[掃除\](保存)と表示され保存すると文字に戻る

### Delete
- 削除ボタンを押すと「本当によろしいですか？」と表示されOKを押すと削除できる
<img width="563" alt="image" src="https://user-images.githubusercontent.com/60137763/160192289-341fc4ca-e620-4f86-98c6-8b69d2e1be5c.png">

## 課題(終了条件)

- 上記仕様を満たしたReactアプリケーションを作成すること
- `react_todo_list`でリポジトリを作成する
- [create react app](https://ja.reactjs.org/docs/create-a-new-react-app.html)で初期セットアップすること
- 初期セットアップ後、差分をわかりやすくするため`react-todo`ブランチを切り作業してpull requestを作成しpull requestのURLを提出すること
、reactアプリケーションをbuildしてGithub Pagesにデプロイし、Github PagesのURLを提出すること

## ブログ課題
- reactアプリをGithub Pagesにデプロイする方法でブログを書いて、URLを提出すること