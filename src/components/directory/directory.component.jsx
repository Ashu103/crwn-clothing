import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
class Directory extends React.Component{

    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://scontent.fdel12-1.fna.fbcdn.net/v/t1.0-9/56505469_818956361790078_783596824442175488_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=Ll9PVvlrVuIAX_WGzJ_&_nc_ht=scontent.fdel12-1.fna&oh=722fac627d4c0563243b4d128deb2ab4&oe=5F66B4E2',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                  }
            ]
        };
    }

    render()
    {
        return (
            <div className ='directory-menu'>
            {
                this.state.sections.map(({ id, ...otherSectionProps }) => (
              <MenuItem key = {id}  {...otherSectionProps}/>

                ))
            }
            </div>
        )
    }
}

export default Directory;