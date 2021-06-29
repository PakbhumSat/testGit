/* eslint-disable react/no-unescaped-entities */
import styled from '@emotion/styled'
import { Box, Paper, Typography, Container, Grid, Tab, Tabs, makeStyles, Theme,Link, colors  } from '@material-ui/core'
//import { Breadcrumb } from 'core/CoreBreadcrumbs'
import { Breadcrumb, CoreBreadcrumbs } from 'core/CoreBreadcrumbs'
// import { MainLayout } from '../MainLayout'
import { Footer } from '../Footer'
//import { Borders } from '@material-ui/system'
import React, { ReactNode } from 'react'
import Image from 'next/image'
import { value } from 'numeral'
import { useState } from 'react'
//import { TabList } from '@material-ui/lab'


const breadcrumbs: Breadcrumb[] = [
  { label: 'หน้าแรก', url: '/' },
  { label: 'Test FAQ' },
]

const Terms = styled((props) => (
  <Typography component={props.component} {...props} />
))`
  white-space: pre-wrap;
  font-weight: 400;
`

const HeadSection = styled((props) => (
  <Typography component="div" variant="subtitle2" {...props} />
))`
  margin-top: 10px;
`

const greetingMessage = {
  display :'flex' ,
  justifyContent:'center', 
  fontSize:'2rem', 
  color:'#FFFFFF',
  margin:'20px',
};


const IndentText: React.FC<{ indent?: string; marginTop?: string }> = ({
  children,
  indent = '0rem',
  marginTop = '16px',
}) => (
  <Terms
    component="p"
    variant="subtitle2"
    style={{ textIndent: indent, marginTop }}
  >
    {children}
  </Terms>
)
const MainLayout = ({
    beforeMain,
    breadcrumbs,
    bgcolor = '#F9F9FE',
    banner,
    children,
    fullWidth = false,
    noFooter = false,
    style = {},
  }: {
    children?: ReactNode
    beforeMain?: JSX.Element
    breadcrumbs?: Breadcrumb[]
    bgcolor?: any
    banner?: JSX.Element
    fullWidth?: boolean
    noFooter?: boolean
    style?: React.CSSProperties
  }) => {
    return (
           
        <Box
          minHeight={noFooter ? 0 : '100vh'}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          style={style}
        >
            {beforeMain}
        {fullWidth ? (
          <Box>
            {breadcrumbs && <CoreBreadcrumbs breadcrumbs={breadcrumbs} />}
            {children}
          </Box>
        ) : (
          <Container>
            <Box paddingBottom={2}>
              {breadcrumbs && <CoreBreadcrumbs breadcrumbs={breadcrumbs} />}
              {children}
            </Box>
          </Container>
        )}
          <Box>{!noFooter && <Footer />}</Box>
        </Box>
      
    )
  }
  
