const css = hexo.extend.helper.get('css').bind(hexo);

hexo.extend.injector.register('head_begin', () => {
  return css('/css/admonition.css');
});
