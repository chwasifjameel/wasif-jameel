import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainSection from "../components/mainSection"
import AboutMe from "../components/aboutMe"
import Services from "../components/Services"
import ServicesDetail from "../components/servicesDetail"
import { ParallaxProvider } from "react-scroll-parallax"

const IndexPage = () => (
  <ParallaxProvider>
    <Layout>
      <SEO title="Home" />
      <MainSection />
      <AboutMe />
      <Services />
      <ServicesDetail />
    </Layout>
  </ParallaxProvider>
)

export default IndexPage
