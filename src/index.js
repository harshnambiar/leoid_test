import { getLeoId } from "leoid";


async function createId() {
    const a1 = 'aleo1vgdqhep7fpflj0yslgv05nflv7xdh5sexfvqpe6qav5g56x86grsr8l8m8';
    const a2 = 'aleo1zjk0syd9jfkedc2tjklhcfc4qqmnyep3v393twywuya08yh4dgzq8wx8jd';
    const c = 3;
    const id = getLeoId(a1, a2, c);
    console.log(id);    
    document.getElementById('result').textContent = 'The leo ID generated is: '.concat(id);
}
window.createId = createId;