const TabList = [
  {key:0,id:0},
  {key:1,id:1},
  {key:2,id:2},
  {key:3,id:3},
  //{key:4,id:4}
]

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 500
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel =(props: TabPanelProps) =>{
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`} 
      style={{width:'-webkit-fill-available'}}    
    >
      {value === index && (
        <Box p={3} >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const WhatsOnGoDung = (event)=>{
  event.preventDefault();  
  
  return (
    <Box>
          <Typography
            variant="h3"
            component="div"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
          สินค้าที่ขายบน Godungfaifaa.com มีอะไรบ้าง
          </Typography>
          <IndentText>
            ตลาดอุปกรณ์ไฟฟ้าออนไลน์ครบวงจร สินค้าชั้นนำหลากหลาย 
            อาทิ แผงโซลาร์ อินเวอร์เตอร์ แบตเตอรี่ ปั๊มโซลาร์ และอื่นๆอีก 
            ส่งตรงจากผู้ผลิตทำให้ลูกค้าได้สินค้าของแท้ คุณภาพเยี่ยม ราคาดี 
            เข้าเลือกดูประเภทสินค้าทั้งหมดที่มีจำหน่ายบน Godungfaifaa 
            ได้โดยกดปุ่ม 
            <b>“หมวดหมู่สินค้า”</b>       
          </IndentText>
            <img
                src="/static/images/faq/gdff-faq-1.png"
                alt="dbd logo"
                style={imageStyle}
          />
    </Box>
    );
};

const eachTab =(index: any)=> {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const imageStyle={
  
  display: 'block',
  marginTop: '20px',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '80%',
  borderRadius: '8px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' 

}


export const TestFAQ = () => {

  const classes = useStyles();
  const [selectedtab,setSelectedTab] = useState(TabList);
  const [value, setValue] = useState(0);

  const handleTabChange = (event, value) =>{
    setValue(value);
  };

  return (
    
    <MainLayout>
      <Box height='300px' style = {{backgroundColor:'#0C1A52'}}>
        <Grid style={{wrap:'nowrap',display:'flex'}}>
          <Box width='max-content' paddingRight='20px' marginTop='20px'> 
            <img src='/static/images/seller/white-logo.png' alt='FAQ logo top' width={166} height={42} />
          </Box> 
          <Box borderLeft='2px solid #ffffff' marginTop='30px' height='30px'>
            <Typography style={{marginLeft:'20px',fontSize:'30px',color:'#FFFFFF'}}><b>ศูนย์ช่วยเหลือ</b></Typography>
          </Box>
        </Grid>
        <Typography style={greetingMessage}><b>สวัสดี, ค้นหาคำตอบของคุณได้ที่นี่</b> </Typography> 
      </Box>

        <Box
          //marginTop='-150px'
         // marginLeft='80px'
         // marginRight='80px'
          >
            <Box p = {2} className={classes.root} style={{borderRadius:'5px'}} margin='-150px 80px 0px 80px'>
              <Tabs 
              indicatorColor='primary'               
              orientation='vertical' 
              variant='scrollable'
              value={value}
              onChange={handleTabChange}
              className={classes.tabs}
              >            
                <Tab label='คำถามที่พบบ่อย' {...eachTab(0)}/>
                <Tab label='นโยบายการคืนสินค้าและคืนเงิน' {...eachTab(1)}/>
                <Tab label='นโยบายการรวมกลุ่มซื้อ' {...eachTab(2)}/>
                <Tab label='ข่องทางการติดต่อ' {...eachTab(3)}/>
              </Tabs>

              <TabPanel value={value} index={0}>
                
                <Typography style={{colors:'inherit'}}>คำถามที่พับบ่อย</Typography>
                <Link href='/'>
                  <a>
                    <Box style={{ color: 'inherit' }}>สินค้าที่ขายบนโกดังไฟฟ้ามีอะไรบ้าง?</Box>
                  </a>
                </Link>
              {/* <Typography
                variant="h3"
                component="div"
                color="textPrimary"
                style={{ fontWeight: 600 }}
              >
              สินค้าที่ขายบน Godungfaifaa.com มีอะไรบ้าง
              </Typography>
              <IndentText>
                ตลาดอุปกรณ์ไฟฟ้าออนไลน์ครบวงจร สินค้าชั้นนำหลากหลาย 
                อาทิ แผงโซลาร์ อินเวอร์เตอร์ แบตเตอรี่ ปั๊มโซลาร์ และอื่นๆอีก 
                ส่งตรงจากผู้ผลิตทำให้ลูกค้าได้สินค้าของแท้ คุณภาพเยี่ยม ราคาดี 
                เข้าเลือกดูประเภทสินค้าทั้งหมดที่มีจำหน่ายบน Godungfaifaa 
                ได้โดยกดปุ่ม 
                <b>“หมวดหมู่สินค้า”</b>       
              </IndentText>
                <img
                    src="/static/images/faq/gdff-faq-1.png"
                    alt="dbd logo"
                    style={imageStyle}
              />  */}

              </TabPanel> 

              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>       
            </Box>
        </Box>
    </MainLayout>
  )
}
