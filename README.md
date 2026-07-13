Slime OS Final — Web デスクトップシステム
ブラウザ上で動作する OS 風インターフェース型 Web アプリケーション


1. アプリケーション概要
Slime OS Final は、Windows ライクな直感的な操作感とスライムをモチーフにした親しみやすいデザインを融合させた仮想デスクトップシステムです。
職業訓練校の課題として、「画面設計」「ユーザー認証」「データ管理」の基礎を体系的に学ぶことを目的に開発しました。
解決する課題
ファイル管理・文書編集を 1 画面に統合し、操作の効率性を向上
ログイン機能により、個人のデータを安全に管理できる環境を提供


2. アクセス情報
GitHub リポジトリ URL：https://github.com/goldokita0206-byte/slimeOS
ローカル実行 URL：http://localhost:8080/start.html
テスト用アカウント
ユーザー名：user
パスワード：password

3. 画面・機能紹介
メイン画面
【ここにスクリーンショット画像を挿入】
左下の「Slime OS」ボタンでスタートメニューを展開
デスクトップアイコンから各機能・フォルダへ直接アクセス
ファイル管理画面
【ここにスクリーンショット画像を挿入】
Home / Document / Download / Picture / Video など用途別に整理
内蔵 Office 機能でテキスト文書の作成・編集に対応
ログイン認証画面
【ここにスクリーンショット画像を挿入】
ユーザー名・パスワードによる認証を実装
ブラウザのパスワード保存機能と連携し、安全性と利便性を両立

🖥️ SlimeOS
**スライムの世界を楽しめる、OS風Webデスクトップ**

SlimeOSは、スライムをテーマにしたWebブラウザ上で動作するOS風デスクトップアプリケーションです。
職業訓練校で学習したJava（Spring Boot）・HTML・CSS・JavaScript を活用し、直感的で楽しく操作できる仮想デスクトップ環境を目指して開発しました。

🔗 **公開URL**：`https://your-deploy-url.example.com`
💻 **ローカル確認URL**：`http://localhost:8080`

 🎯 開発背景
職業訓練校でJava・Web開発の基礎を学んだ内容を、実践的な形でまとめるために制作しました。
「Webブラウザ上でWindowsのような操作感を再現する」ことを目標に、以下の技術の習得・定着を目的としています。
- HTML/CSS/JavaScriptによるフロントエンド開発
- Spring BootによるWebアプリケーションの骨格作成
- データベース連携によるログイン認証機能の実装
また、単なる学習用アプリに留まらず、「スライム」の世界観を取り入れ、親しみやすく楽しいUIデザインを意識しました。

✨ 主な機能
- **OS風デスクトップ環境**：アイコン配置、メニュー、背景変更
- **ウィンドウ操作**：ドラッグ移動、開閉、重ね順の制御
- **文書管理**：テキスト・Wordファイルの作成・編集・保存・名前変更・削除
- **ファイル管理**：画像・文書・動画・音声・圧縮ファイルの一覧表示と起動
- **画像編集**：閲覧に加え、簡易ペイントツールで描画・保存
- **動画再生**：動画ファイルの選択、再生・一時停止・音量調整
- **統合ツール**：メモ帳、時計、カレンダー、簡易メール、Office風ツール
- **ブラウザ機能**：各種ブラウザを選択し、外部Webサービスへアクセス
- **システム設定**：表示・デバイス・ネットワーク・個人設定・日時・言語など
- **ユーザー認証**：ID/パスワードによるログイン機能
- **ごみ箱**：削除したファイルの管理
🔄 画面遷移図
<img width="641" height="365" alt="image" src="https://github.com/user-attachments/assets/9d398044-5fa3-4e36-b845-fddf470f5feb" />
<img width="674" height="467" alt="image" src="https://github.com/user-attachments/assets/4e706b33-2b64-4b9e-a8e1-8f025b6420b4" />
<img width="657" height="474" alt="image" src="https://github.com/user-attachments/assets/4ffb9408-3356-41f9-8ca1-40e7f4ffd3da" />
<img width="658" height="472" alt="image" src="https://github.com/user-attachments/assets/de2fe6d4-8c2e-4480-be84-f6383716faf2" />
<img width="570" height="406" alt="image" src="https://github.com/user-attachments/assets/31cd5d49-581e-4dcf-b452-c7600b176664" />
<img width="662" height="403" alt="image" src="https://github.com/user-attachments/assets/1e5b6005-c5af-45ea-af3e-790f78953c45" />
<img width="641" height="378" alt="image" src="https://github.com/user-attachments/assets/b2dfc109-be40-4682-81da-5254630abf06" />


