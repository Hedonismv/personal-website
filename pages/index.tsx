import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const StyledVideo = styled.video(
  () => css`
    height: 100%;
    width: 100%;
  `
)

const MainCont = styled.div(
  () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
  `
)

const TextBlock = styled.div(
  () => css`
    position: absolute;
    top: 30%;
    left: 40px;

    & > h1 {
      font-weight: bold;
      font-size: 34px;
      line-height: 24px;
      color: #fff;
    }

    & > span {
      font-weight: 400;
      font-size: 26px;
      line-height: 17px;
      color: #fff;

      & > a {
        background: linear-gradient(90.73deg, #d6b0ff 0%, #a78bff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  `
)

const SkillBlock = styled.div(
  () => css`
    margin-top: 40px;
    & > span {
      font-weight: 300;
      font-size: 22px;
      line-height: 17px;
      color: #fff;
    }
  `
)

const SocialBlock = styled.div(
  () => css`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;

    & > svg {
      width: 35px;
      height: 35px;
      cursor: pointer;
      transition: all 0.1s ease-in;

      &:hover {
        transform: scale(1.1);
      }
    }
  `
)

export default function Home() {
  return (
    <MainCont>
      <StyledVideo src={"human.mp4"} autoPlay={true} loop={true} muted={true} />
      <TextBlock
        as={motion.div}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
      >
        <h1>Vitaly Hedo</h1>
        <span>
          Fullstack Middle developer at{" "}
          <a
            style={{ color: "#CAC748" }}
            href={"https://www.nfd.tools/"}
            rel={"noreferrer noopener"}
            target={"_blank"}
          >
            NFD
          </a>
        </span>
        <SkillBlock>
          <span>
            React, Angular, TypeScript, JavaScript, Python, Node.js, Solidity
          </span>
        </SkillBlock>
        <SocialBlock>
          <a
            href={"https://github.com/Hedonismv"}
            rel={"noreferrer noopener"}
            target={"_blank"}
          >
            <AiFillGithub />
          </a>
          <a
            href={"https://www.linkedin.com/in/hedonismv/"}
            rel={"noreferrer noopener"}
            target={"_blank"}
          >
            <AiFillLinkedin />
          </a>
        </SocialBlock>
      </TextBlock>
    </MainCont>
  )
}
