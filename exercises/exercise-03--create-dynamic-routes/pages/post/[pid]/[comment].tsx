import { useRouter, userRouter } from 'next/router'

const Comment = () => {
    const router = useRouter()

    console.log(router.query)

    return <p>Hello</p>
}