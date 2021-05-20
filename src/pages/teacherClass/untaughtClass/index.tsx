
export const schema = {
  'type': 'page',
  'title': '',
  'body': [
    {
      'type': 'crud',
      'api': 'http://152.136.134.52:9090/teacher_get_untaught_course',
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
                      {
                        'type': 'operation',
                        'label': '操作',
                        'buttons': [
                          {
                            'type': 'submit',
                            'label': '踢出课程',
                            'actionType': 'ajax',
                            'dialog': {
                              'title': '系统提示',
                              'body': '对你点击了'
                            },
                            'api': {
                              'method': 'post',
                              'url': 'http://152.136.134.52:9090/teacher_feet_student',
                              'dataType': 'json',
                              'data': {
                                'courseId': '${courseId}',
                                'uid':'${uid}',
                              }
                            }
                          }
                        ]
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
          'label': '等待审核',
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
                      'url': 'http://152.136.134.52:9090/get_audit_course_student',
                      'dataType': 'json',
                      'data': {
                        'courseId': '${courseId}'
                      },
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
                      {
                        'type': 'operation',
                        'label': '操作',
                        'buttons': [
                          {
                            'type': 'submit',
                            'label': '通过申请',
                            'actionType': 'ajax',
                            'dialog': {
                              'title': '系统提示',
                              'body': '对你点击了'
                            },
                            'api': {
                              'method': 'post',
                              'url': 'http://152.136.134.52:9090/teacher_audit_student',
                              'dataType': 'json',
                              'data': {
                                'courseId': '${courseId}',
                                'uid': '${uid}',
                              }
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
                            'label': '拒绝',
                            'actionType': 'ajax',
                            'dialog': {
                              'title': '系统提示',
                              'body': '对你点击了'
                            },
                            'api': {
                              'method': 'post',
                              'url': 'http://152.136.134.52:9090/teacher_feet_student',
                              'dataType': 'json',
                              'data': {
                                'courseId': '${courseId}',
                                'uid': '${uid}',
                              }
                            }
                          }
                        ]
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

                    'api': {
                      'method': 'post',
                      'url': 'http://152.136.134.52:9090/teacher_add_student',
                      'dataType': 'json',
                      'data': {
                        'courseId':'${courseId}',
                        'uuid':'${uuid}',
                      }
                    },
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



        {
          'type': 'operation',
          'label': '开课',
          'buttons': [
            {
              'type': 'submit',
              'label': '点击开课',
              'actionType': 'ajax',
              // "visibleOn": "${teacher_name}!==\"\"",
              'api': {
                'method': 'post',
                'url': 'http://152.136.134.52:9090//teacher_start_course',
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