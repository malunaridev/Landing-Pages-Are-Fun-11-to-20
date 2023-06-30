import { Header } from "./components/Header/Header"
import { PageContent } from "./components/PageContent/PageContent"
import { TextContent } from "./components/PageContent/TextContent/TextContent"
import { Footer } from "./components/Footer/Footer"
import { SocialLinks } from "./components/Footer/SocialLinks/SocialLinks"

function App() {

  return (
    <div>
      <Header/>
      <PageContent>
        <TextContent/>
        <img className="carouselPic" src="./assets/child.png"/>
      </PageContent>
    <Footer>
      <SocialLinks/>
      <img className="chatIcon" src="./assets/Chat.png"/>
    </Footer>
    </div>
  )
}

export default App
