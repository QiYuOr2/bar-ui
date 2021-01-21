import { App, defineComponent } from 'vue';
import './index.less';

const Textarea = defineComponent({
  name: 'bar-textarea',
  props: {
    name: { type: String },
    rows: { type: Number, default: 4 },
    cols: { type: Number, default: 20 },
    block: { type: Boolean, default: false },
    placeholder: String,
    disabled: { type: Boolean, default: false },
    hasFail: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    autofocus: { type: Boolean, default: false },
    maxlength: { type: Number },
    value: String,
  },
  setup(props) {
    return () => (
      <div class={['bar-textarea', { block: props.block }]}>
        <textarea
          class={[
            'bar-textarea__inner',
            { fail: props.hasFail, disabled: props.disabled },
          ]}
          placeholder={props.placeholder}
          rows={props.rows}
          cols={props.cols}
          disabled={props.disabled}
          readonly={props.readonly}
          autofocus={props.autofocus}
          maxlength={props.maxlength}
        >
          {props.value}
        </textarea>
      </div>
    );
  },
});

Textarea.install = (app: App) => {
  app.component(Textarea.name, Textarea);
};

export default Textarea;
