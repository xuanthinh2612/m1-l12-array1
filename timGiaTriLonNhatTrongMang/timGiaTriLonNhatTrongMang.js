function findmax() {
    let arr1 = [-3, 5, 10, 1, 3, 2]
    let max = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (max <= arr1[i]) {
            max = arr1[i];
        }
    }
    console.log(max);
}