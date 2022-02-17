import styled from 'styled-components'

export const AboutContent = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
    
`

export const AboutLeft = styled.div`
        flex:1;
        display:flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 100%;

        .a-card.bg{
            position: absolute; 
            top: 50px;
            left: 50px;
            background-color: #333;  
        }
`

// export const CardBg = styled.div`
//         position: absolute; 
//         top: 50px;
//         left: 50px;
//         background-color: #333;
// `

export const AboutRight = styled.div`
        flex:1;

        h1{
            font-weight: 600;
            color:#333;
        }
            
        h4{
            margin:20px 0px;
        }

        p{
            font-size: 13px;
            font-weight: 300;
        }
`

export const AboutCard = styled.div`
        width: 40%;
        height: 70vh;
        border-radius: 30px;
        position: relative;
        overflow:hidden;        

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
`