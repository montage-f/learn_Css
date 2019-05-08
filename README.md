# learn_Html+Css


01. Html
    - 常见元素
        - header内部元素
            01. mata
            02. title
            03. style
            04. link
            05. script
            06. base
        - body内部元素
            01. div/section/article/aside/header/footer
            02. p
            03. span/em/strong
            04. table/thead/tbody/tr/th/td
            05. ul/li,ol/li,dl/dt/dd
            06. a
            07. form/input/select/textarea/button/label
            08. img
    - 版本
        01. HTML4/4.01(SGML)
        02. XHTML
        03. HTML5
            - 部分新增区块标签
                01. section (区域)
                02. article (区域)
                03. aside   (不重要的内容)
                04. nav     (导航)
                05. header  (头)
                06. footer  (尾)
            - 表单增强
                01. 日期, 时间, 搜索
                02. 表单验证
                03. placeholder, 自动聚焦(autofocus)

    - 元素分类
        01. 按默认样式分类
            - 块级元素
            - 行内元素
            - 行内块级元素
        02. 按内容分类
    - 元素嵌套关系
        01. 块级元素包含行内元素
        02. 块级元素不一定能包含块级元素
        03. 行内一般不能包含块级元素
            - a 元素可以用来包含块级元素
    - 元素默认样式和定制化
        01. 标签自带一些样式, 就是标签的默认样式
        02. 可是使用Css Reset 来清楚css的默认样式
        03. Normalize.css 的使用
    - 面试真题解答
        01. doctype的意义是什么?
            - 让浏览器以标准的模式渲染, 避免各浏览器的兼容性问题

        02. HTML, XHTML, HTML5 的关系
            - HTML  属于 SGML
            - XHTML 属于 XML, 是 HTML进行XML严格化的结果
            - HTML5 不属于 SGML 或 XML, 比XHTML宽松

        03. HTML5有什么变化?
            - 新的语义化元素
            - 表单增强
            - **新的API(离线, 音视频, 图形, 实时通信, 本地存储, 设备能力)**
            - 分类和嵌套变更
            - a元素被允许包裹块级元素

        04. em和i有什么区别?
            - em是语义化的标签, 表强调
            - i是春样式标签, 表示斜体

        05. 语义化的意义是什么?
            - 开发者容易理解
            - 极其容易理解结构(搜索, 读屏软件)
            - 有助于 SEO

        06. 哪些元素可以自闭合
            - 表单元素 input
            - 图片 img
            - br,hr
            - meta, link

        07. HTML 和 DOM 的关系
            - HTML 是 '死' 的
            - DOM 是有 HTML 解析而来的, 是活的
            - JS 可以用来维护 DOM

        08. property 和 attribute 的区别
            - attribute 是 '死' 的
            - property 是 attribute 解析之后出来的

        09. form的作用有哪些
            - 直接提交表单
            - 使用 submit/reset 按钮
            - 便于浏览器保存表单
            - 第三方库可以整体提取值
            - 第三方库可以进行表单验证

    - [html的机构大纲算法工具](https://github.com/h5o/h5o.github.io)

02. Css(层叠样式表)
    01. 选择器
        - 用于匹配HTML元素
        - 分类和权重
        - 解析方式和性能
        - 值得关注的选择器
    ```
        选择器:{
          属性:值;
          属性:值;
        }
        浏览器解析选择器的时候, 是从右往左解析, 加快浏览器提高对css的解析速度
        01. 选择器的分类:
            01. 元素选择器 a{}
            02. 伪元素选择器 ::before{}
            03. 类选择器 .link{}
            04. 伪类选择器 :hover{}
            05. 属性选择器 [type=radio]{}
            06. ID选择器 #id{}
            07. 组合选择则器 [type=radio]+label{}
            08. 否定选择器 :not(.link){}
            09. 通用选择器 *{}

        02. 选择器的权重
            01. ID选择器 #id{}  +100
            02. 类, 属性, 伪类   +10
            03. 元素, 伪元素     +1
            04. 其他选择器       +0
            05. !important 优先级最高
            06. 行内样式 优先级高
            07. 相同权重, 后写的生效


    ```


03. JavaScript