import type { NextPage } from 'next'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import { Button } from 'antd'
import axios from 'axios'

const Home: NextPage = () => {
  async function send() {
    const res = await axios.get('http://localhost:3000');
    console.log(res);
  }
  send()

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