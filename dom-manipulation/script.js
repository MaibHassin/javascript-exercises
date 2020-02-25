const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redPara = document.createElement('p');
redPara.classList.add('red-para');
redPara.textContent = 'Hey I\'m red!';
redPara.style.color = 'red';

container.appendChild(redPara);

const blueHeading = document.createElement('h3');
blueHeading.classList.add('blue-heading');
blueHeading.textContent = 'I\'m blue h3!';
blueHeading.style.color = 'blue';

container.appendChild(blueHeading);

const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pink-div');
pinkDiv.style.border = '1px solid black';
pinkDiv.style.background = 'pink';


const pinkDivHeading = document.createElement('h1');
pinkDivHeading.classList.add('pink-div-heading');
pinkDivHeading.textContent = 'I\'m in a div';

pinkDiv.appendChild(pinkDivHeading);

const pinkDivParagraph = document.createElement('p');
pinkDivParagraph.classList.add('pink-div-paragraph');
pinkDivParagraph.textContent = 'ME TOO!';

pinkDiv.appendChild(pinkDivParagraph);

container.appendChild(pinkDiv);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");


const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

document.querySelector('#btn3').addEventListener('click', function (e) {
    e.target.style.background = 'blue';
    console.log(e);
    
  });