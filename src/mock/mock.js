import Mock from 'mockjs'

// 彩色模块
Mock.mock(/getTotalData/, {
	'errcode': 0,
	'errmsg': '错误信息',
  'res': {
  	"liushui": "137505.74",
  	"maoli": "87094.48",
  	"chengben": "11762.22",
  	"shishou": "98856.70"
  }
})

// 灰色模块
Mock.mock(/getYjWjDetails/, {
	'errcode': 0,
	'errmsg': '错误信息',
  'res': {
  	"wjamount": "1875.00",
  	"wjshuliang": 12,
  	"yjshuliang": 553
	}
})

// 营业详情
Mock.mock(/getBusiCondition/, {
	'errcode': 0,
	'errmsg': '错误信息',
  'res': {
    "ktl":"3.78",
    "wmds":54,
    "renjun":"63.77",
    "szl":"2.87",
    "rx":"17.57",
    "youmian":"36960.90",
    "px":"0.47",
    "wmdj":"0.08",
    "shishou":"98856.70",
    "zhuoshu":384,
    "keliu":1885,
    "zhuojun":"313.03"
  }
})

// 客人自助
Mock.mock(/getZzddDetails/, {
	'errcode': 0,
	'errmsg': '错误信息',
  'res': {
    "zzdd":0.0,
    "ddl":"0.00",
    "jsonArray":[]
  }
})
Mock.mock(/getZzjzDetails/, {
	'errcode': 0,
	'errmsg': '错误信息',
  'res': {
    "zzjz":2.0,
    "jzl":"0.45",
    "jsonArray":[
      {
        "jzc":"-66.22",
        "zhanbi":"100.00",
        "count":"2",
        "ognname":"中餐2店",
        "zzjzl":"66.67",
        "ognid":"4"
      }
    ]
  }
})

// 异常监控
Mock.mock(/getAbnormalDishes/, {
	'errcode': 0,
	'errmsg': '错误信息',
  'res': {
    "tuicai": "7367.53",
    "zengcai": "4275.58",
    "guqing": 3,
    "fanjie": 89
  }
})

// 菜品四象限
Mock.mock(/getDish4qDetails/, {
	'errcode': 0,
	'errmsg': '错误信息',
  'res': {
  	"mxcpArray": [{
  		"dishesname": "蒜香小龙虾（小）",
  		"xl": "3",
  		"lr": "558.00"
  	}, {
  		"dishesname": "嗨辣小龙虾（大）",
  		"xl": "4",
  		"lr": "512.00"
  	}, {
  		"dishesname": "极品毛血旺",
  		"xl": "5",
  		"lr": "440.00"
  	}],
  	"sgcpArray": [{
  		"dishesname": "辣酱鸭",
  		"xl": "2",
  		"lr": "70.00"
  	}, {
  		"dishesname": "旱地拔葱",
  		"xl": "1",
  		"lr": "14.50"
  	}, {
  		"dishesname": "什锦大拌菜",
  		"xl": "1",
  		"lr": "29.80"
  	}, {
  		"dishesname": "拌笋丝",
  		"xl": "1",
  		"lr": "20.00"
  	}, {
  		"dishesname": "张飞牛肉",
  		"xl": "2",
  		"lr": "55.60"
  	}, {
  		"dishesname": "蜜汁红萝卜",
  		"xl": "1",
  		"lr": "17.00"
  	}, {
  		"dishesname": "夫妻肺片",
  		"xl": "1",
  		"lr": "35.00"
  	}, {
  		"dishesname": "大碗菜",
  		"xl": "2",
  		"lr": "40.00"
  	}, {
  		"dishesname": "麻辣虾",
  		"xl": "1",
  		"lr": "88.00"
  	}, {
  		"dishesname": "麻辣馋嘴蛙",
  		"xl": "1",
  		"lr": "88.80"
  	}, {
  		"dishesname": "干锅鸭头",
  		"xl": "2",
  		"lr": "130.00"
  	}, {
  		"dishesname": "宫保虾球",
  		"xl": "1",
  		"lr": "88.00"
  	}, {
  		"dishesname": "嗨辣小龙虾（小）",
  		"xl": "1",
  		"lr": "78.00"
  	}, {
  		"dishesname": "香锅毛肚",
  		"xl": "2",
  		"lr": "130.00"
  	}],
  	"jncpArray": [],
  	"jncp": 0,
  	"lrArray": [{
  		"lr": "70.00"
  	}, {
  		"lr": "90.00"
  	}, {
  		"lr": "150.00"
  	}, {
  		"lr": "14.50"
  	}, {
  		"lr": "161.00"
  	}, {
  		"lr": "64.00"
  	}, {
  		"lr": "29.80"
  	}, {
  		"lr": "20.00"
  	}, {
  		"lr": "55.60"
  	}, {
  		"lr": "17.00"
  	}, {
  		"lr": "35.00"
  	}, {
  		"lr": "40.00"
  	}, {
  		"lr": "558.00"
  	}, {
  		"lr": "512.00"
  	}, {
  		"lr": "88.00"
  	}, {
  		"lr": "440.00"
  	}, {
  		"lr": "88.80"
  	}, {
  		"lr": "130.00"
  	}, {
  		"lr": "88.00"
  	}, {
  		"lr": "78.00"
  	}, {
  		"lr": "130.00"
  	}, {
  		"lr": "275.20"
  	}],
  	"sgcp": 14,
  	"xlArray": [{
  		"xl": "2"
  	}, {
  		"xl": "6"
  	}, {
  		"xl": "5"
  	}, {
  		"xl": "1"
  	}, {
  		"xl": "7"
  	}, {
  		"xl": "4"
  	}, {
  		"xl": "1"
  	}, {
  		"xl": "1"
  	}, {
  		"xl": "2"
  	}, {
  		"xl": "1"
  	}, {
  		"xl": "1"
  	}, {
  		"xl": "2"
  	}, {
  		"xl": "3"
  	}, {
  		"xl": "4"
  	}, {
  		"xl": "1"
  	}, {
  		"xl": "5"
  	}, {
  		"xl": "1"
  	}, {
  		"xl": "2"
  	}, {
  		"xl": "1"
  	}, {
  		"xl": "1"
  	}, {
  		"xl": "2"
  	}, {
  		"xl": "4"
  	}],
  	"wtcpArray": [{
  		"dishesname": "山楂糕",
  		"xl": "6",
  		"lr": "90.00"
  	}, {
  		"dishesname": "青瓜鹅肝",
  		"xl": "5",
  		"lr": "150.00"
  	}, {
  		"dishesname": "鲜椒鹅肠",
  		"xl": "7",
  		"lr": "161.00"
  	}, {
  		"dishesname": "酸辣蕨根粉",
  		"xl": "4",
  		"lr": "64.00"
  	}, {
  		"dishesname": "菜园坝仔姜鸭",
  		"xl": "4",
  		"lr": "275.20"
  	}],
  	"mxcp": 3,
  	"wtcp": 5
  }
})

