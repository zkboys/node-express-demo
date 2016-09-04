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

    function rn(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }

    function getRNData() {
        var arr = [0, rn(0, 5), 0, rn(0, 5), rn(0, 5), 0, 0];
        arr.sort(function () {
            return 0.5 - Math.random()
        })
        return arr;
    }

    var data = {
        nextCursor: 1, // 滚动加载，是否有下一页的标记以及后端查询下一页的开始条件, 0 表示没有下一页了。
        result: [
            {
                name: startDate,
                data: getRNData()
            },
            {
                name: endDate,
                data: getRNData()
            },
            {
                name: company,
                data: getRNData()
            },
            {
                name: '张三',
                data: getRNData()
            },
            {
                name: '李四',
                data: getRNData()
            },
            {
                name: '王五',
                data: getRNData()
            },
            {
                name: '张三',
                data: getRNData()
            },
            {
                name: '李四',
                data: getRNData()
            },
            {
                name: '王五',
                data: getRNData()
            },
            {
                name: '张三',
                data: getRNData()
            },
            {
                name: '李四',
                data: getRNData()
            },
            {
                name: '王五',
                data: getRNData()
            },
            {
                name: '张三',
                data: getRNData()
            },
            {
                name: '李四',
                data: getRNData()
            },
            {
                name: '王五',
                data: getRNData()
            },
            {
                name: '张三',
                data: getRNData()
            },
            {
                name: '李四',
                data: getRNData()
            },
            {
                name: '王五',
                data: getRNData()
            },
            {
                name: '张三',
                data: getRNData()
            },
            {
                name: '李四',
                data: getRNData()
            },
            {
                name: '王五',
                data: getRNData()
            },
            {
                name: '张三',
                data: getRNData()
            },
            {
                name: '李四',
                data: getRNData()
            },
            {
                name: '王五',
                data: getRNData()
            },
            {
                name: '张三',
                data: getRNData()
            },
            {
                name: '李四',
                data: getRNData()
            },
            {
                name: '王五',
                data: getRNData()
            }, {
                name: '张三',
                data: getRNData()
            },
            {
                name: '李四',
                data: getRNData()
            },
            {
                name: '王五',
                data: getRNData()
            },
            {
                name: '张三',
                data: getRNData()
            },
            {
                name: '李四',
                data: getRNData()
            },
            {
                name: '王五',
                data: getRNData()
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
