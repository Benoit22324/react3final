import "./assets/css/common.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '@molecules/index.ts';
import { Homepage } from '@pages/Homepage';
import { Characterspage } from '@pages/Characterspage';
import { OneCharacterpage } from "@pages/OneCharacterpage";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/react3final' Component={Homepage} />
          <Route path='/react3final/characters' Component={Characterspage} />
          <Route path='/react3final/character/:name' Component={OneCharacterpage} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
