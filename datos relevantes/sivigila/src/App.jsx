import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PowerBIEmbed } from "powerbi-client-react";
import Header from './header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header></header>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <PowerBIEmbed 
        embedConfig={{
          type:'report',
          id:'<report id>',
          embedurl:'<Embed Url>',
          accessToken: '<Access Token>',
          settings:{
            panes:{
              filters:{
                expanded: false,
                visible: false
              }
            },
            background: models.backgroundType.Transparent,
          }
        }}

        eventHandlers={
          new Map([
            ['loaded', function () {console.log('Report loaded');}],
            ['rendered', function () {console.log('Report rendered');}],
            ['error', function (event) {console.log(Event.detail);}]
          ])
        }

        cssclassName = {"report-style-class"}

        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
        />
      </div>
    </>
  )
}

export default App
