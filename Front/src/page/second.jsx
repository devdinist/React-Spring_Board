import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

export default class Second extends React.Component{

    render(){
        return(
            <Layout style={{paddingLeft:10,paddingRight:10}}>
                <Content>
                    <p>2번이다!</p>
                </Content>
            </Layout>
        )
    }
}