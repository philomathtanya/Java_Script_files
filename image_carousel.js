var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var images = document.querySelector(".carousel").children;
totalimages = images.length;
var index = 0;
prev.addEventListener('click', () => {
    nextimage('prev');
});
next.addEventListener('click', () => {
    nextimage('next');
});

function nextimage(direction)
{
    if (direction == "next")
    {
        index++;
        if (index == totalimages)
        {
            index = 0;
        }
        
    }
    else {
        
        if (index == 0)
        {
            index = totalimages-1;
        }
        else {
            index--;
        }
    }

for (let i = 0; i < totalimages; i++)
{
    images[i].classList.remove('main');
}
    images[index].classList.add('main');
}
function autoMove() {
    setInterval(() => {
      nextimage("next");
    }, 3000);
  }

  window.onload = autoMove;