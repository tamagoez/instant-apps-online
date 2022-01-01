// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const hello = (req, res) => {
  res.status(200).json({ sha: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA, message: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE })
}

export default hello
