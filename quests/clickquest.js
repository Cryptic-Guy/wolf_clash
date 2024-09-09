// clickquest.js
document.addEventListener('DOMContentLoaded', () => {
    const tap100Element = document.getElementById('tap-100-times-quest');
    const tap500Element = document.getElementById('tap-500-times-quest');
    const coinCountElement = document.getElementById('coin-count');

    // Track clicks and rewards
    const clickCounts = {
        tap100: 100,
        tap500: 500
    };
    const rewards = {
        tap100: 250,
        tap500: 500
    };
    const colors = {
        default: '#333', // Default color
        claimed: '#4CAF50' // Green color for claimed
    };

    function updateQuestStatus() {
        const clicks = parseInt(localStorage.getItem('clicks')) || 0;

        // Update Tap 100 Times quest
        if (clicks >= clickCounts.tap100) {
            tap100Element.style.backgroundColor = colors.claimed;
            tap100Element.innerHTML = `<h2>Tap 100 Times - Claimed</h2><p>Reward: ${rewards.tap100} Coins</p>`;
            tap100Element.style.pointerEvents = 'none'; // Disable claiming
        } else {
            tap100Element.style.backgroundColor = colors.default;
            tap100Element.innerHTML = `<h2>Tap 100 Times</h2><p>Reward: ${rewards.tap100} Coins</p>`;
            tap100Element.style.pointerEvents = 'auto'; // Enable claiming
        }

        // Update Tap 500 Times quest
        if (clicks >= clickCounts.tap500) {
            tap500Element.style.backgroundColor = colors.claimed;
            tap500Element.innerHTML = `<h2>Tap 500 Times - Claimed</h2><p>Reward: ${rewards.tap500} Coins</p>`;
            tap500Element.style.pointerEvents = 'none'; // Disable claiming
        } else {
            tap500Element.style.backgroundColor = colors.default;
            tap500Element.innerHTML = `<h2>Tap 500 Times</h2><p>Reward: ${rewards.tap500} Coins</p>`;
            tap500Element.style.pointerEvents = 'auto'; // Enable claiming
        }
    }

    // Initialize quest status
    updateQuestStatus();

    // Attach click event listener to quest cards
    tap100Element.addEventListener('click', () => {
        const clicks = parseInt(localStorage.getItem('clicks')) || 0;
        if (clicks >= clickCounts.tap100) {
            let currentCoins = parseInt(localStorage.getItem('coins')) || 0;
            localStorage.setItem('coins', currentCoins + rewards.tap100);
            coinCountElement.textContent = localStorage.getItem('coins') || 0;
            updateQuestStatus();
        }
    });

    tap500Element.addEventListener('click', () => {
        const clicks = parseInt(localStorage.getItem('clicks')) || 0;
        if (clicks >= clickCounts.tap500) {
            let currentCoins = parseInt(localStorage.getItem('coins')) || 0;
            localStorage.setItem('coins', currentCoins + rewards.tap500);
            coinCountElement.textContent = localStorage.getItem('coins') || 0;
            updateQuestStatus();
        }
    });
});

  