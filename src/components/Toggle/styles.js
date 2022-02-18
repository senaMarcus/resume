import styled from 'styled-components'

export const ToggleStyle = styled.div`
       width: 50px;
       height: 25px;
       border-radius: 20px;
       border: 1px solid #999;
       background-color: #white;
       position: fixed;
       top: 10px;
       right: 10px;
       z-index: 999;
       display: flex;
       align-items: center;
       justify-content: space-around;


       img{
              width:15px;
              height: 15px;
       }      
`

export const DarkLightBtn = styled.div`
width: 25px;
       height:25px;
       border-radius: 50%;
       cursor: pointer;
       background: #999;
       position: absolute;
`