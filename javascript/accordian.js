const accordian = document.getElementsByClassName('course');

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}