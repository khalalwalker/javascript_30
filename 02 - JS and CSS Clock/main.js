const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setHand(hand, degrees) {
    hand.style.transform = `rotate(${degrees}deg)`;
}

setInterval ( () => {
    const date = new Date();

    setHand( minuteHand, 6 * date.getMinutes() );
    setHand( secondHand, 6 * date.getSeconds() );
    setHand( hourHand, 30 * date.getHours() + date.getMinutes() * 0.5 ); // the getMinutes function moves the hour hand 1/30 of the way to the next number. If not, the clock will be on a whole number for the whole hour
}, 1000);