console.log("It's working! It's working!!")


  const guitarD = document.getElementById('guitarD');
  guitarD.addEventListener('click', function() {
    const audio = new Audio ('./audio/d.mp3');
    audio.play();
  });


  const guitarA = document.getElementById('guitarA');
  guitarA.addEventListener('click', function() {
    const audio = new Audio ('./audio/a.mp3');
    audio.play();
  });

  const guitarE = document.getElementById('guitarE');
  guitarE.addEventListener('click', function() {
      const audio = new Audio ('./audio/e.mp3');
      audio.play();
    });

  const guitarG = document.getElementById('guitarG');
  guitarG.addEventListener('click', function() {
    const audio = new Audio ('./audio/g.mp3');
    audio.play();
  });

  const guitarB = document.getElementById('guitarB');
  guitarB.addEventListener('click', function() {
    const audio = new Audio ('./audio/b.mp3');
    audio.play();
  });

  const guitarHighE = document.getElementById('guitarHighE');
  guitarHighE.addEventListener('click', function() {
    const audio = new Audio ('./audio/high_e.mp3');
    audio.play();
  });



