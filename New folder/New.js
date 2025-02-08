function handleChoice(choice) {
    document.querySelectorAll('.container').forEach(container => {
      container.style.display = 'none';
    });
  
    if (choice === 'no') {
      document.getElementById('wrong').style.display = 'flex';
    } else if (choice === 'yes') {
      showFinalPage();
    }
  }
  
  function showFinalPage() {
    document.getElementById('final').style.display = 'flex';
    document.getElementById('romantic-music').play();
  
    for (let i = 0; i < 50; i++) {
      createHeart();
    }
  }
  
  function showPoemPage() {
    document.querySelectorAll('.container').forEach(container => {
      container.style.display = 'none';
    });
    document.getElementById('poem').style.display = 'flex';
  }
  
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
  
    document.getElementById('hearts-container').appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }