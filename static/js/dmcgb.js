window.HELP_IMPROVE_VIDEOJS = false;

// DMC Tabs
const wordListDMC = ['walk', 'stand', 'run', 'spin', 'swingup', 'catch']; 
function switchTabDMC(tabNumber) {
  const videoElements = document.getElementById('dmc-vids').querySelectorAll('.tab-pane video');
  
  videoElements.forEach((video) => {
    const currentSrc = video.src;
    const newSrc = wordListDMC.reduce((acc, word, index) => {
      if (currentSrc.includes(word)) {
        return acc.replace(word, wordListDMC[tabNumber-1]);
      }
      return acc;
    }, currentSrc);
    video.src = newSrc;
  });

  const tabs = document.getElementById('dmc-tabs').querySelectorAll('.tab');
  tabs.forEach((tab, index) => {
    if (index === tabNumber - 1) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}


// Metaworld Tabs
const wordListMW = ['door', 'peg', 'sweep', 'basket', 'push']; 
function switchTabMW(tabNumber) {
  const videoElements = document.getElementById('mw-vids').querySelectorAll('.tab-pane video');
  
  videoElements.forEach((video) => {
    const currentSrc = video.src;
    const newSrc = wordListMW.reduce((acc, word, index) => {
      if (currentSrc.includes(word)) {
        return acc.replace(word, wordListMW[tabNumber-1]);
      }
      return acc;
    }, currentSrc);
    video.src = newSrc;
  });


  const tabs = document.getElementById('mw-tabs').querySelectorAll('.tab');
  tabs.forEach((tab, index) => {
    if (index === tabNumber - 1) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}

