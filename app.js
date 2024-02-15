const container = document.querySelector('.bars');
let bars = [];

function generateBars(numBars, maxHeight) {
  container.innerHTML = ''; // Clear previous bars
  for (let i = 0; i < numBars; i++) {
    const height = Math.floor(Math.random() * maxHeight) + 20;
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${height}px`;
    container.appendChild(bar);
    bars.push(bar);
  }
}

async function selectionSort() {
  const n = bars.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    bars[i].style.backgroundColor = 'red';

    for (let j = i + 1; j < n; j++) {
      bars[j].style.backgroundColor = 'red';
      await new Promise(resolve => setTimeout(resolve, 50));

      const height1 = parseInt(bars[minIndex].style.height);
      const height2 = parseInt(bars[j].style.height);

      if (height2 < height1) {
        if (minIndex !== i) {
          bars[minIndex].style.backgroundColor = 'dodgerblue';
        }
        minIndex = j;
      } else {
        bars[j].style.backgroundColor = 'dodgerblue';
      }
    }

    const temp = bars[minIndex].style.height;
    bars[minIndex].style.height = bars[i].style.height;
    bars[i].style.height = temp;

    bars[i].style.backgroundColor = 'green';
  }
}

function startSorting() {
  const numBars = parseInt(document.getElementById('numBars').value);
  const maxHeight = parseInt(document.getElementById('maxHeight').value);
  generateBars(numBars, maxHeight);
  selectionSort();
}
