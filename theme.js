const root = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');

//使っているダークモードに設定されているか？
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) {
    root.setAttribute('data-theme', 'dark');
    themeText.textContent = 'LIGHT MODE';
}
        
//getAttribute("属性名"): 指定した属性に現在セットされている値を文字列で取得
//setAttribute("属性名", "値"): 要素に新しい属性を追加
//removeAttribute("属性名"): 指定した属性そのものを消す
toggleBtn.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
        root.removeAttribute('data-theme');
        themeText.textContent = 'DARK';
    } else {
        root.setAttribute('data-theme', 'dark');
        themeText.textContent = 'LIGHT';
    }
});