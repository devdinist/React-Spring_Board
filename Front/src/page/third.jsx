import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

export default class Third extends React.Component{

    render(){
        return(
            <Layout style={{paddingLeft:10,paddingRight:10}}>
                <Content>
                    <p>3번이다!</p>
                </Content>
            </Layout>
        )
    }
}