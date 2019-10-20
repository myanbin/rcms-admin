<template>
<div id="person">
  <div class="table-operator">
    <a-button type="primary" icon="plus">新增人员</a-button>
  </div>
  <a-table :columns="columns" :dataSource="data" :rowKey="record => record.id">
    <template slot="gender" slot-scope="gender">
      {{ gender === 'M' ? '男': '女' }}
    </template>
    <template slot="dateOfRetire" slot-scope="dateOfRetire">
      {{ dateOfRetire | date }}
    </template>
    <template slot="action" slot-scope="action, record">
      <a @click="editPerson(record)">编辑</a>
      <a-divider type="vertical" />
      <a @click="deletePerson(record)">删除</a>
    </template>
  </a-table>
</div>
</template>

<script>
const data = [
  {
    id: 1,
    name: '王小虎',
    gender: 'M',
    dateOfRetire: '2007-02-13T00:00:00.000Z',
    department: '通信技术局',
    idNumber: '1101199001012019'
  }
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: '12%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '性别',
    dataIndex: 'gender',
    width: '8%',
    scopedSlots: { customRender: 'gender' }
  },
  {
    title: '退休时间',
    dataIndex: 'dateOfRetire',
    width: '12%',
    scopedSlots: { customRender: 'dateOfRetire' }
  },
  {
    title: '所属部门',
    dataIndex: 'department'
  },
  {
    title: '身份证号',
    dataIndex: 'idNumber'
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '18%',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  name: 'person',
  data: () => {
    return {
      columns,
      data
    }
  },
  methods: {
    editPerson (record) {
      console.log('you edit', record.name)
    },
    deletePerson (record) {
      console.log('you delete', record.name)
    }
  },
  filters: {
    date (value) {
      return value.split('T')[0]
    }
  }
}
</script>
