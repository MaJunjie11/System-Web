export const schema = {
  'type': 'page',
  'title': '',
  'body': [
    {
      'type': 'button',
      'label': '开启选课通道',
      'actionType': 'ajax',
      'dialog': {
        'title': '系统提示',
        'body': '对你点击了'
      },
      'api': {
        'method': 'get',
        'url': 'http://152.136.134.52:9090/manager_open_select_course',
        'dataType': 'json'
      }
    },
    {
      'type': 'button',
      'label': '关闭选课通道',
      'actionType': 'ajax',
      'dialog': {
        'title': '系统提示',
        'body': '对你点击了'
      },
      'api': {
        'method': 'get',
        'url': 'http://152.136.134.52:9090/manager_close_select_course',
        'dataType': 'json'
      }
    }
  ],
  'messages': {}
}