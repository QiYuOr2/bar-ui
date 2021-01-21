<template>
  <div class="example-container">
    <bar-header
      title="演示页"
      sub-title="项目尚未正式发布"
      scroll-target="#container"
      left-text="返回"
      @click-left.prevent.stop="handleClick"
      :left-arrow="true"
      fixed
    >
      <template #right>
        <bar-dropdown
          button-title="导航"
          button-type="primary"
          :button-shadow="false"
          :show-icon="false"
        >
          <bar-item
            :class="['anchor', { active: active === index }]"
            type="dropdown"
            v-for="(item, index) in [
              '加载图标',
              '其他图标',
              '按钮组件',
              '输入框组件',
              '单选框组件',
              '多选框组件',
              '选择器组件',
              '开关组件',
              '多行输入框组件',
              '警告提示组件',
              '页头组件',
              '分割线组件',
              '下拉菜单组件',
              '轻提示组件',
              '折叠面板组件',
              '模态框组件',
              '标签栏组件',
              '无限滚动组件',
              '卡片组件',
            ]"
            :key="index"
            @click="scrollTo(index + 1)"
          >
            {{ item }}
          </bar-item>
        </bar-dropdown>
      </template>
    </bar-header>

    <bar-section title="加载图标">
      <bar-icon name="loading" size="lg" />
      <bar-icon name="loading" />
      <bar-icon name="loading" size="sm" />
    </bar-section>
    <bar-section title="其他图标">
      <bar-icon name="left" size="sm" />
      <bar-icon name="down" size="sm" />
      <bar-icon name="up" size="sm" />
      <bar-icon name="right" size="sm" />
      <bar-icon name="heart" size="sm" />
      <bar-icon name="success" size="sm" />
      <bar-icon name="info" size="sm" />
      <bar-icon name="warn" size="sm" />
      <bar-icon name="error" size="sm" />
      <bar-icon name="close" size="sm" />
    </bar-section>
    <bar-section title="按钮组件">
      <bar-button>default按钮</bar-button>
      <bar-button type="primary">primary按钮</bar-button>
      <bar-button disabled @click="handleClick">禁用按钮</bar-button>
      <bar-button loading>loading按钮</bar-button>
      <bar-button type="warn">warn按钮</bar-button>
      <bar-button type="danger">danger按钮</bar-button>
      <bar-button type="link">link按钮</bar-button>
      <bar-button type="text">text按钮</bar-button>
      <bar-button size="lg">large按钮</bar-button>
      <bar-button type="primary" size="sm">small按钮</bar-button>
      <bar-button type="primary" size="sm" shape="circle">圆</bar-button>
      <bar-button type="primary" size="sm" shape="round">圆角</bar-button>
      <bar-button type="future">future按钮</bar-button>
      <bar-button block @click="handleClick">block按钮</bar-button>
      <bar-button block shape="round" @click="handleClick2">
        block round按钮
      </bar-button>
    </bar-section>
    <bar-section title="输入框组件">
      <bar-input
        v-model="input"
        placeholder="请输入文本，可以加icon"
        prefix-icon="success"
        suffix-icon="error"
      />
      <bar-input placeholder="只能输入数字" type="number">
        <template #prefix>你好</template>
      </bar-input>
      <bar-input placeholder="请输入密码" type="password">
        <template #suffix>不准偷看</template>
      </bar-input>
      <bar-input placeholder="有错误" has-fail />
      <bar-input placeholder="不可用" disabled />
      <bar-input placeholder="只读" readonly />
      <bar-input placeholder="行内输入框" inline />
    </bar-section>
    <bar-section title="单选框组件">
      <bar-button @click="changeRadio" size="sm">切换</bar-button>
      <span>已选：{{ radioValue }}</span>
      <bar-radio-group name="test" v-model="radioValue" @change="radioChange">
        <bar-radio :value="1" @click="handleClick2">鸡肉</bar-radio>
        <bar-radio :value="2">猪肉</bar-radio>
        <bar-radio :value="3">羊肉</bar-radio>
      </bar-radio-group>
      <bar-radio-group name="test2" mode="vertical">
        <bar-radio value="5" disabled>苹果</bar-radio>
        <bar-radio value="6" disabled checked>梨</bar-radio>
      </bar-radio-group>
    </bar-section>
    <bar-section title="多选框组件">
      <bar-button @click="clearCheckbox" size="sm" inline>清空</bar-button>
      <bar-checkbox-group v-model="checkboxValue" name="something">
        <bar-checkbox :value="1">看电视</bar-checkbox>
        <bar-checkbox :value="2">玩电脑</bar-checkbox>
        <bar-checkbox :value="3">玩手机</bar-checkbox>
        <bar-checkbox :value="4" disabled>睡觉</bar-checkbox>
        <bar-checkbox :value="5" checked disabled>吃饭</bar-checkbox>
      </bar-checkbox-group>
      <bar-divider>已选：{{ checkboxValue }}</bar-divider>
      <bar-checkbox-group name="some" mode="vertical">
        <bar-checkbox :value="1">看电视</bar-checkbox>
        <bar-checkbox :value="2">玩电脑</bar-checkbox>
        <bar-checkbox :value="3">玩手机</bar-checkbox>
        <bar-checkbox :value="4" disabled>睡觉</bar-checkbox>
        <bar-checkbox :value="5" checked disabled>吃饭</bar-checkbox>
      </bar-checkbox-group>
    </bar-section>
    <bar-section title="选择器组件">
      <div>对应的value：{{ selectVal || '暂未选择' }}</div>
      <bar-select v-model="selectVal" name="city" placeholder="可输入检索">
        <bar-option label="河南" :value="1" />
        <bar-option label="河北" :value="2" />
        <bar-option label="湖南" :value="3" />
        <bar-option label="湖北" :value="4" />
      </bar-select>
      <bar-select name="b" placeholder="可清除" clearable :default-value="1">
        <bar-option label="默认选项" :value="1" />
        <bar-option label="选项2" :value="2" />
      </bar-select>
      <bar-select name="a" placeholder="禁用" disabled>
        <bar-option label="选项1" :value="1" />
        <bar-option label="选项2" :value="2" />
      </bar-select>
    </bar-section>
    <bar-section title="开关组件">
      <bar-switch />
      <bar-switch v-model="switchVal">
        <template #prefix>1</template>
        <template #suffix>0</template>
      </bar-switch>
      <bar-switch disabled />
      <bar-switch disabled checked />
    </bar-section>
    <bar-section title="多行输入框组件">
      <bar-textarea
        v-model="textarea"
        :rows="5"
        :cols="30"
        placeholder="自定义行列数"
      />
      <bar-textarea v-model="textarea" :row="5" placeholder="占满宽度" block />
      <bar-textarea placeholder="有错误" has-fail :maxlength="5" />
      <bar-textarea placeholder="禁用" disabled />
      <bar-textarea placeholder="只读" readonly />
    </bar-section>
    <bar-section title="警告提示组件">
      <bar-button @click="alertShow = !alertShow">切换状态</bar-button>
      <bar-alert v-model="alertShow" :closable="false">info提示</bar-alert>
      <bar-alert type="success">success提示</bar-alert>
      <bar-alert type="warn">warn提示</bar-alert>
      <bar-alert type="danger">danger提示</bar-alert>
    </bar-section>
    <bar-section title="页头组件">
      <bar-header title="普通页头" />
      <bar-header title="普通页头" sub-title="有子标题的页头" />
      <bar-header
        title="普通页头"
        sub-title="有返回按钮的页头"
        left-text="返回"
        :left-arrow="true"
      />
      <bar-header title="都可以自定义" sub-title="有右侧按钮的页头">
        <template #left>自定义</template>
        <template #right>自定义</template>
      </bar-header>
      <bar-header
        title="自定义颜色"
        color="#fff"
        text-color="#000"
        left-text="返回"
        :left-arrow="true"
      />
    </bar-section>
    <bar-section title="分割线">
      <bar-divider />
      <bar-divider>我是分割线</bar-divider>
      <bar-divider position="left">我是分割线靠左</bar-divider>
      <bar-divider position="right">我是分割线靠右</bar-divider>
      <div style="display: flex; align-items: center">
        我
        <bar-divider type="vertical" />
        是
        <bar-divider type="vertical" />
        分
        <bar-divider type="vertical" />
        割
        <bar-divider type="vertical" />
        线
      </div>
    </bar-section>
    <bar-section title="下拉菜单组件">
      <bar-dropdown
        button-title="基本使用"
        button-type="primary"
        :button-shadow="false"
        :show-icon="false"
        dropdown-position="rightdown"
      >
        <bar-item
          type="dropdown"
          v-for="(item, index) in ['吃饭', '睡觉', '打豆豆']"
          :key="index"
        >
          {{ item }}
        </bar-item>
      </bar-dropdown>
      <bar-dropdown
        button-title="有箭头"
        button-type="primary"
        :button-shadow="false"
        dropdown-position="rightdown"
        @open="handleClick2"
        @close="handleClick1"
      >
        <bar-item
          :icon="item % 2 ? 'up' : 'down'"
          type="dropdown"
          v-for="item in 5"
          :key="item"
        >
          这是下拉菜单{{ item }}
        </bar-item>
      </bar-dropdown>
      <bar-dropdown
        button-title="适用按钮样式"
        button-type="danger"
        :button-shadow="false"
        dropdown-position="rightdown"
      >
        <bar-item icon="heart" type="dropdown" v-for="item in 4" :key="item">
          这是下拉菜单{{ item }}
        </bar-item>
      </bar-dropdown>
    </bar-section>
    <bar-section title="轻提示组件">
      <bar-button @click="showMessage1">info</bar-button>
      <bar-button type="success" @click="showMessage2">success</bar-button>
      <bar-button type="warn" @click="showMessage3">warn</bar-button>
      <bar-button type="danger" @click="showMessage4">error</bar-button>
    </bar-section>
    <bar-section title="折叠面板组件">
      <bar-collapse>
        <bar-panel title="基本使用" :index="1" @open="openPanel">
          代码写出来是给人看的，附带能够在机器上运行
        </bar-panel>
        <bar-panel :index="2">
          <template #title>slot标题</template>
          测试2
        </bar-panel>
        <bar-panel title="标题3" :index="3">
          <bar-collapse :accordion="true" v-model="activeIndex">
            <bar-panel
              :title="`双向绑定activeIndex: ${activeIndex}`"
              :index="1"
            >
              代码写出来是给人看的，附带能够在机器上运行
            </bar-panel>
            <bar-panel title="标题2" :index="2">测试2</bar-panel>
            <bar-panel title="标题3" :index="3">测试3</bar-panel>
          </bar-collapse>
        </bar-panel>
      </bar-collapse>
      <bar-collapse :accordion="true" v-model="activeIndex">
        <bar-panel
          :title="`手风琴模式，activeIndex: ${activeIndex}`"
          :index="1"
        >
          代码写出来是给人看的，附带能够在机器上运行
        </bar-panel>
        <bar-panel title="标题2" :index="2">测试2</bar-panel>
        <bar-panel title="标题3" :index="3">测试3</bar-panel>
      </bar-collapse>
    </bar-section>
    <bar-section title="模态框组件">
      <bar-button @click="visible = true">基本模态框</bar-button>
      <bar-button @click="notice = true">通知框</bar-button>
      <bar-button @click="noMask = true">无遮罩</bar-button>
      <bar-button @click="showDialog">编程式</bar-button>
    </bar-section>
    <bar-section title="标签栏组件">
      <bar-tabs v-model="tabActive">
        <bar-tab :index="1" title="水平标签栏">标签内容1</bar-tab>
        <bar-tab :index="2" :disabled="true" title="禁用">标签内容2</bar-tab>
        <bar-tab :index="3" title="标签3">标签内容3</bar-tab>
      </bar-tabs>
      <bar-tabs type="underline">
        <bar-tab :index="1" title="下划线样式">标签内容1</bar-tab>
        <bar-tab :index="2" title="标签2">标签内容2</bar-tab>
        <bar-tab :index="3" title="标签3">标签内容3</bar-tab>
      </bar-tabs>
      <bar-tabs mode="vertical">
        <bar-tab :index="1" title="垂直标签栏">标签内容1</bar-tab>
        <bar-tab :index="2" title="标签2">标签内容2</bar-tab>
        <bar-tab :index="3" title="标签3">标签内容3</bar-tab>
      </bar-tabs>
    </bar-section>
    <bar-section title="无限滚动组件">
      <bar-infinite-scroll @load="load" :height="200" :finished="finished">
        <div class="scroll-card" v-for="n in list" :key="n">{{ n }}</div>
      </bar-infinite-scroll>
    </bar-section>
    <bar-section title="卡片组件" class="last-section">
      <bar-card style="margin-bottom: 1rem" title="卡片标题">卡片内容</bar-card>
      <bar-card-stack
        class="stack"
        :data="data"
        :fly-distance="1000"
        :limit-distance="100"
        :base-card-style="{ width: 300, height: 100, top: 0, left: 0 }"
        dragDirection="horizontal"
      >
      </bar-card-stack>
    </bar-section>
    <bar-modal title="模态框标题" v-model="visible">模态框</bar-modal>
    <bar-modal type="notice" title="通知" v-model="notice">
      <div style="margin-bottom: 10px">
        1.
        更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公
      </div>
      <div>
        2.
        更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更新公告更
      </div>
    </bar-modal>
    <bar-modal title="模态框标题" v-model="noMask" :show-mask="false">
      模态框
    </bar-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
