import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const styles = {
  badge: {
    borderRadius:'50%',
    padding: 8,
    display:'inline-block',
    width: 30,
    height: 30,
    textAlign: 'center',
    lineHeight: '30px',
    fontWeight: 700
  },
  logo: {
    float:  'left',
    margin: 8
  }
};
export default class Header extends Component {
  render() {
    const base_url =`${window.location.protocol}//${window.location.hostname}${window.location.port ? ':'+window.location.port : ''}`
    return (
        <header style={{
            height:          48,
            backgroundColor: 'rgb(102,63,180)',
            color:           'white',
            padding:         '6px 10px',
            display:         'flex',
            flexDirection:   'row',
            alignItems:      'center'
          }}
          >
            <div style={styles.logo}>
              <Link to="/">
                <img alt={'logo'} style={{ maxHeight: 40, flex: 1}} src={`${base_url}/favicon-196x196.png`}/>
              </Link>
            </div>
            <div>
              {'Modus Create'}
            </div>
            <div style={{float: 'left', color: 'white', flex: 1}} />
            <div style={{float: 'right', paddingRight: 20}}>
                {this.props.buttons}
            </div>

        </header>
    );
  }
}

