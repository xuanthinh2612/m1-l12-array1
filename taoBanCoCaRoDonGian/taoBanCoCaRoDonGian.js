let chessbattle = [];
let matrix = '';
for (let i = 0; i < 5; i++) {
    chessbattle[i] = [0, 0, 0, 0, 0];
}
for (let i = 0; i < 5; i++) {
    matrix = matrix + '<br>';
    for (j = 0; j < 5; j++) {
        matrix = matrix+ chessbattle[i][j] + '&nbsp&nbsp';
    }
}
document.getElementById('input').innerHTML = matrix;
function carochess() {
    let positionx  = +prompt('Nhập vị trí cần thay đổi: X');
    let positiony  = +prompt('Nhập vị trí cần thay đổi: Y');
    chessbattle[positionx][positiony] = 'x';
    matrix=''
    for (i = 0; i < 5; i++) {
        matrix = matrix + '<br>'
        for (j = 0; j < 5; j++) {
            matrix = matrix + chessbattle[i][j] + '&nbsp&nbsp'
        }
    }
    document.getElementById('input').innerHTML = matrix;

}