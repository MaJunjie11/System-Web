export const schema = {
  'type': 'page',
  'title': '',
  'body': [
    {
      'type': 'crud',
      'api': 'http://152.136.134.52:9090/manager_get_audit_course',
      'columns': [
        {
          'type': 'text',
          'label': '课程名',
          'name': 'className'
        },
        {
          'type': 'text',
          'label': '申请人名',
          'name': 'name'
        },
        {
          'type': 'text',
          'label': '申请人工号',
          'name': 'Uuid'
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
                'title': '申请信息',
                'body': {
                  'type': 'form',
                  'controls': [
                    {
                      'type': 'static',
                      'name': 'courseId',
                      'label': '课程Id',
                      'quickEdit': false,
                    },
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
                      'type': 'static',
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


        

        {
          'type': 'operation',
          'label': '通过',
          'buttons': [
            {
              'label': '通过',

              'actionType': 'dialog',
              'dialog': {
                'title': '请为课程分配对应的实验室地址',
                'body': [
                  {
                    'type': 'form',
                    'api': {
                      'method': 'post',
                      'url': 'http://152.136.134.52:9090/manager_audit_down_course',
                      'dataType': 'json',
                      'data': {
                        'courseId': '${courseId}',
                        'courseAddr': '${courseAddr}',
                      }
                    },
                    'controls': [
                      {
                        'label': '选项',
                        'type': 'select',
                        'name': 'courseAddr',
                        'source':'http://152.136.134.52:9090/manager_get_use_room'
                      },
                    ]
                  }
                ]
              },
            },
          ]
        },



        {
          'type': 'operation',
          'label': '拒绝',
          'buttons': [
            {
              'label': '拒绝',

              'actionType': 'dialog',
              'dialog': {
                'title': '请输入拒绝的理由，方便老师再次申请',
                'body': [
                  {
                    'type': 'form',
                    'api': {
                      'method': 'post',
                      'url': 'http://152.136.134.52:9090/manager_audit_refuse_course',
                      'dataType': 'json',
                      'data': {
                        'courseId': '${courseId}',
                        'refuseReason': '${refuseReason}',
                      }
                    },
                    'controls': [
                      {
                        'label': '理由',
                        'type': 'text',
                        'name': 'refuseReason'
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