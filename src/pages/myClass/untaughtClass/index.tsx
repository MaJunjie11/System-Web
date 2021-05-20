export const schema = {
  'type': 'page',
  'title': '',
  'body': [
    {
      'type': 'crud',
      'api': 'http://152.136.134.52:9090/student_get_untaught_course',
      'columns': [
        {
          'type': 'text',
          'label': '课程Id',
          'name': 'courseId'
        },
        {
          'name': 'className',
          'label': '课程名称',
          'type': 'text'
        },
        {
          'name': 'teacherName',
          'label': '老师',
          'type': 'text'
        },
        {
          'type': 'text',
          'label': '学生数',
          'name': 'classStudentNum'
        },

        {
          'type': 'text',
          'label': '容量',
          'name': 'classCapacity'
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
                      'name': 'courseAddr',
                      'label': '上课地点',
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
          'label': '操作',
          'buttons': [
            {
              'type': 'submit',
              'label': '退出课程',
              'actionType': 'ajax',
              'dialog': {
                'title': '系统提示',
                'body': '对你点击了'
              },
              'api': {
                'method': 'post',
                'url': 'http://152.136.134.52:9090/student_feet_course',
                'dataType': 'json',
                'data': {
                  'courseId': '${courseId}'
                }
              }
            }
          ]
        }
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