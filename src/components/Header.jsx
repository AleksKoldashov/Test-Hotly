import { Collapse, ConfigProvider, Space, theme } from 'antd';
import { Button } from 'antd';




export default function Header(params) {
    
    
    
    return(
        <div className='header-btn'>
            <ConfigProvider
             theme={{
                token: {
                    colorText: '#FF2400',
                    fontSize: '5'
                },
              }}
            >
            </ConfigProvider>

            <Button type="link">Link</Button>
            <Space direction="horizont">
                    <Collapse
                    accordion={true}
                     collapsible="header"
                     expandIconPosition='end' 
                     bordered={false}
                    items={[ {
                        key: '1',
                        label: "Casinos",
                      },]}          
                    />
            </Space>
            <Button type="link">Spieler</Button>
            <Button type="link">WIN 24 Club</Button>
            <Button type="link">Karriere</Button>
            
        </div>

    )
   
}