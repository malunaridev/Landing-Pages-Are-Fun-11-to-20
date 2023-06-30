import { Header } from "./components/Header/Header"
import { PageContent } from "./components/PageContent/PageContent"
import { TextContent } from "./components/PageContent/TextContent/TextContent"
import { Footer } from "./components/Footer/Footer"
import { SocialLinks } from "./components/Footer/SocialLinks/SocialLinks"
import ChatIcon from "./assets/Chat.png"
import ChildPic from "./assets/child.png"

function App() {

  return (
    <div>
      <Header/>
      <PageContent>
        <TextContent/>
        <img className="carouselPic" src={ChildPic}/>
      </PageContent>
    <Footer>
      <SocialLinks/>
      <img className="chatIcon" src={ChatIcon}/>
    </Footer>
    </div>
  )
}

export default App
