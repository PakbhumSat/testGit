/* eslint-disable react/no-unescaped-entities */
import styled from '@emotion/styled'
import { Box, Paper, Typography, Container, Grid } from '@material-ui/core'
//import { Breadcrumb } from 'core/CoreBreadcrumbs'
import { Breadcrumb, CoreBreadcrumbs } from 'core/CoreBreadcrumbs'
// import { MainLayout } from '../MainLayout'
import { Footer } from '../Footer'
// import { Borders } from '@material-ui/system'
import React, { ReactNode } from 'react'
import Image from 'next/image'


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
  fontWeight:'bold',
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
      <>
        
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
      </>
    )
  }
  
export const TestFAQ = () => {
  return (
    <MainLayout
    bgcolor= '#002984'
    // {
    //     <Box bgcolor="#002984">
    //       <Box>
    //         <Image
    //           src="/static/images/groupbuy_head.jpg"
    //           alt="group buy banner"
    //           width={2880}
    //           height={480}
    //           layout="intrinsic"
    //           objectFit="contain"
    //         />
    //       </Box>
    //     </Box>
    //   }
      >
        {/* <div style={bgFAQ.bgPicture}></div> */}
<Grid wrap='nowrap' display='flex'>
  <Box borderRight={1} borderRight='2px solid #ffffff' width='max-content' paddingRight='20px' marginTop='20px'> 
    <img src='/static/images/seller/white-logo.png' alt='FAQ logo top' width={166} height={42} />
  </Box> 
  <span style={greetingMessage} >ศูนย์ช่วยเหลือ</span>
</Grid>

<span style={greetingMessage}> สวัสดี, ค้นหาคำตอบของคุณได้ที่นี่</span> 
      <Paper elevation={3}>
          <Box p = {2}>
          <Typography variant="h4" component="div" color="textPrimary">
            ข้อกำหนดและเงื่อนไขการใช้บริการ Godungfaifaa
          </Typography>
          <IndentText>
            ผู้ขอใช้บริการตกลงใช้บริการ Godungfaifaa ตามที่ได้ให้บริการโดย
            บริษัท กันกุล บีทูบี จำกัด (“บริษัท”) และตามรายละเอียดที่บริษัทกำหนด
            โดยผู้ขอใช้บริการตกลงผูกพันตามข้อกำหนดและเงื่อนไขดังต่อไปนี้
          </IndentText>
          </Box>



      </Paper>
    </MainLayout>
  )
}
