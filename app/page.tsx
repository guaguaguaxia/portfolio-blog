import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`程序员，看书、徒步、健身、英语学习。对语言文字有较高的敏感度。`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