// import {
//   // Button,
//   Card,
//   CardStack,
//   // Header,
//   // Icon,
//   Section,
//   Divider,
// } from '../../../lib';
import {
  Button,
  Card,
  CardStack,
  Section,
  Divider,
  Dropdown,
  Header,
  Icon,
  Item,
  Message,
  useAnchor,
  Collapse,
  Panel,
  Modal,
  Dialog,
  Tabs,
  Tab,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  Textarea,
  Alert,
  InfiniteScroll,
} from '../../components';

export default defineComponent({
  name: 'example',
  components: {
    [Card.name]: Card,
    [CardStack.name]: CardStack,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Section.name]: Section,
    [Divider.name]: Divider,
    [Header.name]: Header,
    [Dropdown.name]: Dropdown,
    [Item.name]: Item,
    [Collapse.name]: Collapse,
    [Panel.name]: Panel,
    [Modal.name]: Modal,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Input.name]: Input,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Switch.name]: Switch,
    [Select.name]: Select,
    [Option.name]: Option,
    [Textarea.name]: Textarea,
    [Alert.name]: Alert,
    [InfiniteScroll.name]: InfiniteScroll,
  },

  setup() {
    const data = [
      { title: '卡1', content: '卡片堆叠滑动效果只有手机端有用' },
      { title: '卡2', content: '内容2' },
      { title: '卡3', content: '内容3' },
      { title: '卡4', content: '内容4' },
      { title: '卡5', content: '内容5' },
      { title: '卡6', content: '内容6' },
      { title: '卡7', content: '内容7' },
    ];

    const handleClick = () => {
      Message.info('test');
    };
    const handleClick1 = () => {
      console.log('close');
    };
    const handleClick2 = (e: MouseEvent) => {
      console.log(2, e);
    };

    const showMessage1 = () => {
      Message.info('info');
    };
    const showMessage2 = () => {
      Message.success('success');
    };
    const showMessage3 = () => {
      Message.warn('warn');
    };
    const showMessage4 = () => {
      Message.error('error');
    };

    const activeIndex = ref();
    const openPanel = () => {
      console.log(1);
    };

    const visible = ref(false);
    const notice = ref(false);
    const noMask = ref(false);

    const showDialog = () => {
      Dialog.danger({
        type: 'notice',
        title: '你好',
        content: '你好你你好你好你好',
        onOk: () => {
          console.log(1);
        },
      });
    };

    const tabActive = ref(1);

    const input = ref('');

    // watch(input, (v) => console.log(v));

    const radioValue = ref();

    const changeRadio = () => {
      if (radioValue.value > 2 || !radioValue.value) {
        radioValue.value = 1;
      } else {
        radioValue.value += 1;
      }
    };

    const radioChange = (value: number) => {
      console.log('radioChange() ', value);
    };

    const checkboxValue = ref([1]);

    const clearCheckbox = () => {
      checkboxValue.value = [];
    };

    const switchVal = ref(true);

    const selectVal = ref('');

    const textarea = ref('');

    const alertShow = ref(true);

    const list = ref<number[]>([]);
    const finished = ref(false);
    const load = () => {
      return new Promise((resolve: any) => {
        setTimeout(() => {
          const n = list.value.length;
          if (n >= 60) {
            finished.value = true;
            return resolve();
          }
          for (let i = n + 1; i <= n + 20; i++) {
            list.value.push(i);
          }
          resolve();
        }, 1000);
      });
    };

    return {
      data,
      handleClick,
      handleClick1,
      handleClick2,
      showMessage1,
      showMessage2,
      showMessage3,
      showMessage4,
      ...useAnchor('.bar-section', document.getElementById('container')!, -60),
      activeIndex,
      openPanel,
      visible,
      notice,
      noMask,
      showDialog,
      tabActive,
      input,
      radioValue,
      changeRadio,
      radioChange,
      checkboxValue,
      clearCheckbox,
      switchVal,
      selectVal,
      textarea,
      alertShow,
      load,
      list,
      finished,
    };
  },
});
</script>
<style lang="less">
@import '../../components/variable.less';
.example-container {
  background-color: #fafafb;
  .active {
    color: @primary-color;
  }
  // padding: 1rem;
  & .bar-section .content > * {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
  .last-section {
    margin-bottom: 0 !important;

    .stack {
      height: 200px;
      margin-bottom: 0 !important;
    }
  }

  .scroll-card {
    text-align: center;
    border-bottom: 1px solid lightgray;
    line-height: 40px;
    font-size: 14px;
  }
}
</style>
