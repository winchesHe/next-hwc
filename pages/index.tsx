import type { NextPage } from 'next'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import { Button } from 'antd'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <Title>Hello World, this is my first styled component!</Title>
      </Wrapper>
      <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    </div>
  )
}

export default Home

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;