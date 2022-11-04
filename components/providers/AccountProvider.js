"use client"
import React from 'react'
import {AccountWrapper} from "../context/account"
export default function AccountProvider({children}) {
  return (
    <AccountWrapper>{children}</AccountWrapper>
  )
}
