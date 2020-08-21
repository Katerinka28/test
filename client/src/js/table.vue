<template>
  <table class="table">
    <thead class="table__head">
      <slot name='table-head' :fields='fields'>
        <tr class="table__tr" > 
          <th class="table__th" v-for='(label, index) in labels' :key='index'> 
            <slot :name='slotName("table-head-cell", label)'>
              <slot name='table-head-cell'> {{ label }} </slot>
            </slot>  
          </th>
        </tr>
      </slot>  
    </thead>
    <tbody class="table__body">
      <slot v-for='(item, index) in items'
            :key='index'
            :field='item'> 
        <tr class="table__tr" :key='index+items.length'>
          <td class="table__td">   
             <slot :name='slotName("table-body-cell", item)'>
              <slot name='table-head-cell' :item='item'> {{ item }} </slot>
            </slot> 
          </td>
        </tr>
      </slot>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'table',
  props: {
    fields: Array,
    items: Array,
  },
  methods: {
    slotName(prefix, value) {
      return `${prefix}-${value}`
    },
  }

}
</script>
