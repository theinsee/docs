"use client"

import { Web3Modal } from '@web3modal/react'

export default function Wallet(){
    const config = {
        projectId: 'c6e292b8bf792c6cda7deb686da21429',
        theme: 'dark',
        accentColor: 'blue',
        ethereum: {
          appName: 'web3Modal'
        }
      }
    return (<Web3Modal config={config}/>)
}