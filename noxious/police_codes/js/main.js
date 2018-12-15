
$(document).ready(function () {
    let td = $('td');

    // let list = [0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29];

    let wait = 2;
    for (i=0;i<td.length;i++) {
        if (i%2 == 0) {
            if (wait === 2) {
                td[i].style.backgroundColor = 'rgba(100,100,100,.8)'; 
                td[i+1].style.backgroundColor = 'rgba(100,100,100,.8)'; 
                wait = 0;
            } else {
                wait += 2;
            }
        }
    }
});