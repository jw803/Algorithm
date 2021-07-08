const MAX_LEVEL = 16;

 class Node {
     constructor({
         data = -1,
         maxLevel = 0,
         refer = new Array(MAX_LEVEL)
     } = {}) {
         // data屬性存放了每個節點的數據
         this.data = data;
         // maxLevel屬性表明了當前節點處於整個跳表索引的級數
         this.maxLevel = maxLevel;
         // refer是一個有著MAX_LEVEL大小的數組，refer屬性存放著很多個索引
         // 如果用p表示當前節點，用level表示這個節點處於整個跳表索引的級數；那麽p[level]表示在level這一層級p節點的下一個節點
         // p[level-n]表示level級下面n級的節點
         this.refer = refer
     }
 }
 
 class SkipList {
     constructor() {
         // head屬性是一個Node類的實例，指向整個鏈表的開始
         this.head = new Node();
         // levelCount屬性表示了當前跳表索引的總共級數
         this.levelCount = 1;
     }
     // 在跳里面插入數據的時候，隨機生成索引的級數
     randomLevel() {
         let level = 1;
         for (let i = 1; i < MAX_LEVEL; i++) {
             if (Math.random() < 0.5) {
                 level++;
             }
         }
         return level;
     }
 
     /**
   * 向跳表裡面插入數據
   * @param value
   */
     insert(value) {
         const level = this.randomLevel();
         const newNode = new Node();
         newNode.data = value;
         newNode.maxLevel = level;
         const update = new Array(level).fill(new Node());
         let p = this.head;
         for (let i = level - 1; i >= 0; i--) {
             while (p.refer[i] !== undefined && p.refer[i].data < value) {
                 p = p.refer[i];
             }
             update[i] = p;
         }
         for (let i = 0; i < level; i++) {
             newNode.refer[i] = update[i].refer[i];
             update[i].refer[i] = newNode;
         }
         if (this.levelCount < level) {
             this.levelCount = level;
         }
     }
 
     find(value) {
         if (!value) { return null }
         let p = this.head;
         for (let i = this.levelCount - 1; i >= 0; i--) {
             while (p.refer[i] !== undefined && p.refer[i].data < value) {
                 p = p.refer[i];
             }
         }
 
         if (p.refer[0] !== undefined && p.refer[0].data === value) {
             return p.refer[0];
         }
         return null;
     }
 
     remove(value) {
         let _node;
         let p = this.head;
         const update = new Array(new Node());
         for (let i = this.levelCount - 1; i >= 0; i--) {
             while (p.refer[i] !== undefined && p.refer[i].data < value) {
                 p = p.refer[i];
             }
             update[i] = p;
         }
 
         if (p.refer[0] !== undefined && p.refer[0].data === value) {
             _node = p.refer[0];
             for (let i = 0; i <= this.levelCount - 1; i++) {
                 if (update[i].refer[i] !== undefined && update[i].refer[i].data === value) {
                     update[i].refer[i] = update[i].refer[i].refer[i];
                 }
             }
             return _node;
         }
         return null;
     }
 
     printAll() {
         let p = this.head;
         while (p.refer[0] !== undefined) {
             console.log(p.refer[0].data)
             p = p.refer[0];
         }
     }
 }
 
 test();
 function test() {
     let list = new SkipList();
     let length = 20000;
     //順序插入
     for (let i = 1; i <= 10; i++) {
         list.insert(i);
     }
     //輸出一次
     list.printAll();
     console.time('create length-10')
     //插入剩下的
     for (let i = 11; i <= length - 10; i++) {
         list.insert(i);
     }
     console.timeEnd('create length-10')
     //搜索 10次
     for (let j = 0; j < 10; j++) {
         let key = Math.floor(Math.random() * length + 1);
         console.log(key, list.find(key))
     }
     //搜索不存在的值
     console.log('null:', list.find(length + 1));
     //搜索5000次統計時間
     console.time('search 5000');
     for (let j = 0; j < 5000; j++) {
         let key = Math.floor(Math.random() * length + 1);
     }
     console.timeEnd('search 5000');
 }
 
 