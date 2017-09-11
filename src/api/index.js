import axios from 'axios';
const HOST = '/api';
const HOST1 = '/yixi';
/** 
* 豆瓣图书api详细信息
* https://developers.douban.com/wiki/?title=book_v2
* 演讲数据api
* http://api.yixi.tv/api/v1/album
* 推荐使用chrome安装JSONview插件查看获取的接口数据
*/
// 获取豆瓣图书接口数据
export function fetch(url) {
    return new Promise((resolve, reject) => {
        axios.get(HOST + url)
            .then(res => {
                resolve(res.data);
            })
    })
}
// 获取演讲接口的数据
export function fetchYi(url) {
    return new Promise((resolve, reject) => {
        axios.get(HOST1 + url)
            .then(res => {
                resolve(res.data);
                // console.log('原始获取数据为');
                // console.log(res.data);
            })
    })
}
// 获取书籍列表（豆瓣图书api接口没有获取top250等接口）这里模拟搜索python关键字获取书籍信息
export function fetchManyBook(q='python') {
    return fetchSearchBook(q);
}
// 获取指定id书籍详细信息
export function fetchBookById(id) {
    return fetch(`/book/${id}?fields=title,images,author,tags,author_intro,summary,publisher,translator,price`);
}
// 获取搜索书籍列表
export function fetchSearchBook(q) {
    let url = encodeURI(`/book/search?q=${q}&count=50`);
    return fetch(url);
}
// 获取演讲列表的数据
export function fetchYiData() {
    let url = encodeURI('/album');
    return fetchYi(url);
}