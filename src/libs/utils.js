/**
 * 
 * @param {Object} obj
 * @returns {Boolean} obj.length is a number and its value between 0 and Math.pow(2, 53) - 1. 
 */
export function isArrayLike(obj) {
    let length = property('length')(obj);
    return typeof length == 'number' &&  length >= 0 && length < Math.pow(2, 53) - 1;
}
/**
 * 
 * @param {string} key 
 * @returns {Function} a function return a object's property
 */
export function property(key) {
    return function(obj) {
        return obj == null ? void 0 : obj[key];
    }
}
/**
 * 
 * @param {Object} obj 
 * @returns {Boolean} if obj's property equal to 0;
 */
export function isEmptyObject(obj) {
    if (obj == null) return true;
    return Object.keys(obj).length === 0;
}
/**
 * 
 * @returns {Number} document hiding height
 */
export function getScrollTop() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}
/**
 * 
 * @param {Number} val 
 */
export function setScrollTop(val) {
    // 设置document被卷起的像素距离为制定值
    document.documentElement.scrollTop = document.body.scrollTop = val;
}
/**
 * 
 * @returns {Number} a value of document inner height.
 */
export function getClientHeight() {
    return document.documentElement.clientHeight || document.body.clientHeight;
}
/**
 * 
 * @param {string} ele 
 * @returns {Array} a array include all of ele's siblings node.
 */
export function siblings(ele) {
    // 定义空的数组来保存所有相邻结点
    let siblings = [];
    // 将该元素的父结点的所有子元素(children只包括元素结点)转为数组
    let childrens = Array.from(ele.parentNode.children);
    // 获取所有子元素个数
    let len = childrens.length;
    for (let children of childrens){
        // 节点类型为元素结点且不等于该结点且标签名相同保存到数组中
        if (children.nodeType === 1 && children !== ele && children.tagName === ele.tagName) {
            siblings.push(children);
        }
    }
    // 返回该数组
    return siblings;
}
/**
 * 
 * @param {string} el 
 * @param {Boolean} includeMargin 
 * @returns {Number} if includeMargin = true, el's height include el's margin
 */
export function outerHeight(el, includeMargin) {
    // 获取el的offsetHeight
    let height = el.offsetHeight;
    // 如果includeMargin值为true, 则高度包含外边距
    if (includeMargin) {
        // 获取计算后的样式
        let style = getComputedStyle(el) || el.currentStyle;
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    }
    // 返回获得的高度
    return height;
}
/**
 * 
 * @param {string} el 
 * @param {Number} Height 
 */
export function setHeight(el, Height) {
    el.style.height = Height + 'px';
}

/**
*
* @param {Function} fn    实际要执行的函数
* @param {Number} delay  延迟时间，也就是阈值，单位是毫秒（ms）
*
* @return {Function}     返回一个防抖动的函数
*/
export function debounce(fn, delay) {
    let timer;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    }
  }