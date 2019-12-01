class Tab {
    constructor(options) {
        options = options || {};
        this.itemClass = options.itemClass || '.item';
        this.eventType = options.eventType || 'mouseover';
        this.itemClassName = options.itemClassName || 'active';
        this.contentClass = options.contentClass || '.content';
        this.contentShowClass = options.contentShowClass || 'show';
        // 获取元素
        this.items = document.querySelectorAll(this.itemClass);
        this.contents = document.querySelectorAll(this.contentClass);

        // 必然new了之后要有效果，需要调用addEvent方法实现
        this.addEvent();
    }

    // 注册事件的方法
    addEvent() {
        this.items.forEach((e, i) => {
            e.addEventListener(this.eventType, e => {
                let target = e.target;//这个是点击的item
                // 切换分类
                this.changeItems(target);
                // 切换内容
                this.changeContent(i)
            })
        })
    }

    // 切换分类
    changeItems(current) {
        this.items.forEach(e => {
            e.classList.remove(this.itemClassName);
        })
        current.classList.add(this.itemClassName)
    }

    // 切换内容
    changeContent(index) {
        // 把所有的内容隐藏
        this.contents.forEach(e => {
            e.classList.remove(this.contentShowClass);
        })
        // 把对应的内容显示
        this.contents[index].classList.add(this.contentShowClass);
    }
}


class AutoTab extends Tab {
    constructor(options) {
        // 继承后一定要写super方法才能实现继承
        super(options);
        options = options || {};
        this.interval = options.interval || 1500;
    }
    autoRun() {
        let currentIndex = 0;
        this.timer = setInterval(() => {
            // 切换到下一个分类
            currentIndex++;
            // 当索引太大时将重置为0
            currentIndex %= 3;
            // 切换分类
            this.changeItems(this.items[currentIndex]);
            // 切换内容
            this.changeContent(currentIndex);
        }, this.interval);
    }
}
