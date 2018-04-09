let localhostDev = true
let _host= localhostDev ? 'http://192.168.1.102:8080' : '/pzcatering-web/crmwx/api.do?method='
let httpUrl = {
  'getYjWjDetails': _host + 'getYjWjDetails',
  'getTotalData': _host + 'getTotalData',
  'getBusiCondition': _host + 'getBusiCondition',
  'getZzddDetails': _host + 'getZzddDetails',
  'getZzjzDetails': _host + 'getZzjzDetails',
  'getAbnormalDishes': _host + 'getAbnormalDishes',
  'getDish4qDetails': _host + 'getDish4qDetails',
  'getCustomerComposition': _host + 'getCustomerComposition',
  'getBusiComposition': _host + 'getBusiComposition',
  'getTotalChartData': _host + 'getTotalChartData'
}
export default httpUrl
