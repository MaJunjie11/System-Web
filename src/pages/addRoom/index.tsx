export const schema = {
  'type': 'form',
  'title': '添加课程',
  'controls': [
    {
      'label': '课程名',
      'type': 'text',
      'name': 'className'
    },
    {
      'type': 'date',
      'label': '开课日期',
      'name': 'courseDate'
    },
    {
      'type': 'list',
      'label': '课程最大报名学生数',
      'name': 'classCapacity',
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
      'type': 'select',
      'label': '所属专业',
      'name': 'courseMajor',
      'options': [
        {
          'label': '物理专业',
          'value': '物理'
        },
        {
          'label': '数学专业',
          'value': '数学'
        },
        {
          'label': '软件工程专业',
          'value': '软件工程'
        },
        {
          'label': '计算机科学与技术',
          'value': '计算机科学与技术'
        },
        {
          'label': '网络工程专业',
          'value': '网络工程'
        },
        {
          'label': '电信专业',
          'value': '电信'
        }
      ],
      'mode': 'inline',
      'checkAll': false
    },
    {
      'type': 'textarea',
      'name': 'courseIntroduce',
      'label': '课程简介',
      'minRows': 4,
      'maxRows': 20,
      'placeholder': '请尽量控制在200字以内～'
    },
    {
      'label': '审核人工号',
      'type': 'text',
      'name': 'managerUuid',
      'placeholder': '请联系管理员获取其工号，请填写正确的工号，否则将创建失败'
    },
  ],
  'resetAfterSubmit': true,
  'redirect': '',
  'affixFooter': false,
  'panelClassName': 'Panel--success',
  'api': {
    'method': 'post',
    'url': 'http://152.136.134.52:9090/teacher_add_course',
    'dataType': 'json'
  },
  'debug': false,
}