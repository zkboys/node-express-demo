/*
 * 路由映射文件,配置越靠前，优先级越高
 * */
var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index.html');
});
router.get('/test-ajax', function (req, res, next) {
    console.log(req.query.name);
    console.log(req.query.age);

    res.send([
        {'name': '王小水', age: 12},
        {'name': '李小水', age: 12}
    ]);
});

router.get('/data.json', function (req, res, next) {
    var company = req.query.company;
    var startDate = req.query.startDate;
    var endDate = req.query.endDate;
    var nextCursor = req.query.nextCursor;
    // TODO 根据条件查询数据
    var data = {
        nextCursor: 1, // 滚动加载，是否有下一页的标记以及后端查询下一页的开始条件, 0 表示没有下一页了。
        result: [
            {
                name: '张三',
                data: [0, 1, 2, 3, 4, 5, 1]
            },
            {
                name: '李四',
                data: [0, 0, 1, 0, 2, 0, 3]
            },
            {
                name: '王五',
                data: [0, 3, 1, 0, 0, 1, 0]
            },
            {
                name: '张三',
                data: [0, 1, 2, 3, 0, 0, 1]
            },
            {
                name: '李四',
                data: [0, 0, 1, 0, 2, 0, 3]
            },
            {
                name: '王五',
                data: [0, 3, 1, 0, 0, 1, 0]
            },
            {
                name: '张三',
                data: [0, 1, 2, 3, 0, 0, 1]
            },
            {
                name: '李四',
                data: [0, 0, 1, 0, 2, 0, 3]
            },
            {
                name: '王五',
                data: [0, 3, 1, 0, 0, 1, 0]
            },
            {
                name: '张三',
                data: [0, 1, 2, 3, 0, 0, 1]
            },
            {
                name: '李四',
                data: [0, 0, 1, 0, 2, 0, 3]
            },
            {
                name: '王五',
                data: [0, 3, 1, 0, 0, 1, 0]
            },
            {
                name: '张三',
                data: [0, 1, 2, 3, 0, 0, 1]
            },
            {
                name: '李四',
                data: [0, 0, 1, 0, 2, 0, 3]
            },
            {
                name: '王五',
                data: [0, 3, 1, 0, 0, 1, 0]
            },
            {
                name: '张三',
                data: [0, 1, 2, 3, 0, 0, 1]
            },
            {
                name: '李四',
                data: [0, 0, 1, 0, 2, 0, 3]
            },
            {
                name: '王五',
                data: [0, 3, 1, 0, 0, 1, 0]
            },
            {
                name: '张三',
                data: [0, 1, 2, 3, 0, 0, 1]
            },
            {
                name: '李四',
                data: [0, 0, 1, 0, 2, 0, 3]
            },
            {
                name: '王五',
                data: [0, 3, 1, 0, 0, 1, 0]
            },
            {
                name: '张三',
                data: [0, 1, 2, 3, 0, 0, 1]
            },
            {
                name: '李四',
                data: [0, 0, 1, 0, 2, 0, 3]
            },
            {
                name: '王五',
                data: [0, 3, 1, 0, 0, 1, 0]
            },
            {
                name: '张三',
                data: [0, 1, 2, 3, 0, 0, 1]
            },
            {
                name: '李四',
                data: [0, 0, 1, 0, 2, 0, 3]
            },
            {
                name: '王五',
                data: [0, 3, 1, 0, 0, 1, 0]
            }, {
                name: '张三',
                data: [0, 1, 2, 3, 0, 0, 1]
            },
            {
                name: '李四',
                data: [0, 0, 1, 0, 2, 0, 3]
            },
            {
                name: '王五',
                data: [0, 3, 1, 0, 0, 1, 0]
            },
            {
                name: '张三',
                data: [0, 1, 2, 3, 0, 0, 1]
            },
            {
                name: '李四',
                data: [0, 0, 1, 0, 2, 0, 3]
            },
            {
                name: '王五',
                data: [0, 3, 1, 0, 0, 1, 0]
            },
        ]
    };
    if (company === 'shanghai') {
        res.send({nextCursor: 0, result: []});
    } else {
        res.send(data);
    }
});
module.exports = router;
