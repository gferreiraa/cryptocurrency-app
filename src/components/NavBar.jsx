import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined  } from '@ant-design/icons'

import icon from '../img/cryptocurrency.png'

const NavBar = () => {
    return (
        <div>
            <div className="nav-container">
                <div className="logo-container">
                    <Avatar src={icon} size="large"/>
                    <Typography.Title>
                        <Link to="/">Cryptoverse</Link>
                    </Typography.Title>
                    <Button className='menu-control-container'>

                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
