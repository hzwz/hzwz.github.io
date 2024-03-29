/*
 * @Author: root root@gmail.com
 * @Date: 2023-06-06 15:17:46
 * @LastEditors: root root@gmail.com
 * @LastEditTime: 2023-06-06 18:16:56
 * @FilePath: /hzwz.github.io/sidebars.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  notes: [
    'notes/notes-intro',
    {
      type: 'category',
      label: '设计模式',
      link: {
        type: 'generated-index',
        title: '设计模式',
        description: "TypeScript 常见设计模式，整理自 REFACTORINGGURU",
        keywords: ['guides'],
      },
      items: [{
        type: 'autogenerated',
        dirName: 'notes/pattern'
      }],
    },
  ],
  hackfun: [
    'hackfun/hackfun-intro',
    {
      label: '网络层漏洞',
      type: 'category',
      link: {
        type: 'generated-index',
        title: '网络层漏洞',
        description: "网络层漏洞挖掘学习",
        keywords: ['区块链',"漏洞挖掘"],
      },
      items: [
        'hackfun/vul/nvwu',
      ],
      collapsed: false
    },
  ]
};

module.exports = sidebars;
