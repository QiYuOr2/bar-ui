import { defineComponent } from 'vue';
import './index.less';

export default defineComponent({
  name: 'bar-header',
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    color: {
      type: String,
    },
    textColor: {
      type: String,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      <>
        <header
          class="bar-header"
          style={{
            color: props.textColor,
            backgroundColor: props.color,
            position: props.fixed ? 'fixed' : 'static',
            top: 0,
            left: 0,
            zIndex: 2999,
          }}
        >
          <div>
            <div class="bar-header__left"></div>
            <div class="bar-header__center">
              <p class="title">{props.title}</p>
              {props.subTitle && <p class="sub-title">{props.subTitle}</p>}
            </div>
            <div class="bar-header__right"></div>
          </div>
        </header>
        {props.fixed && <div style="height: calc(46px)"></div>}
      </>
    );
  },
});
