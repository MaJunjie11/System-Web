export const schema ={
    'type': 'page',
    'title': '',
    'body': [
        {
            'type': 'crud',
            'api': 'http://152.136.134.52:9090/student_get_add_course_list',
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
                    'label': '操作',
                    'buttons': [
                        {
                            'type': 'submit',
                            'label': '加入课程',
                            'actionType': 'ajax',
                            'dialog': {
                                'title': '系统提示',
                                'body': '对你点击了'
                            },
                            'api': {
                              'method': 'post',
                              'url': 'http://152.136.134.52:9090/student_add_course',
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