// 堂食客人构成
Mock.mock(/getCustomerComposition/, {
	'errcode': 0,
	'errmsg': '错误信息',
  'res': {
    "hyjezhanbi": "0.00",
  	"pkddzhanbi": "100.00",
  	"hyddzhanbi": "0.00",
  	"pkjezhanbi": "100.00"
  }
})

// 业务构成
Mock.mock(/getBusiComposition/, {
	'errcode': 0,
	'errmsg': '错误信息',
  'res': {
    "tsddzhanbi": "100.00",
  	"tsjezhanbi": "100.00",
  	"wmddzhanbi": "0.00",
  	"wmjezhanbi": "0.00"
  }
})

// echart 数据
Mock.mock(/getTotalChartData/, {
	'errcode': 0,
	'errmsg': '错误信息',
  'res': {
    "shishou3last": ["303727.84", "252355.98", "242479.86", "191125.89", "181820.05", "214123.47", "226231.09", "292053.51", "258563.34", "198229.99", "220541.02", "248771.51", "216764.02", "230928.2", "292023.48", "300468.66", "184140.5", "214479.52", "223824.2", "212539.35", "251471.01", "363012.32", "245379.92", "218223.66", "232375.94", "233533.18", "230197.37", "330662.86", "289181.09", "293362.3"],
  	"shishou3": ["640.0", "1541.5", "1390.0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  	"member": ["0.0", "47.0", "22.0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  	"memberlast": ["3483.0", "3219.0", "2962.0", "1926.0", "500.0", "2335.0", "2520.0", "3050.0", "3260.0", "2403.0", "2577.0", "2951.0", "2270.0", "2624.0", "3422.0", "3692.0", "1983.0", "2438.0", "2654.0", "2341.0", "2766.0", "4296.0", "2864.0", "2466.0", "2467.0", "2498.0", "2646.0", "3656.0", "3299.0", "3476.0"],
  	"day": ["4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10", "4.11", "4.12", "4.13", "4.14", "4.15", "4.16", "4.17", "4.18", "4.19", "4.20", "4.21", "4.22", "4.23", "4.24", "4.25", "4.26", "4.27", "4.28", "4.29", "4.30"],
  	"jsonArray": ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
  }
})
