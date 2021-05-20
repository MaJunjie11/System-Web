export const schema = {
  'type': 'page',
  'title': '',
  'body': [
    {
      'type': 'crud',
      'api': 'http://152.136.134.52:9090/teacher_get_audit_course',
      'columns': [
        {
          'type': 'text',
          'label': '课程名',
          'name': 'className'
        },
        {
          'type': 'text',
          'label': '所属专业',
          'name': 'courseMajor'
        },
        {
          'type': 'operation',
          'label': '操作',
          'buttons': [
            {
              'label': '详细信息',
              
              'actionType': 'dialog',
              'dialog': {
                'title': '课程详细信息',
                'body': {
                  'type': 'form',
                  'controls': [
                    {
                      'type': 'static',
                      'name': 'className',
                      'label': '课程名称',
                      'quickEdit': false,
                    },
                    {
                      'type': 'static',
                      'name': 'courseMajor',
                      'label': '所属专业',
                      'quickEdit': false,
                    },
                    {
                      'type': 'static',
                      'name': 'classCapacity',
                      'label': '课程容量',
                      'quickEdit': false,
                    },
                    {
                      'type': 'date',
                      'name': 'courseDate',
                      'label': '开课日期',
                      'quickEdit': false,
                    },
                    {
                      'type': 'textarea',
                      'name': 'courseIntroduce',
                      'label': '课程介绍',
                      'quickEdit': false,
                      'minRows': 4,
                      'maxRows': 20,
                    },
                    
                  ]
                }
              }

            }
          ]
        },

      ],
      'bulkActions': [
      ],
      'itemActions': [
      ],
      'features': [
        'delete'
      ],
      'messages': {
      },
      'loadDataOnce': true
    }
  ],
  'messages': {
  }
}