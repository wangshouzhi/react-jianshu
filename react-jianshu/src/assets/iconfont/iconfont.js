import { createGlobalStyle } from 'styled-components'

export const Icon =  createGlobalStyle`

@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1564052057667'); /* IE9 */
  src: url('./iconfont.eot?t=1564052057667#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1564052057667') format('woff'),
  url('./iconfont.ttf?t=1564052057667') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1564052057667#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-pen:before {
  content: "\e61c";
}

.icon-zhinanzhen:before {
  content: "\e613";
}

.icon-Aa:before {
  content: "\e636";
}

.icon-zuanshi:before {
  content: "\e604";
}

.icon-fangdajing:before {
  content: "\e637";
}

.icon-biji:before {
  content: "\e62d";
}

.icon-shoujixiazai:before {
  content: "\e608";
}
`
export default Icon
