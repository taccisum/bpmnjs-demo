<template>
  <div class="content">
    <!-- <div id='canvas' style='display: none;'></div> -->
    <div id='canvas'></div>
    <div id="btns">
      <button @click="saveDiagram()">save diagram</button>
    </div>
  </div>
</template>

<script>
import xml from '../../resources/diagram.bpmn'
import BpmnModeler from 'bpmn-js/lib/Modeler'
// 这两个css是必须import的
import style from 'bpmn-js/dist/assets/diagram-js.css' // eslint-disable-line no-unused-vars
import icons from 'bpmn-font/dist/css/bpmn-embedded.css' // eslint-disable-line no-unused-vars

var modeler

export default {
  name: 'Save',
  methods: {
    saveDiagram () {
      modeler.saveXML({ format: true }, function (err, xml) {
        if (err) {
          alert('error! please check on console.')
          console.log(err)
        }
        alert('success! please copy diagram content on console.')
        console.log(xml)
      })
    }
  },
  mounted () {
    // 创建bpmn modeler实例，指定container
    modeler = new BpmnModeler({
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

<style src='../assets/bpmn-demo.css'/>
<style>
#canvas {
  height: 90%;
  margin-bottom: 20px;
}
</style>
