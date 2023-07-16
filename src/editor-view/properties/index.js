import { InputNumber, Radio, Select, Slider } from "antd";
import Input from "antd/es/input/Input";
import TextArea from "antd/es/input/TextArea";

const fontFamilyArr = [
  { text: '宋体', value: '"SimSun","STSong"' },
  { text: '黑体', value: '"SimHei","STHeiti"' },
  { text: '楷体', value: '"KaiTi","STKaiti"' },
  { text: '仿宋', value: '"FangSong","STFangsong"' },
]

const fontFamilyOptions = fontFamilyArr.map(font => {
  return {
    value: font.value,
    text: <span style={{ fontFamily: font.value}}>{font.text}</span>,
  }
})

const defaultHandler = {
  component: <Input />,
  eventName: 'change',
  valueProp: 'value',
  initialTransform: (v) => v,
  afterTransform: (e) => e,
}

const pxToNumberHandler = {
  component: <InputNumber />,
  initialTransform: (v) => v ? parseInt(v) : 0,
  afterTransform: (e) => e ? `${e}px` : ''
}

export const mapPropsToForms = {
  text: {
    text: '文本',
    component: <TextArea />,
    extraProps: { rows: 3},
    afterTransform: (e) => e.target.value
  },
  fontSize: {
    text: '字号',
    ...pxToNumberHandler,
  },
  lineHeight: {
    text: '行高',
    component: <Slider />,
    extraProps: {min: 0, max: 3, step: 0.1},
    initialTransform: (v) => parseFloat(v),
    afterTransform: (e) => e.toString(),
  },
  textAlign: {
    text: '对齐',
    component: <Radio.Group />,
    subComponent: <Radio.Button />,
    options: [
      {value: 'left', text: '左'},
      {value: 'center', text: '中'},
      {value: 'right', text: '右'},
    ],
    afterTransform: (e) => e.target.value,
  },
  fontFamily: {
    text: '字体',
    component: <Select />,
    subComponent: <Select.Option />,
    options: [
      {value: '', text: '无'},
      ...fontFamilyOptions
    ]
  },
  url: {
    ...defaultHandler,
    text: '链接',
  }
};