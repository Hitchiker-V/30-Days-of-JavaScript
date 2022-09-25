// window.addEventListener('keydown', function(e) {
//     // console.log(e.keyCode)
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     console.log(key);
//     // console.log(audio);
//     // When we press a key, that div with class key and key code of the pressed on get's selected 
//     // and we change the key to playing class that we define in css
//     key.classList.add('playing');
//     if (!audio) return;
//     // Reseting the playing element to start time
//     audio.currentTime = 0;
//     audio.play()
// });

// When the above is implemented, the transition of playing class still there and doesn't fade
// We need to fade it

// Let's define a playSound()
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play()
}

// Let's define a removeTransition()
function removeTransition(e){
    // run this once to have any idea of eventlistener properties
    // console.log(e)
    // Checking if they key hasn't transformed i.e not in the defined key
    if(e.propertyName!== 'transform') return; // A number of things transformed so we narrow it down to only the property of transform
    e.target.classList.remove('playing')
}
const keys = Array.from(document.querySelectorAll('.keys'));
// you can listen to a Node list or array all at once. You must only listen to one element of it, hence the forEach parsing
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)

// const a = ['65', '0', '0', '0', '65', '68', '72']
// a.forEach(el => playSound(el));