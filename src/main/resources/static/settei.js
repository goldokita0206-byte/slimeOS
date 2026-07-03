document.addEventListener('DOMContentLoaded', () => {
    // グリッドアイテムをクリックした時の動作
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('h3').innerText;
            alert(`${title} 設定を開きます（シミュレーション）`);
        });
    });

    // 検索入力の処理
    const searchInput = document.querySelector('.search-section input');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            console.log('検索中:', searchInput.value);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            // 光るエフェクトを付与
            item.classList.add('active');
            
            // 0.5秒後に光る演出を消す
            setTimeout(() => item.classList.remove('active'), 500);
            
            const title = item.querySelector('h3').innerText;
            console.log(`${title} の森へ移動中...`);
        });
    });
});
