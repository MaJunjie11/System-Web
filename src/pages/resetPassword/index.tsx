export const schema = {
  'type': 'form',
  'title': '重置密码',
  'controls': [
    {
      'label': '请输入工号/学号',
      'type': 'text',
      'name': 'uuid'
    },
  ],
  'resetAfterSubmit': true,
  'redirect': '',
  'affixFooter': false,
  'panelClassName': 'Panel--success',
  'api': {
    'method': 'post',
    'url': 'http://152.136.134.52:9090/manager_reset_password',
    'dataType': 'json'
  },
  'debug': false,
}