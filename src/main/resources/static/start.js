const progressFill = document.getElementById("progressFill");
const percentText = document.getElementById("percent");
const statusText = document.getElementById("statusText");
// ✅ スライム要素を取得
const mainSlime = document.querySelector(".main-slime");

let progress = 0;
let bootCompleted = false; // 起動完了フラグ

function startBoot() {
    const timer = setInterval(() => {
        // 自然な速度で進捗
        progress += Math.random() * 2.5 + 0.8;

        if (progress >= 100) {
            progress = 100;
            clearInterval(timer);
            // 起動完了表示
            setTimeout(() => {
                statusText.innerHTML = "スライムOSへようこそ！";
                percentText.textContent = "";
                bootCompleted = true; // 起動完了にする

                // ✅ 起動完了後、数秒待って自動的にindex8.htmlへ移動
                setTimeout(() => {
                    window.location.href = "index8.html";
                }, 1500); // 1.5秒後に遷移
            }, 600);
        }

        // 表示更新
        progressFill.style.width = `${progress}%`;
        percentText.textContent = `${Math.floor(progress)}%`;

    }, 120);
}

// ✅ スライムをクリックしたらindex8.htmlへ移動する処理を追加
mainSlime.addEventListener("click", () => {
    // 起動完了前でもクリックしたらすぐ移動、または完了後のみ移動のどちらでもOK
    if (bootCompleted || progress > 70) {
        window.location.href = "index8.html";
    } else {
        // 途中でクリックした場合のメッセージ例
        statusText.textContent = "起動中です... もう少しお待ちください";
    }
});

window.addEventListener("load", startBoot);


