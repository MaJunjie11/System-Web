export const schema = {
  'type': 'form',
  'title': '添加教室',
  'controls': [
    {
      'type': 'list',
      'label': '教室容纳人数',
      'name': 'roomCapacity',
      'options': [
        {
          'label': '50人',
          'value': '50'
        },
        {
          'label': '100人',
          'value': '100'
        },
        {
          'label': '150人',
          'value': '150'
        }
      ]
    },
    {
      'type': 'text',
      'name': 'roomAddr',
      'label': '地址',
      'placeholder': '请尽量控制在200字以内～'
    },
  ],
  'resetAfterSubmit': true,
  'redirect': '',
  'affixFooter': false,
  'panelClassName': 'Panel--success',
  'api': {
    'method': 'post',
    'url': 'http://152.136.134.52:9090/manager_add_room',
    'dataType': 'json'
  },
  'debug': false,
}