```mermaid
flowchart TD
    A[起動画面<br/>ローディング表示] --> B[ログイン画面<br/>ユーザー名/パスワード入力]
    B -->|認証成功| C[メインメニュー<br/>スライムの森 / 水辺の広場]

    C --> D[Home<br/>ファイルシステム一覧]
    C --> E[Desktop<br/>デスクトップアイコン]
    C --> F[Document<br/>文書管理]
    C --> G[Download<br/>ファイル一覧]
    C --> H[Video<br/>動画管理・再生]
    C --> I[Picture<br/>画像管理・編集]
    C --> J[Office<br/>統合ツール]
    C --> K[設定<br/>システム環境]

    %% Document 内部操作
    F --> F1[ファイル一覧]
    F1 --> F2[新規作成 / 編集]
    F2 --> F3[保存 / 名前変更 / 削除]
    F3 --> F1

    %% Download 内部操作
    G --> G1[画像ファイル起動]
    G --> G2[文書ファイル起動]
    G --> G3[動画ファイル起動]
    G --> G4[圧縮ファイル起動]
    G --> G5[音声ファイル起動]

    %% Office 内部機能
    J --> J1[Word / Excel / PowerPoint]
    J --> J2[メモ帳]
    J --> J3[時計]
    J --> J4[カレンダー＋簡易メール]
    J --> J5[ブラウザ選択<br/>Chrome / Firefox / Opera / Edge]
    J5 --> J6[Google / X / Amazon / Gmail / YouTube / GitHub / ChatGPT]

    %% 設定 内部項目
    K --> K1[システム・ディスプレイ]
    K --> K2[デバイス・Bluetooth]
    K --> K3[ネットワーク]
    K --> K4[個人用設定・背景]
    K --> K5[時刻・言語]
    K --> K6[セキュリティ・更新]

    %% 戻り
    D --> C
    E --> C
    F --> C
    G1 --> G
    G2 --> G
    G3 --> G
    G4 --> G
    G5 --> G
    H --> C
    I --> C
    J1 --> J
    J2 --> J
    J3 --> J
    J4 --> J
    J6 --> J5
    K1 --> K
    K2 --> K
    K3 --> K
    K4 --> K
    K5 --> K
    K6 --> K 


4. 使用技術一覧
表
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






5. データベース設計（ER 図）
plaintext
USERS テーブル
- id（主キー）：ユーザーID
- username：ユーザー名
- password：暗号化済みパスワード
- created_at：登録日時


FILES テーブル
- id（主キー）：ファイルID
- file_name：ファイル名
- file_path：保存先パス
- user_id（外部キー）：所有ユーザーID
- updated_at：更新日時

関係性：1人のユーザーは複数のファイルを所有できる（1対多）



erDiagram
    USER ||--o{ DOCUMENT : "creates"
    USER ||--o{ FILE : "manages"
    FOLDER ||--o{ FILE : "contains"
    
    USER {
        string user_id PK
        string username
        string password_hash
    }
    
    DOCUMENT {
        string doc_id PK
        string user_id FK
        string title
        text content
        timestamp created_at
    }
    
    FILE {
        string file_id PK
        string folder_id FK
        string filename
        string file_type
        string file_path
    }
    
    FOLDER {
        string folder_id PK
        string folder_name
    }



インフラ構成図 
graph TD
    User((ユーザー))
    
    subgraph Client [フロントエンド]
        Browser[Webブラウザ]
    end
    
    subgraph Cloud [クラウドプラットフォーム]
        LoadBalancer[ロードバランサー]
        Server[アプリケーションサーバー]
        DB[(データベース)]
    end
    
    User -->|HTTPS| Browser
    Browser -->|リクエスト| LoadBalancer
    LoadBalancer -->|通信| Server
    Server -->|読み書き| DB





6. ローカル環境での起動手順
リポジトリを取得
plaintext
git clone https://github.com/goldokita0206-byte/slimeOS.git
cd slimeOS


開発環境に読み込み
Eclipse を起動 → ファイル > インポート > Gradle > 既存のGradleプロジェクト
クローンしたフォルダを選択し、自動ビルド完了まで待機
アプリケーション起動
SlimeosFinalApplication.java を右クリック
実行 > Spring Boot アプリケーション を選択
コンソールに「起動完了」のメッセージが表示されたら準備完了
ブラウザからアクセス
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



