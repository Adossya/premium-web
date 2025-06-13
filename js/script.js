window.addEventListener("DOMContentLoaded", () => {

const promoLine = document.querySelector('.promo__line');
const specialLine = document.querySelector('.special__line');

    function handleMouseMove(e) {

        if (window.innerWidth < 640) {

            promoLine.style.transform = '';
            specialLine.style.transform = '';
            return;
        }

        const rect = promoLine.getBoundingClientRect();
        const rectSpecial = specialLine.getBoundingClientRect();

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const offsetX = -((mouseX - rect.left) - rect.width / 2) * 0.01; 
        const offsetY = -((mouseY - rect.top) - rect.height / 2) * 0.005;

        promoLine.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        specialLine.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }

 
    document.addEventListener('mousemove', handleMouseMove);

    
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 640) {
            document.addEventListener('mousemove', handleMouseMove);
        } else {

            document.removeEventListener('mousemove', handleMouseMove);

            promoLine.style.transform = '';
            specialLine.style.transform = '';
        }
    });



    function getFormattedDate(date) {
        const options = { day: 'numeric', month: 'long' };
        return date.toLocaleDateString('ru-Ru', options);
    }

    function updateDateButton() {
    const now = new Date();
    const hour = now.getHours();

        if (hour >= 19) {
            now.setDate(now.getDate() + 1);
        }

    const formattedDate = getFormattedDate(now);

    const headerDate = document.getElementById('day');

        if (headerDate) {
            headerDate.textContent = `${formattedDate} в 19.00 gmt+3 `;
        }
    }

    updateDateButton();

});