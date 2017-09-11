
export function isArrayLike(obj) {
    let length = property('length')(obj);
    return typeof length == 'number' &&  length >= 0 && length < Math.pow(2, 53) - 1;
}
export function property(key) {
    return function(obj) {
        return obj == null ? void 0 : obj[key];
    }
}
export function isEmptyObject(obj) {
    if (obj == null) return true;
    return Object.keys(obj).length === 0;
}

export function getScrollTop() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}
export function setScrollTop(val) {
    document.documentElement.scrollTop = document.body.scrollTop = val;
}
export function getClientHeight() {
    return document.documentElement.clientHeight || document.body.clientHeight;
}

export function siblings(ele) {
    let siblings = [];
    let childrens = Array.prototype.slice.call(ele.parentNode.children);
    let len = childrens.length;
    for (let children of childrens){
        if (children.nodeType === 1 && children !== ele && children.tagName === ele.tagName) {
            siblings.push(children);
        }
    }
    return siblings;
}

export function outerHeight(el, includeMargin) {
    let height = el.offsetHeight;
    if (includeMargin) {
        let style = getComputedStyle(el) || el.currentStyle;
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    }
    return height;
}

export function setHeight(el, Height) {
    el.style.height = Height + 'px';
}

/**
*
* @param fn {Function}   实际要执行的函数
* @param delay {Number}  延迟时间，也就是阈值，单位是毫秒（ms）
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