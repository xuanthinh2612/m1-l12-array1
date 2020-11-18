let arr1 = [-3, 5, 1, 3, 2, 10]
document.write('arr1: ' + arr1 + '<br>');

function reverse() {
    let arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        let a = arr1[arr1.length - (i + 1)];
        arr2.push(a);
    }
    console.log(arr2);
}
