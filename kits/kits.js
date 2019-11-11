var kits = {};


//生成[min,max]区间的随机整数
kits.randomInt = function (n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}


// 生成RGB随机颜色
kits.randomRGB = function () {
    function randomInt(n, m) {
        return Math.floor(Math.random() * (m - n + 1) + n);
    }
    // 生成3个随机整数
    var r = randomInt(0, 255);
    var g = randomInt(0, 255);
    var b = randomInt(0, 255);
    // 把三个随机整数拼接到rgb格式里面
    var color = 'rgb(' + r + ',' + g + ',' + b + ')';
    return color;
}

// 生成16进制的随机颜色
kits.randomColor = function () {
    function randomInt(n, m) {
        return Math.floor(Math.random() * (m - n + 1) + n);
    }
    var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var color = '#' + arr[kits.randomInt(0,15)] + arr[kits.randomInt(0,15)] + arr[kits.randomInt(0,15)] + arr[kits.randomInt(0,15)] + arr[kits.randomInt(0,15)] + arr[kits.randomInt(0,15)];
    return color;
}