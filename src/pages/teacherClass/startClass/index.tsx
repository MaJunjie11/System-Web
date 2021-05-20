
export const schema = {
  'type': 'page',
  'title': '',
  'body': [
    {
      'type': 'crud',
      'api': 'http://152.136.134.52:9090/teacher_get_start_course',
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
                      'name': 'courseId',
                      'label': '课程ID',
                      'quickEdit': false,
                    },

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
                      'type': 'static',
                      'name': 'classStudentNum',
                      'label': '报名人数',
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
                      'type': 'static',
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
          'label': '查看学生',
          'buttons': [
            {
              'label': '查看',

              'actionType': 'dialog',
              'dialog': {
                'title': '学生信息',
                'body': [
                  {
                    'type': 'crud',
                    'api': {
                      'method': 'post',
                      'url': 'http://152.136.134.52:9090/get_course_student',
                      'dataType': 'json',
                      'data': {
                        'courseId': '${courseId}'
                      }
                    },
                    'columns': [
                      {
                        'name': 'uuid',
                        'label': '学号',
                        'type': 'text'
                      },
                      {
                        'name': 'name',
                        'label': '姓名',
                        'type': 'text'
                      },



                    ],
                    'bulkActions': [
                    ],
                    'itemActions': [
                    ]
                  }
                ]
              },
            },
          ]
        },

        {
          'type': 'operation',
          'label': '结课',
          'buttons': [
            {
              'type': 'submit',
              'label': '点击结课',
              'actionType': 'ajax',
              // "visibleOn": "${teacher_name}!==\"\"",
              'api': {
                'method': 'post',
                'url': 'http://152.136.134.52:9090//teacher_end_course',
                'dataType': 'json',
                'data': {
                  'courseId': '${courseId}'
                }
              }
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