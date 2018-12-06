<template>
  <div class="content">
    <div id='canvas'></div>
  </div>
</template>

<script>
import xml from '../../resources/diagram.bpmn'
import BpmnViewer from 'bpmn-js'

export default {
  name: 'SimpleViewer',
  data () {
    return {
    }
  },
  mounted () {
    var viewer = new BpmnViewer({
      container: '#canvas'
    })

    viewer.importXML(xml, function (err) {
      if (!err) {
        console.log('success!')
        viewer.get('canvas').zoom('fit-viewport')
      } else {
        console.log('something went wrong:', err)
      }
    })
  }
}
</script>

<style scoped src='../assets/bpmn-demo.css'></style>

<style scoped>
.content {
  height: 500px;
}
</style>

