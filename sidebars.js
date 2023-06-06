/*
 * @Author: root root@gmail.com
 * @Date: 2023-06-06 15:17:46
 * @LastEditors: root root@gmail.com
 * @LastEditTime: 2023-06-06 18:16:56
 * @FilePath: /hzwz.github.io/sidebars.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  notes: [
    'notes/notes-intro',
    {
      type: 'category',
      label: 'TypeScript',
      link: {
        type: 'generated-index',
        title: 'TypeScript 目录',
        description: "整理的一些关于 TS 的笔记，没事自己看看",
        keywords: ['TypeScript'],
      },
      items: [{
        type: 'autogenerated',
        dirName: 'notes/TypeScript'
      }],
      collapsed: false
    },
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
    {
      label: '网络安全',
      type: 'category',
      link: {
        type: 'generated-index',
        title: '网络安全',
        description: "渗透测试，安全研发，红队相关",
        keywords: ['safety']
      },
      items: [{
        type: 'autogenerated',
        dirName: 'notes/whitehat'
      }],
      collapsed: false
    }
  ],
  hackfun: [
    'hackfun/hackfun-intro',
    {
      label: 'ArchLinux',
      type: 'category',
      link: {
        type: 'generated-index',
        title: 'ArchLinux 系列',
        description: "关于 ArchLinux 日常学习、开发时，记录遇到的问题，或者有意思的地方",
        keywords: ['ArchLinux'],
      },
      items: [
        'hackfun/arch/grub',
        'hackfun/arch/timesetting',
        'hackfun/arch/rtl8812bu',
        'hackfun/arch/fancontrol',
        'hackfun/arch/bluetooth'
      ],
      collapsed: false
    },
  ]
};

module.exports = sidebars;
