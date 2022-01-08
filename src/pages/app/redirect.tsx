// https://zenn.dev/uttk/articles/4649e49f1e6628

import { NextPage } from 'next'
import Router from 'next/router'

const RedirectPage: NextPage = () => return {}

RedirectPage.getInitialProps = async ({ res }) => {

  // サーバー側でリダイレクト
  if (typeof window === 'undefined') {
    res.writeHead(302, { Location: '/profile' })
    res.end()

    return {} // 空オブジェクトだと警告文が発生するので注意してください！
  }

  // クライアント側でリダイレクト
  Router.push('/profile')

  return {} // 同上
}

export default RedirectPage
