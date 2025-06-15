import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageUseContext from './page/PageUseContext'
import PageUseRedux from './page/PageUseRedux'
import PageUseZustland from './page/PageUseZustland'

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<PageUseContext></PageUseContext>}></Route>
        <Route path="/redux" element={<PageUseRedux></PageUseRedux>}></Route>
        <Route path="/zustland" element={<PageUseZustland></PageUseZustland>}></Route>
    </Routes>
  )
}
