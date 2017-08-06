function add(numB ,numS) {
  // 实现该函数
  // return (parseInt(a)+parseInt(b)).toString()

    numB = numB.split("").reverse();
    numS = numS.split("").reverse();
    // 其中较大的赋值给numB 较小的给numS
    if(numB.length < numS.length){
        numB = [numS,numS = numB][0];
    }
    //设置一个临时值  用来存放上一位相加的进位
    var temp = 0,sum;
    // 循环大数做相加
    for (var i = 0; i < numB.length; i++) {
        sum = Number(numB[i]) + (Number(numS[i]) || 0 ) + temp;
        numB[i] = sum % 10;
        if(sum > 9){
            temp = 1;
        }else{
            temp = 0;
        }
    };
    //如果最后保留进位 放到数组尾部
    temp === 1 && numB.push(1)
    return numB.reverse().join("")
}

module.exports = add