import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextEditorContainer = styled.div`
  background-color: #1b1c22;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin-right: 20px;
`

export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const Image = styled.img`
  width: 100%;
`

export const RightContainer = styled.div`
  background-color: #334155;
  width: 60%;
  height: 500px;
  border-radius: 12px;
  border: solid 1px #cbd5e1;
`

export const IconContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  padding-left: 0px;
`

export const IconButton = styled.li`
  list-style: none;
`

export const BoldIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.boldButtonActive ? '#faff00' : ' #f1f5f9')};
`

export const ItalicIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.italicButtonActive ? '#faff00' : ' #f1f5f9')};
`

export const UnderlineIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.underlineButtonActive ? '#faff00' : ' #f1f5f9')};
`

export const Line = styled.hr`
  border: solid 1px #cbd5e1;
  width: 100%;
`

export const TextInput = styled.textarea`
  background-color: transparent;
  border: none;
  color: #cbd5e1;
  font-size: 18px;
  font-weight: ${props => (props.boldButtonActive ? 'bold' : 'normal')};
  font-style: ${props => (props.italicButtonActive ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.underlineButtonActive ? 'underline' : 'normal'};
  font-family: 'Roboto';
  padding: 10px;
  width: 100%;
  height: 420px;
  outline: none;
`
