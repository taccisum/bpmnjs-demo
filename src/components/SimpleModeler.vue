<template>
  <div class="content">
    <div id='canvas'></div>
  </div>
</template>

<script>
import xml from '../../resources/diagram.bpmn'
import BpmnModeler from 'bpmn-js/lib/Modeler'
// 这两个css是必须import的
import style from 'bpmn-js/dist/assets/diagram-js.css' // eslint-disable-line no-unused-vars
import icons from 'bpmn-font/dist/css/bpmn-embedded.css' // eslint-disable-line no-unused-vars

export default {
  name: 'SimpleModeler',
  mounted () {
    // 创建bpmn modeler实例，指定container
    var modeler = new BpmnModeler({
      container: '#canvas'
    })

    // 导入xml进行渲染
    modeler.importXML(xml, function (err) {
      if (!err) {
        console.log('load bpmn diagram success!')
        modeler.get('canvas').zoom('fit-viewport')
      } else {
        console.log('something went wrong:', err)
      }
    })
  }
}
</script>

<style scoped src='../assets/bpmn-demo.css'></style>
