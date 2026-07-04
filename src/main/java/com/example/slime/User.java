package com.example.slime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity                  // JPAのエンティティであることを宣言
@Table(name = "users")   // 対応するデータベースのテーブル名を指定
public class User {

    @Id                  // 主キーとして設定
    private String username;
    private String password;

    // JPAが必須とする引数なしのコンストラクタ
    public User() {}

    // 全フィールドを初期化するコンストラクタ（任意だが便利）
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // ゲッターとセッター
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
