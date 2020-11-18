function findElement() {
    let studentList = ['tran van a', 'tran van b', 'tran van c', 'tran van d', 'tran van e', 'tran van f',
        'tran van g', 'tran van h', 'tran van i', 'tran van k', 'tran van l'];
    let a = document.getElementById('input').value;
    let i;
    for ( i = 0; i < studentList.length; i++) {
        if (a == studentList[i]) {
            console.log('Index Number: ' + i + '   Ho va ten: ' + a);
            break;
        }
    }
    if (i == studentList.length) {
        alert('Khong tim thay trong danh sach');
    }

}