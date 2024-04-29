import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  TextEditorContainer,
  LeftContainer,
  Heading,
  Image,
  RightContainer,
  IconContainer,
  IconButton,
  BoldIconButton,
  ItalicIconButton,
  UnderlineIconButton,
  Line,
  TextInput,
} from './styledComponent'

class TextEditor extends Component {
  state = {
    boldButtonActive: false,
    italicButtonActive: false,
    underlineButtonActive: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({
      boldButtonActive: !prevState.boldButtonActive,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      italicButtonActive: !prevState.italicButtonActive,
    }))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      underlineButtonActive: !prevState.underlineButtonActive,
    }))
  }

  render() {
    const {boldButtonActive, italicButtonActive, underlineButtonActive} =
      this.state

    return (
      <MainContainer>
        <TextEditorContainer>
          <LeftContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              className="image"
              alt="text editor"
            />
          </LeftContainer>
          <RightContainer>
            <IconContainer>
              <IconButton>
                <BoldIconButton
                  type="button"
                  onClick={this.onClickBold}
                  boldButtonActive={boldButtonActive}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </BoldIconButton>
              </IconButton>
              <IconButton>
                <ItalicIconButton
                  type="button"
                  onClick={this.onClickItalic}
                  italicButtonActive={italicButtonActive}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </ItalicIconButton>
              </IconButton>
              <IconButton>
                <UnderlineIconButton
                  type="button"
                  onClick={this.onClickUnderline}
                  underlineButtonActive={underlineButtonActive}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineIconButton>
              </IconButton>
            </IconContainer>
            <Line />
            <TextInput
              boldButtonActive={boldButtonActive}
              italicButtonActive={italicButtonActive}
              underlineButtonActive={underlineButtonActive}
            />
          </RightContainer>
        </TextEditorContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
