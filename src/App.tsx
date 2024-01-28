import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import { BREAKPOINTS, COLORS } from './constants'
import { Progress, Stack, TaskList } from './components'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <CardContent>
            <Stack spacing={32}>
              <Progress />
              <TaskList />
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: ${COLORS.pageBGColor};
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 42px 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  width: 720px;
  height: 100%;
  border-radius: 20px;
  background-color: ${COLORS.bgColor};

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 80%;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 95%;
  }
`

const CardContent = styled.div`
  margin: 62px 101px;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    margin: 22px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 22px;
  }
`

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`

export default App
