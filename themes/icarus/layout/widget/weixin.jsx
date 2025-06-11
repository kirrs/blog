const { Component } = require('inferno');
const { cacheComponent } = require('hexo-component-inferno/lib/util/cache');

class WeiXin extends Component {
  render() {
    const {
        icon,
        name
    } = this.props;
    return (
      <div class="card widget">
        <div class="card-content">
          <div class="media" style="overflow: hidden; align-items: center">
            <div class="media-left">
              <figure class="image is-96x96">
                <img src={icon}/>
              </figure>
            </div>
            <div class="media-content">
              <div id="weixin-search-logo"></div>
              <div id="weixin-search-text" class="control has-icons-left">
                <input class="input" readonly value={name} onfocus="this.select()" />
                <span class="icon is-small is-left">
                  <i class="fas fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WeiXin.Cacheable = cacheComponent(WeiXin, 'widget.weixin', (props) => {
  const { url_for } = props.helper;
  return {
    icon: url_for(props.widget.icon),
    name: props.widget.name
  };
});

module.exports = WeiXin;
