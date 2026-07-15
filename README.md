Slime OS Final — Web デスクトップシステム
（ブラウザ上で動作する OS 風 Web アプリケーションを作成しました。）

1. アプリケーション概要
Slime OS Final は、Windows ライクな直感的な操作感とスライムをモチーフにした親しみやすいデザインを融合させた仮想デスクトップです。

<開発背景>
職業訓練校で学習したJava（Spring Boot）・HTML・CSS・JavaScript を活用し、
「画面設計」「ユーザー認証」「データ管理」の基礎を体系的に作成し、直感的で楽  「Webブラウザ上でWindowsのような操作感を再現する」ことを目標に、楽しく操作できる仮想デスクトップ環境を目指して開発しました。


2. アクセス情報
   
GitHub リポジトリ

URL：https://github.com/goldokita0206-byte/slimeOS

ローカル実行 URL：http://localhost:8080/start.html

テスト用アカウント
ユーザー名：user
パスワード：password

4. 画面・機能紹介
<画面遷移図>

１．起動画面

<img width="462" height="252" alt="image" src="https://github.com/user-attachments/assets/d7bad2f0-16d4-490a-932c-8ce1746ca3e3" />

２．ログイン画面 

ユーザー名・パスワードによる認証を実装
（ユーザー名:user。パスワード：passwordを入力してください。）

<img width="452" height="253" alt="image" src="https://github.com/user-attachments/assets/ff098f6d-abc0-43e5-85ee-0dec05ec5528" />

３．メイン画面　

<img width="475" height="280" alt="image" src="https://github.com/user-attachments/assets/da437947-c7a6-47ba-b88e-f73dfe1ce7a8" />

４．メニュー画面

左下の「Slime OS」ボタンでスタートメニューを選び、各機能・フォルダへ画　　面遷移できます

<img width="474" height="263" alt="image" src="https://github.com/user-attachments/assets/b17d0a96-8e8f-44b8-8933-dd5254fff783" />

5．各種メニュー画面　　

・スライムの森　　                        ・水辺の広場

<img width="649" height="231" alt="image" src="https://github.com/user-attachments/assets/17ac9191-c125-4182-a81a-b290dd6ea066" />

・カレンダー　　　　　　　　　　　　　　　　・office

<img width="623" height="188" alt="image" src="https://github.com/user-attachments/assets/4f7dd776-c790-4d39-b834-e947ee02faa7" />

・設定

<img width="312" height="227" alt="image" src="https://github.com/user-attachments/assets/57a10c40-0a85-45e2-8fd9-2b99dcd47046" />

4. 使用技術一覧表

区分
採用技術
フロントエ　ンド
　　HTML5 / CSS3 / JavaScript / Tailwind 　　CSS
バックエンド
　　Java 17 / Spring Boot 3.4.1
データベース
　　H2 Database（インメモリ型）
開発ツール
　　Eclipse IDE / Gradle / Git / GitHub
  

5. データベース設計（ER 全体図）

<img width="691" height="398" alt="image" src="https://github.com/user-attachments/assets/bccb1a5d-5f33-4ef3-8a56-f6ecdc5bf916" />

 . データベース設計（ER 詳細図）
 
<img width="646" height="434" alt="image" src="https://github.com/user-attachments/assets/46ecd02b-8710-466e-985f-c42c62c059af" />

<img width="621" height="417" alt="image" src="https://github.com/user-attachments/assets/d31d0075-2321-4a72-94a5-ec27d2d56a32" />

<img width="667" height="421" alt="image" src="https://github.com/user-attachments/assets/627e4c3b-4ac9-4907-8020-ec9125e2e8e8" />

<img width="663" height="420" alt="image" src="https://github.com/user-attachments/assets/477f87f5-134e-4192-8f92-15f4197a62b2" />

<img width="662" height="403" alt="image" src="https://github.com/user-attachments/assets/1e5b6005-c5af-45ea-af3e-790f78953c45" />

<img width="641" height="378" alt="image" src="https://github.com/user-attachments/assets/b2dfc109-be40-4682-81da-5254630abf06" />


6. ローカル環境での起動手順

1.リポジトリを取得

2.git clone https://github.com/goldokita0206-byte/slimeOS.git

3.開発環境に読み込み
Eclipse を起動 → ファイル > インポート > Gradle > 既存のGradleプロジェクト

4.クローンしたフォルダを選択し、自動ビルド完了まで待機

5.アプリケーション起動
SlimeosFinalApplication.java を右クリック

6.実行 > Spring Boot アプリケーション を選択

コンソールに「起動完了」のメッセージが表示されたら準備完了

7.ブラウザからアクセス

plaintext
http://localhost:8080/start.html


7. 開発背景・こだわりポイント

開発の目的
職業訓練で Web アプリケーションの基礎を学ぶ中で、「単なる画面表示だけでなく、データの入出力・認証を備えた実用的なシステム」を作ることを目標としました。

OS 風のデザインにすることで、操作の直感性を高めつつ、実務に近い開発フローを体験することを意識しました。
工夫した点
UI 設計：デスクトップ環境に合わせたレイアウトと、ウィンドウのドラッグ・リサイズ操作を実装
データ連携：H2 データベースを採用し、開発中もデータの状態をリアルタイムで確認できるよう調整
エラー処理：ログイン失敗やファイル読み込み時に、利用者にわかりやすいメッセージを表示するよう配慮


8. 成果とまとめ

本課題を通じて、以下の基礎スキルを習得し実践できました。

フロントエンド：HTML/CSS/JavaScript による画面設計とインタラクティブな動作の実装
バックエンド：Spring Boot による Web サーバー構築、CRUD 処理の基本
データベース：テーブル設計、ユーザー認証の仕組みの理解
開発管理：Git/GitHub によるバージョン管理、ドキュメントの整備


今後はファイルのアップロード機能や画像プレビューなど、より実用的な機能を追加していく予定です。




























