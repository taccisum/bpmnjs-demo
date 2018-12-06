<template>
  <div>
    <div class="content">
      <div id='canvas'></div>
      <div class="properties-panel-parent" id="js-properties-panel"></div>
    </div>
    <div>
      <button @click="saveDiagram()">save diagram</button>
    </div>
  </div>
</template>

<script>
import xml from '../../resources/diagram.bpmn'
import BpmnModeler from 'bpmn-js/lib/Modeler'
import propertiesPanelModule from 'bpmn-js-properties-panel'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda'
// 这两个css是必须import的
import style from 'bpmn-js/dist/assets/diagram-js.css' // eslint-disable-line no-unused-vars
import icons from 'bpmn-font/dist/css/bpmn-embedded.css' // eslint-disable-line no-unused-vars

var modeler

export default {
  name: 'PropertiesPanel',
  data () {
    return {
      home: false
    }
  },
  methods: {
    saveDiagram () {
      modeler.saveXML({ format: true }, function (err, xml) {
        if (err) {
          alert('error! please check info on console.')
          console.log(err)
        }
        alert('success! please copy diagram content on console.')
        // 仅做演示，所以只简单地打印到控制台
        // 可以在这里做一些更友好的操作，比如导出文件之类的
        console.log(xml)
      })
    }
  },
  mounted () {
    // 创建bpmn modeler实例，指定container
    modeler = new BpmnModeler({
      container: '#canvas',
      propertiesPanel: {
        parent: '#js-properties-panel'
      },
      additionalModules: [
        propertiesPanelModule,
        propertiesProviderModule
      ],
      moddleExtensions: {
        camunda: camundaModdleDescriptor
      }
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

    window.a = modeler
  }
}
</script>

<style src='bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css'></style>
<style scoped src='../assets/bpmn-demo.css'></style>

<style scoped lang="less">
.properties-panel-parent {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 260px;
  z-index: 10;
  border-left: 1px solid #ccc;
  overflow: auto;
  &:empty {
    display: none;
  }
  > .djs-properties-panel {
    padding-bottom: 70px;
    min-height:100%;
  }
}
</style>
