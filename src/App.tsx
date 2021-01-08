import React from 'react';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
const App: React.FC = (props) => {
  return (
    <div>
      {/*<Icon theme={'primary'} icon={'coffee'} />*/}
      {/*<Button size={'lg'}>大何冰</Button>*/}
      {/*<Button disabled size={'lg'}>*/}
      {/*  大何冰*/}
      {/*</Button>*/}
      {/*<Button>何冰</Button>*/}
      {/*<Button size={'sm'}>小何冰</Button>*/}
      {/*<Button btnType={'primary'}>小何冰</Button>*/}
      {/*<Button btnType={'danger'}>小何冰</Button>*/}
      {/*<Button href="http:/www.baidu.com" btnType={'link'}>*/}
      {/*  小何冰*/}
      {/*</Button>*/}
      {/*<Button btnType={'link'} disabled href={'http://www.baidu.com'}>*/}
      {/*  哈哈哈*/}
      {/*</Button>*/}
      <Menu onSelect={(e) => alert(e)}>
        <MenuItem>哈哈哈</MenuItem>
        <MenuItem disabled>java</MenuItem>
        <MenuItem>php</MenuItem>
        <SubMenu title="这是必填的">
          <MenuItem>下拉选先</MenuItem>
          <MenuItem>下拉选先</MenuItem>
          <MenuItem>下拉选先</MenuItem>
        </SubMenu>
        <MenuItem>golamg</MenuItem>
      </Menu>
    </div>
  );
};

export default App;
