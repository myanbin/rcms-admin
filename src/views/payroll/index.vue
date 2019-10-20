<template>
<div id="payroll">
  <div class="table-operator">
    <a-button type="primary" icon="plus">上传工资</a-button>
    <a-button>删除工资</a-button>
    <a-select defaultValue="201906" :style="{ width: '150px', float: 'right' }" @change="handleChange">
      <a-select-option value="201906">2019年6月工资</a-select-option>
      <a-select-option value="201907">2019年7月工资</a-select-option>
      <a-select-option value="201908">2019年8月工资</a-select-option>
    </a-select>
  </div>
  <a-table :columns="columns" :dataSource="data" :rowKey="record => record.id"></a-table>
</div>
</template>

<script>
const data = [
  {
    id: 1,
    name: '王小虎',
    dateOfSalary: '201906',
    idNumber: '1101199001012019',
    plannedShouldSalary: 3249.00,
    plannedWouldSalary: 3249.00,
    unplannedShouldSalary: 6593.00,
    unplannedWouldSalary: 6513.00
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
    title: '发放时间',
    dataIndex: 'dateOfSalary',
    width: '12%',
    scopedSlots: { customRender: 'dateOfSalary' }
  },
  {
    title: '社保（统筹内）工资',
    children: [
      {
        title: '应发工资',
        dataIndex: 'plannedShouldSalary',
        width: '12%'
      },
      {
        title: '实发工资',
        dataIndex: 'plannedWouldSalary',
        width: '12%'
      }
    ]
  },
  {
    title: '社内（统筹外）工资',
    children: [
      {
        title: '应发工资',
        dataIndex: 'unplannedShouldSalary',
        width: '12%'
      },
      {
        title: '实发工资',
        dataIndex: 'unplannedWouldSalary',
        width: '12%'
      }
    ]
  }
]

export default {
  name: 'payroll',
  data: () => {
    return {
      columns,
      data
    }
  },
  methods: {
    handleChange (date) {
      console.log('you select', date)
    }
  }
}
</script>
