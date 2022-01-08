// https://zenn.dev/uttk/articles/4649e49f1e6628

import Router from 'next/router'
import { GetServerSideProps } from 'next'

export default const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      statusCode: 302, // ステータスコード指定
      permanent: false, // 永続的なリダイレクトかどうか
      destination: '/profile', // リダイレクト先
      // destination: 'https://example.com/' // 別サイトでも指定可能
    },
  }
}
