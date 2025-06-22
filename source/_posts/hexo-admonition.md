---
title: Hexo-admonition 插件使用
author:
  - 书爱
categories:
  - 巧
date: 2025-06-17 14:24:40
tags:
  - hexo
  - admonition
---

1. 安装插件

    ```bash
    npm install hexo-admonition --save
    ```

2. 根目录下创建 `source/css/admonition.css` 文件，输入 [hexo-admonition css 配置](https://github.com/lxl80/hexo-admonition?tab=readme-ov-file#%E6%A0%B7%E5%BC%8F%E9%85%8D%E7%BD%AE)

3. 根目录下创建 `scripts/admonition.js` 文件，输入以下内容（参考 [Hexo 脚本（Scripts）](https://hexo.io/zh-cn/docs/plugins.html#%E8%84%9A%E6%9C%AC%EF%BC%88Scripts%EF%BC%89)）

    ```js
    const css = hexo.extend.helper.get('css').bind(hexo);

    hexo.extend.injector.register('head_begin', () => {
      return css('/css/admonition.css');
    });
    ```
