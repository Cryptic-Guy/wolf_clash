// dailyquest.js
document.addEventListener('DOMContentLoaded', () => {
    const questElement = document.getElementById('daily-login-quest');
    const coinCountElement = document.getElementById('coin-count');
  
    const lastClaimKey = 'lastClaimDate';
    const claimInterval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const reward = 500;
  
    function updateQuestStatus() {
      const lastClaimDate = localStorage.getItem(lastClaimKey);
      const now = new Date().getTime();
  
      if (lastClaimDate && (now - lastClaimDate < claimInterval)) {
        questElement.style.backgroundColor = '#4CAF50'; // Green for claimed
        questElement.innerHTML = `<h2>Daily Login - Claimed</h2><p>Reward: ${reward} Coins</p>`;
        questElement.style.pointerEvents = 'none'; // Disable claiming
      } else {
        questElement.style.backgroundColor = '#333'; // Default color
        questElement.innerHTML = `<h2>Daily Login</h2><p>Reward: ${reward} Coins</p>`;
        questElement.style.pointerEvents = 'auto'; // Enable claiming
      }
    }
  
    // Initialize quest status
    updateQuestStatus();
  
    // Attach click event listener to the quest card
    questElement.addEventListener('click', () => {
      const lastClaimDate = localStorage.getItem(lastClaimKey);
      const now = new Date().getTime();
  
      if (!lastClaimDate || (now - lastClaimDate >= claimInterval)) {
        let currentCoins = parseInt(localStorage.getItem('coins')) || 0;
        localStorage.setItem('coins', currentCoins + reward);
        coinCountElement.textContent = localStorage.getItem('coins') || 0;
        localStorage.setItem(lastClaimKey, now);
        updateQuestStatus();
      }
    });
  });
  