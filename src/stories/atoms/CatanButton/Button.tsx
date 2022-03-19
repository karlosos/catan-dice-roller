import styled from 'styled-components'
import BackgroundSprite from "./button-large.png"

const BackgrounHover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-image: url(${BackgroundSprite});
    background-repeat: no-repeat;
    background-size: 100% 282px;
    background-position: bottom center;
    transition: opacity 0.3s ease;
        opacity: 0;

    &:hover {
        opacity: 1;
        transition: opacity 0.3s ease;
        cursor: pointer;
    }
`

const ButtonStyled = styled.div`
position: relative;
width: 380px;
height: 141px;
display: block;
max-width: 100%;
background-size: 100% 282px;
background-color: transparent;
background-repeat: no-repeat;
background-image: url(${BackgroundSprite});
background-position: top center;

text-align:center;
`

const ContentStyled = styled.span`
    color: #fcf2cd;
    z-index: 1;
    display: block;
    font-size: 4.75rem;
    text-align: center;
    line-height: 151px;
    font-family: var(--font-family-tertiary);
    text-shadow: 0 2px 0 rgb(149 50 9 / 58%), 0 3px 4px rgb(129 41 8 / 20%), 0 0 6px rgb(92 26 4 / 51%);
    letter-spacing: -2px;
    text-transform: uppercase;
    transition: color ease-in-out 1000ms;
`
export const Button: React.FC = ({ children }) => {
    // Source: https://www.royal-wow.com/
    return (
        <ButtonStyled>
            <BackgrounHover>
                <ContentStyled>
                    {children}
                </ContentStyled>
            </BackgrounHover>
            <ContentStyled>
                {children}
            </ContentStyled>
        </ButtonStyled>
    )
}