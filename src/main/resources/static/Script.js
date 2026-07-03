document.addEventListener('DOMContentLoaded', () => {
    // 1. 要素の取得
    const startButton = document.getElementById('startButton');
    const startMenu = document.getElementById('startMenu');
    const notepadBtn = document.getElementById('notepad-btn');
    const notepadWindow = document.getElementById('notepad-window');
    const notepadFrame = document.getElementById('notepad-frame');
    const clockElement = document.getElementById('clock');

    // 2. メニュー開閉処理
    startButton.addEventListener('click', () => {
        if (startMenu.classList.contains('opacity-0')) {
            startMenu.classList.remove('opacity-0', 'scale-95');
            startMenu.classList.add('opacity-100', 'scale-100');
        } else {
            startMenu.classList.add('opacity-0', 'scale-95');
            startMenu.classList.remove('opacity-100', 'scale-100');
        }
    });

    // 3. メモ帳の起動・終了
    if (notepadBtn) {
        notepadBtn.addEventListener('click', () => {
            notepadFrame.src = 'notepad.html'; // 表示したいHTMLを指定
            notepadWindow.style.display = 'block';
            startMenu.classList.add('opacity-0', 'scale-95');
        });
    }

    // 4. 時計更新（1秒ごと）
    function updateClock() {
        if (clockElement) {
            clockElement.textContent = new Date().toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });
        }
    }
    setInterval(updateClock, 1000);
    updateClock();
});

// 5. 閉じる関数（グローバルに公開）
function closeNotepad() {
    document.getElementById('notepad-window').style.display = 'none';
}

// ==============================================
// フォルダ・アプリ起動用：統合された関数
// ==============================================
function openOfficeWindow() {
    // 1. メニューを閉じる
    const startMenu = document.getElementById('startMenu');
    if (startMenu) startMenu.classList.remove('show');

    // 2. ウィンドウを取得
    const win = document.getElementById('fileManagerWindow');
    const frame = document.getElementById('fileManagerFrame');
    
    // 3. 表示したいファイルを指定してウィンドウを表示
    if (win && frame) {
        frame.src = 'index3.html'; // ここで統一
        win.classList.add('show');
    }
}

// 閉じる関数
function closeFileManager() {
    const win = document.getElementById('fileManagerWindow');
    const frame = document.getElementById('fileManagerFrame');
    if (win) win.classList.remove('show');
    if (frame) frame.src = ''; 
}