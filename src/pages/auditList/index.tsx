
export const schema = {
  'type': 'page',
  'title': '',
  'body': [
    {
      'type': 'crud',
      'api': 'http://152.136.134.52:9090/teacher_get_course',
      'columns': [

        {
          'type': 'text',
          'name': 'courseId',
          'label': '课程ID',
          'quickEdit': false,
        },
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
          'label': '详情',
          'buttons': [
            {
              'label': '详细信息',

              'actionType': 'dialog',
              'dialog': {
                'title': '课程详细信息',
                'body': [{
                  'type': 'form',
                  'controls': [
                    
                    {
                      'type': 'static',
                      'name': 'className',
                      'label': '课程名称',
                      'quickEdit': false,
                    },
                    {
                      'type': 'divider'
                    },
                    {
                      'type': 'static',
                      'name': 'courseMajor',
                      'label': '所属专业',
                      'quickEdit': false,
                    },
                    {
                      'type': 'divider'
                    },
                    {
                      'type': 'static',
                      'name': 'classCapacity',
                      'label': '课程容量',
                      'quickEdit': false,
                    },
                    {
                      'type': 'divider'
                    },
                    {
                      'type': 'date',
                      'name': 'courseDate',
                      'label': '开课日期',
                      'quickEdit': false,
                    },
                    {
                      'type': 'divider'
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
                },
                ]
              }

            }
          ]
        },



        





        {
          'type': 'operation',
          'label': '添加学生',
          'buttons': [
            {
              'label': '添加',

              'actionType': 'dialog',
              'dialog': {
                'title': '请输入学生学号',
                'body': [
                  {
                    'type': 'form',
                    'controls': [
                      {
                        'label': '学生学号',
                        'type': 'text',
                        'name': 'uuid'
                      }
                    ]
                  }
                ]
              },
            },
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