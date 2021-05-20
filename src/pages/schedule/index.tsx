export const schema = {
  'type': 'page',
  'title': '',
  'body': [
      {
          'type': 'alert',
          'body': {
              'type': 'tpl',
              'tpl': '可选课程展示',
              'inline': false
          },
          'level': 'info'
      },
      {
          'type': 'divider'
      },
      {
          'type': 'cards',
          /*
          "data": {
              "items": [
                  {
                      "a": 1,
                      "b": 2
                  },
                  {
                      "a": 3,
                      "b": 4
                  },
                  {
                      "a": 5,
                      "b": 6
                  }
              ]
          },
          */
          'columnsCount': 3,
          'card': {
              'type': 'card',
              'className': 'm-b-none',
              'header': {
                  'title': '${item.className}',
                  'subTitle': '${item.classStudentNum}',
                  'avatar': '${item.classPictureUrl}',
                  'desc': ''
              },
              'body': [
                  {
                      'name': 'a',
                      'label': '',
                      'inline': true,
                      'tpl': '${item.className}课程'
                  },
                  {
                      'name': 'b',
                      'label': '',
                      'inline': true,
                      'tpl': '${item.classStudentNum}人数'
                  }
              ],
              'actions': [
                  {
                      'label': '加入课程',
                      'type': 'button'
                  }
              ]
          },
          'placeholder': '暂无数据',
          'title': '可选实验室',
          'source': '${items}'
      }
  ],
  'messages': {
  },
  'aside': [
  ]
}