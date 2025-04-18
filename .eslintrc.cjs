// 配置信息
const config = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    NodeListOf: 'readonly',
    EventListenerOrEventListenerObject: 'readonly',
    NodeJS: 'readonly'
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  settings: {},
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true, // 允许短路逻辑
        allowTernary: true // 允许三目运算
      }
    ],
    'import/prefer-default-export': 'off', // 如果只有一个值，要用 default 导出
    'import/no-unresolved': 'off', // import识别路径，因为alias设置
    'import/extensions': 'off', // 扩展简写
    'no-param-reassign': 'off', // 函数参数修改
    'no-plusplus': 'off', // 一元操作符
    'no-nested-ternary': 'off', // 禁用嵌套的三元表达式
    'no-bitwise': 'off', // 禁用按位运算符
    'no-multi-assign': 'off', // 禁止连续赋值
    'vue/no-v-model-argument': 'off', // v-model 带参数
    'vue/no-multiple-template-root': 'off', // 根元素只有一个
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'vue/multi-word-component-names': 'off', // 自定义组件可以为单词
    'no-unused-vars': 'off', // 关闭定义未使用
    eqeqeq: ['off'],
    'class-methods-use-this': 'off',
    camelcase: 'off'
  }
}
module.exports = config
